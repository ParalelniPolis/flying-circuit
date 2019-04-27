import AnchorLink from 'react-anchor-link-smooth-scroll'

export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row join-us">
          <AnchorLink offset="100" href="#tickets">
            <button>Join us!</button>
          </AnchorLink>
        </div>
        <div className="row">
          <div className="copyright">Copyright &copy; {new Date().getFullYear()} Paralelní Polis</div>
        </div>
        <div className="row">{"#nobs #whistleblowing\n"}</div>
        <div className="row">
          <div className="social-icons">
            <ul>
              <li>FB</li>
              <li>TW</li>
              <li>IG</li>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>{`
        .social-icons ul li {
          display: inline;
          padding: 5px;
        }
        .join-us {
          margin-bottom: 30px;
        }
        footer {
          text-align: center;
        }
      `}</style>
    </footer>
  );
}
