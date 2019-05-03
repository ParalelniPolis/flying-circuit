import { useState, useEffect } from "react";
import withResponsiveCSS from "../utils/withResponsiveCSS";

function HeaderWhiteBgComponent() {
  const [isHidden, hide] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight) {
        hide(true)
      } else {
        hide(false)
      }
    };

    window.addEventListener("resize", onScroll);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  });

  return (
    <header>
      <div className="header-logos white-bg">
        <div
          className="header-img"
          style={{
            backgroundImage: "url(/static/img/institute-presents-black.png)",
            backgroundSize: "130px 45px",
            backgroundRepeat: "no-repeat",
            position: "fixed",
            top: 0,
            left: 0,
            width: "130px",
            height: "45px",
            margin: "40px 50px 0",
            transition: "opacity 0.5s linear",
            transform: "translate(0)",
            opacity: isHidden ? 0 : 1
          }}
        />
        <div
          className="header-img"
          style={{
            backgroundImage: "url(/static/img/paralelnipolis-logo.png)",
            backgroundSize: "100px 100px",
            backgroundRepeat: "no-repeat",
            position: "fixed",
            top: 0,
            right: 0,
            width: "100px",
            height: "100px",
            margin: "20px 50px 0",
            transition: "opacity 0.5s linear",
            transform: "translate(0)",
            opacity: isHidden ? 0 : 1
          }}
        />
      </div>
      <style jsx>{`
        header {
          width: 100%;
          position: fixed;
          top: 0;
          padding: 10px 0;
          height: 120px;
        }
        .white-bg {
          background-color: #ffffff;
        }
        .header-logos {
          margin-top: 20px;
          display: block;
          clear: both;
        }
      `}</style>
    </header>
  );
}

export const HeaderWhiteBg = withResponsiveCSS(HeaderWhiteBgComponent);
