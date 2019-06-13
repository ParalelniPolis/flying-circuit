export function Sponsors() {
  return (
    <div className="container sponsors">
      <div className="row">
        <h3>Sponsors</h3>
        <div className="one-half column sponsor-card">
          <img className="sponsor-image" src="/static/img/sponsors/polynom-logo.svg" alt="Polynom" />
        </div>
        <div className="one-half column sponsor-card">
          <img className="sponsor-image whiteblock-logo" src="/static/img/sponsors/whiteblock-logo-light.png" alt="Whiteblock" />
        </div>
      </div>

      <style jsx>{`
        .sponsors {
          margin-bottom: 200px;
        }
        .sponsor-card {
          margin: 1%;
        }
        .sponsor-image {
          width: 200px;
        }
        .whiteblock-logo {
          margin-top: 40px;
        }
      `}</style>
    </div>
  );
}
