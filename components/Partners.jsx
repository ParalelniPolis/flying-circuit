export function Partners() {
  return (
    <div className="container partners">
      <div className="row">
        <h3>Partners</h3>
        <div className="one-half column partner-card">
          <img className="partner-image" src="/static/img/partners/jetbrains-blackandwhite.png" alt="JetBrains" />
        </div>
        <div className="one-half column partner-card">
          <img className="partner-image ppke-logo" src="/static/img/partners/ppke-logo-white.png" alt="Parallená Polis Košice" />
        </div>
      </div>

      <style jsx>{`
        .partners {
          margin-bottom: 200px;
        }
        .partner-card {
          margin: 1%;
        }
        .partner-image {
          width: 200px;
        }
        .ppke-logo {
          margin-top: 80px;
        }
      `}</style>
    </div>
  );
}
