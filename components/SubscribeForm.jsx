import { useState } from "react";
import Reaptcha from "reaptcha";
import NodeRSA from "node-rsa"

// Public key for message encryption
var publicKey = "\
   -----BEGIN PUBLIC KEY-----\
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDlhRrUpk1cx7CQbUVRhKu05SRh\
    RBaIjixRz5NNTYa6W1wOdgNf4PkZOuaXXzXQVbHW0ySmxE7OK8ua9TK4CZ7qEQGE\
    7Xwch4q4lc/YcG1t4pnKWuDuCGOaGuSry+64G0TgygIm/MwsY4VHP9gO/LcHGlyI\
    yT7cnI9oWhWlw0/HOQIDAQAB\
    -----END PUBLIC KEY-----";

var key = new NodeRSA();
key.importKey(publicKey);

const initialState = {
  email: "",
  name: "",
  projectDescription: "",
  honeypot: "",
  error: "",
  submitted: false,
  loading: false,
  recaptchaLoaded: false,
  recaptchaVerified: false,
};

export function SubscribeForm() {
  const [state, setState] = useState(initialState);

  function updateState(newState) {
    setState({ ...state, ...newState });
  }

  function onRecaptchaVerified(response) {
    updateState({ recaptchaVerified: true });
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
      updateState({ submitted: true, error: "Your name is missing." });
      return false;
    }

    if (!state.projectDescription) {
      updateState({ submitted: true, error: "Please describe what you're planning to work on during the event!" });
      return false;
    }

    try {
      updateState({ loading: true });

      const res = await fetch(
        `${process.env.GOOGLE_SCRIPT_URL}?name=${encodeURIComponent(key.encrypt(state.name))}&email=${encodeURIComponent(
          key.encrypt(state.email)
        )}&description=${encodeURIComponent(key.encrypt(state.projectDescription))}`
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
      <input
        className="u-full-width"
        type="email"
        name="email"
        placeholder="Email"
        id="email-input"
        onChange={e => updateState({ email: e.target.value })}
      />

      <input
        className="u-full-width"
        type="text"
        name="name"
        placeholder="Name"
        id="name-input"
        onChange={e => updateState({ name: e.target.value })}
      />

      <textarea
        className="u-full-width"
        type="text"
        name="description"
        placeholder="Describe what you want to build in few words"
        id="project-description-input"
        onChange={e => updateState({ projectDescription: e.target.value })}
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
      `}</style>
      <style jsx global>{`
        .g-recaptcha {
          margin-bottom: 20px;
        }
      `}</style>
    </form>
  );
}
