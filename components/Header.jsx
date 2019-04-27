import { useEffect } from "react"

export function Header() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      console.log("hi")
      console.log(window.innerWidth)
    }
  })
  return (
    <header>
      <div className="">
        <img className="header-img align-left" src="/static/img/institute-presents.png" />
        <img className="header-img polis-logo align-right" src="/static/img/paralelnipolis-logo-white.png" />
      </div>
      <style jsx>{`
        header {
          margin: 10px 0;
          height: 80px;
          z-index: 200;
        }

        .container {
          maw-width
        }

        img {
          height: 50px;
          margin: 50px;
        }

        .polis-logo {
          height: 100px;
        }

        .align-left {
          float: left;
        }

        .align-right {
          float: right;
        }
      `}</style>
    </header>
  );
}
