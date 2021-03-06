import { SubscribeForm } from "./SubscribeForm";

export function Content() {
  return (
    <div className="container content">
      <div className="row">
        <h3 className="manifesto-title">Tracks</h3>
      </div>
      <div className="row">
        <div className="four columns track-card">
          <h5>Privacy</h5>
          <p>
            Projects participating in the privacy challenge should enhance the power of individuals over their
            personal data. The teams should focus on systematically limiting the privacy breaching factors rather then
            performing phishing attempts and social attacks during the event itself ;).
          </p>
        </div>
        <div className="four columns track-card">
          <h5>Decentralization</h5>
          <p>
            Decentralization is one of the key topics surrounding Paralelni Polis, it’s a universal protection against a
            single point of failure in most systems including human decision making. Teams in this track should help to discover
            SPoFs and design fixes.
          </p>
        </div>
        <div className="four columns track-card">
          <h5>Urban Hacktivism</h5>
          <p>
            This track doesn’t require to spend the weekend inside, on the contrary, projects submitted for this
            track have to be materialized in the city of Prague. The installations or performances have be relevant for
            Paralelni Polis and should encourage an independent society or discover nonsense in the urban infrastructure.
          </p>
        </div>
      </div>
      <div className="row award-card">
        <h3 className="manifesto-title"> Open Exploit Awards </h3>
        <div className="twelve columns">
          Group of curators will pick interesting exploits that were revealed over the course of
          last year and award those who released them. These teams will be ceremonially awarded (present or remote) and
          publicly praised for their actions (unless they don't want to). Anyone can nominate a project directly to&nbsp;
          <a href="mailto:hackatoshi@flyingcircuit.com">hackatoshi@flyingcircuit.com</a>!
        </div>
      </div>
      <style jsx>{`
        .manifesto-title {
          font-weight: 700;
          font-size: 3rem;
        }

        .content {
          margin-bottom: 100px;
        }
        .track-card {
        }

        .track-card div {
          text-align: justify;
        }
        .award-card {
          margin-top: 40px;
        }
        .award-card div {
          text-align: justify;
        }
      `}</style>
    </div>
  );
}
