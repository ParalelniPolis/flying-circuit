import { useEffect } from "react";

export function Navigation() {

  useEffect(() => {
    if (typeof document !== "undefined") {
      console.log("hi")
    }
  })
  return (
    <header>
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

        header li {
          margin: 12px;
        }

        header li a {
          color: black;
          text-decoration: none;
          font-size: .8rem;
        }

        header img {
          height: 40px;
        }
      `}</style>
    </header>
  );
}
