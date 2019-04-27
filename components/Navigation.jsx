import { useEffect } from "react";

export function Navigation() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      console.log("hi");
    }
  });
  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <ul className="navbar-list">
            <li className="navbar-item">
              <img src="/static/img/institute-presents.png" />
            </li>
            <li>
              <a className="navbar-link" href="#about">
                ABOUT
              </a>
            </li>
            <li>
              <a className="navbar-link" href="#speakers">
                SPEAKERS
              </a>
            </li>
            <li>
              <a className="navbar-link" href="#schedule">
                SCHEDULE
              </a>
            </li>
            <li>
              <a className="navbar-link" href="#tickets">
                TICKETS
              </a>
            </li>
            <li>
              <a className="navbar-link" href="#partners">
                PARTNERS
              </a>
            </li>
            <li>
              <a className="navbar-link" href="#organizer">
                ORGANIZER
              </a>
            </li>
            <li>
              <a className="navbar-link" href="#newsletter">
                NEWSLETTER
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <style jsx>{`
        header {
          background-color: #484848;
          height: 80px;
          z-index: 200;
        }

        header nav ul {
          margin: 0;
          padding: 0;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          list-style: none;
        }

        header li {
          margin: 12px;
          justify-content: flex-end;
        }

        header li a {
          padding: 1.25rem 0.5rem;
          font-size: 1rem;
          max-width: 140px;
          font-weight: bold;
          text-decoration: none;
          display: flex;
          align-items: flex-start;
          color: #e6e6e6;
        }

        header li a:hover,
        header li a:focus {
          color: #c3c3c3;
        }

        header img {
          height: 45px;
          margin: 7px 100px 0 0;
          padding: 5px;
          float: left;
        }
      `}</style>
    </header>
  );
}
