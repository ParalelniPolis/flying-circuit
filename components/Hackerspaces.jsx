export function Hackerspaces() {
  return (
    <div className="container hackerspaces">
      <div className="row">
        <h3>Hackerspaces</h3>
        <div className="one-half column hackerspace-card">
          <img className="hackerspace-image" src="/static/img/hackerspaces/dezentrum.svg" alt="Dezentrum" />
        </div>
        <div className="one-half column hackerspace-card">
          <img className="hackerspace-image" src="/static/img/hackerspaces/riat.svg" alt="Firstname Lastname" />
        </div>
      </div>
      <style jsx>{`
        .hackerspaces {
          margin-bottom: 200px;
        }
        .hackerspace-card {
          margin: 1%;
        }
        .hackerspace-image {
          width: 200px;
        }
      `}</style>
    </div>
  );
}
