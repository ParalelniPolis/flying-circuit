import { useEffect } from "react";

export function Navigation() {
  useEffect(() => {
    if (typeof document !== "undefined") {
      console.log("hi");
    }
  });
  return (
    <header>
      <div className="container">
        <img src="/static/img/institute-presents.png" />
        <nav>
          <ul>
            <li>
              <a href="#about">ABOUT</a>
            </li>
            <li>
              <a href="#speakers">SPEAKERS</a>
            </li>
            <li>
              <a href="#schedule">SCHEDULE</a>
            </li>
            <li>
              <a href="#tickets">TICKETS</a>
            </li>
            <li>
              <a href="#partners">PARTNERS</a>
            </li>
            <li>
              <a href="#organizer">ORGANIZER</a>
            </li>
            <li>
              <a href="#newsletter">NEWSLETTER</a>
            </li>
          </ul>
        </nav>
      </div>
      <style jsx>{`
        header {
          background-color: #484848;
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 60px;
          display: flex;
          align-items: center;
          z-index: 200;
        }

        header * {
          display: inline;
        }

        header > .container {
          width: 1024px;
          margin: 0 auto;
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
          font-size: 0.8rem;
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
          margin: 15px 100px 0 0;
          padding: 5px;
          float: left;
        }
      `}</style>
    </header>
  );
}
