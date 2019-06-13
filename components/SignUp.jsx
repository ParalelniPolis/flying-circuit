import { SubscribeForm } from "./SubscribeForm"

export function SignUp() {
  return (
    <div className="container signup">
      <div
        className="row"
        style={{
          marginTop: `40px`,
          marginBottom: `40px`,
        }}
      >
        <div className="twelve columns">
          <h5>Sign-up as a hacker</h5>
          <SubscribeForm />
        </div>
      </div>
      <div
        className="row"
        style={{
          marginTop: `40px`,
        }}
      >
        <h5>
          {" "}
          Join us: <a href="mailto:hackatoshi@flyingcircuit.com">hackatoshi@flyingcircuit.com</a>
        </h5>
      </div>
      <style jsx>{`
        .signup {
          margin-bottom: 200px;
        }
      `}</style>
    </div>
  );
}
