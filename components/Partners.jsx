export function Partners() {
  return (
    <div className="container partners">
      <div className="row">
        <h3>Partners {"&"} Community</h3>
        <div className="one-third column partner-card">
          <a href="https://www.jetbrains.com/">
            <img className="partner-image" src="/static/img/partners/jetbrains-blackandwhite.png" alt="JetBrains" />
          </a>
        </div>
        <div className="one-third column partner-card">
          <a href="https://paralelnapoliskosice.sk/">
            <img
              className="partner-image ppke-logo"
              src="/static/img/partners/ppke-logo-white.png"
              alt="Paralená Polis Košice"
            />
          </a>
        </div>
        <div className="one-third column partner-card">
          <a href="https://www.progressbar.sk/">
            <img
              className="partner-image progressbar-logo"
              src="/static/img/hackerspaces/progressbar_logo_black.png"
              alt="Progressbar"
            />
          </a>
        </div>
      </div>

      <div className="row second-row-margin">
        <div className="one-third column partner-card">
          <a href="https://www.blockchainlegal.cz/">
            <img className="partner-image" src="/static/img/partners/blockchainlegal.png" alt="Blockchain Legal" />
          </a>
        </div>
        <div className="one-third column partner-card">
          <a href="https://bounties.network/">
            <img className="partner-image" src="/static/img/partners/bounties-dot-network.svg" alt="Bounties.network" />
          </a>
        </div>
        <div className="one-third column partner-card">
          <a href="https://fullnode.berlin/">
          <img className="partner-image fullnode-logo" src="/static/img/hackerspaces/fn_logo_rgb.svg" alt="Full Node" />
          </a>
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
        .progressbar-logo {
          margin-top: 60px;
        }
        .second-row-margin {
          margin: 60px 0;
        }
        .fullnode-logo {
          margin-top: -30px;
        }
      `}</style>
    </div>
  );
}
