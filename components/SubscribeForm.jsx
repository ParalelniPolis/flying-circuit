import { useState, createRef } from "react";
import Reaptcha from "reaptcha";
import NodeRSA from "node-rsa";
import PUBLIC_KEY from "../keys/public";
import PRIVATE_KEY from "../keys/private";

const ENCODING = "base64";

var rsa = new NodeRSA(PRIVATE_KEY);
rsa.importKey(PUBLIC_KEY);

const initialState = {
  email: "",
  name: "",
  projectDescription: "",
  track: "Privacy",
  honeypot: "",
  error: "",
  submitted: false,
  loading: false,
  recaptchaLoaded: false,
  recaptchaVerified: false,
};

export function SubscribeForm() {
  const [state, setState] = useState(initialState);
  // TODO: find out why recaptcha resets the state
  const emailRef = createRef();
  const nameRef = createRef();
  const descRef = createRef();
  const trackRef = createRef();

  function updateState(newState) {
    setState({ ...state, ...newState });
  }

  function onRecaptchaVerified() {
    updateState({
      recaptchaVerified: true,
      email: emailRef.current.value,
      name: nameRef.current.value,
      projectDescription: descRef.current.value,
      track: trackRef.current.value,
    });
  }

  async function sendToSpreadsheet() {
    const previousEmail = localStorage.getItem("hfc2019-email");

    if (previousEmail === state.email) {
      updateState({ submitted: true, error: "You already are on our list." });
      return false;
    }

    if (!state.email) {
      updateState({ submitted: true, error: "Email is missing." });
      return false;
    }

    if (!state.name) {
      updateState({ submitted: true, error: "Your name/nickname is missing." });
      return false;
    }

    if (!state.projectDescription) {
      updateState({ submitted: true, error: "Please describe what you're planning to work on during the event!" });
      return false;
    }

    try {
      updateState({ loading: true });

      const res = await fetch(
        `${process.env.GOOGLE_SCRIPT_URL}?name=${encodeURIComponent(
          rsa.encrypt(state.name, ENCODING)
        )}&email=${encodeURIComponent(rsa.encrypt(state.email, ENCODING))}&track=${encodeURIComponent(
          rsa.encrypt(state.track, ENCODING)
        )}&description=${encodeURIComponent(rsa.encrypt(state.projectDescription, ENCODING))}`
      );
      if (res.status === 200) {
        updateState({ submitted: true, error: "", loading: false });
        localStorage.setItem("hfc2019-email", state.email);
      }
    } catch (err) {
      updateState({ submitted: true, error: err.message, loading: false });
    }
  }

  return (
    <form
      onSubmit={async e => {
        e.preventDefault();

        if (e.target.honeypot.value || state.honeypot) {
          return false;
        }

        await sendToSpreadsheet();
      }}
    >
      <input
        className="honeypot"
        type="text"
        name="honeypot"
        defaultValue=""
        onChange={e => updateState({ honeypot: e.target.value })}
      />

      <label className="u-pull-left" htmlFor="track-select">
        Preferred track <span className="normal-text">(can be changed/picked on-site)</span>
      </label>

      <select className="u-full-width" id="track-select" ref={trackRef}>
        <option value="Privacy">Privacy</option>
        <option value="Decentralization">Decentralization</option>
        <option value="Urban Hacktivism">Urban Hacktivism</option>
      </select>

      <input className="u-full-width" ref={emailRef} type="email" name="email" placeholder="Email" id="email-input" />

      <input
        className="u-full-width"
        ref={nameRef}
        type="text"
        name="name"
        placeholder="Name/Nickname"
        id="name-input"
      />

      <textarea
        className="u-full-width"
        ref={descRef}
        type="text"
        name="description"
        placeholder={`What would you like to hack? "I don't know yet" is also an acceptable answer ;)`}
        id="project-description-input"
      />

      <Reaptcha sitekey={process.env.GOOGLE_RECAPTCHA_KEY} theme="dark" onVerify={onRecaptchaVerified} />

      <input
        className={`button ${state.recaptchaVerified ? "" : "button-disabled"}`}
        type="submit"
        value="RSVP"
        disabled={!state.recaptchaVerified}
      />

      {state.loading ? (
        <div className="row">Loading...</div>
      ) : (
        state.submitted &&
        (state.error ? (
          <div className="row">
            <div>{state.error}</div>
          </div>
        ) : (
          <div className="row">
            <div>Submitted! We're excited to see you at the event.</div>
          </div>
        ))
      )}
      <style jsx>{`
        .honeypot {
          display: none;
        }

        .button-disabled,
        .button-disabled:hover,
        .button-disabled:focus {
          color: #777777;
          border: 1px solid #777777;
          text-decoration: line-through;
        }
        .normal-text {
          font-weight: 300;
        }
      `}</style>
      <style jsx global>{`
        .g-recaptcha {
          margin-bottom: 20px;
        }
      `}</style>
    </form>
  );
}
