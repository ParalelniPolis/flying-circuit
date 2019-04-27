import { useState } from "react";

const initialState = {
  email: "",
  name: "",
  projectDescription: "",
};

export function Tickets() {
  const [state, setState] = useState(initialState);

  function updateState(key, value) {
    setState({ ...state, [key]: value });
  }

  return (
    <div className="container">
      <div className="row">
        <h3>Tickets</h3>
        <div>
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum
          lorem ipsum lorem ipsum lorem ipsum
        </div>
      </div>
      <div className="row ticket-form">
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
              placeholder="Describe what you want to build in few words"
              id="project-description-input"
              onChange={e => updateState("projectDescription", e.target.value)}
            />

            <input className="button" type="submit" value="RSVP" />
          </form>
        </div>
      </div>
      <style jsx>{`
        .ticket-form {
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
}
