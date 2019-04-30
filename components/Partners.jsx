import { useState } from "react";

const initialState = {
  showForm: false,
  email: "",
  name: "",
  message: "",
};

export function Partners() {
  const [state, setState] = useState(initialState);

  function updateState(key, value) {
    setState({ ...state, [key]: value });
  }

  return (
    <div className="container partners">
      <div className="row">
        <h3>Partners</h3>
        <div className="one-third column partner-card">
          <img className="partner-image" src="/static/img/paralelnipolis-logo-white.png" alt="Firstname Lastname" />
        </div>
        <div className="one-third column partner-card">
          <img className="partner-image" src="/static/img/paralelnipolis-logo-white.png" alt="Firstname Lastname" />
        </div>
        <div className="one-third column partner-card">
          <img className="partner-image" src="/static/img/paralelnipolis-logo-white.png" alt="Firstname Lastname" />
        </div>
      </div>
      <div className="row">
        <button className="btn" onClick={() => updateState("showForm", !state.showForm)}>
          Become a partner!
        </button>
      </div>
      {state.showForm && (
        <div className="row">
          <div className="six columns offset-by-three">
            <form
              onSubmit={e => {
                e.preventDefault();
                console.log("TODO: implement form sending", state);
              }}
            >
              <input
                className="u-full-width"
                type="email"
                placeholder="Email"
                id="email-input"
                onChange={e => updateState("email", e.target.value)}
              />

              <input
                className="u-full-width"
                type="text"
                placeholder="Name"
                id="name-input"
                onChange={e => updateState("name", e.target.value)}
              />

              <textarea
                className="u-full-width"
                type="text"
                placeholder="Message"
                id="message-input"
                onChange={e => updateState("message", e.target.value)}
              />

              <input className="button-primary" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      )}

      <style jsx>{`
        .partners {
          margin-bottom: 200px;
        }
        .partner-card {
          margin: 1.3%;
        }
        .partner-image {
          width: 200px;
        }
      `}</style>
    </div>
  );
}
