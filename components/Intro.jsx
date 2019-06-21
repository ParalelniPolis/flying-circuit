import { useState, useEffect } from "react";
import { ScrollIcon } from "./ScrollIcon";
import { HeroBlackBg } from "./HeroBlackBg";

const initialState = {
  innerHeight: 0,
  lockHeight: null,
  currentScrollHeight: null,
  logoOpacity: 0,
  lockScroll: true,
  logoWidth: 80,
  logoMarginLeft: 40,
  logoIntensity: 100,
};

let scrollTo = null;

export function Intro() {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    if (typeof window !== "undefined") {
      scrollTo = id => {
        document.getElementById(id).scrollIntoView({
          behavior: "smooth"
        });
      };
    }

    setState({ ...state, innerHeight: window.innerHeight });

    const onScroll = () => {
      const lockHeight = window.innerHeight + state.sectionTopMargin;
      var logoIntensity = 100 - (window.scrollY / 10) * 2;
      // console.log(logoIntensity);
      setState({ ...state, logoIntensity: logoIntensity });

      // var logoOpacityA = window.scrollY / 1000;
      // var logoWidth = window.scrollY;
      // //
      // setState({...state, logoOpacity: logoOpacityA});

      // if (window.scrollY > lockHeight) {
      //   // not revealing yet...
      //   setState({ ...state, lockHeight });
      // } else {
      //   // whole logo revealed
      //   setState({ ...state, lockHeight: null });
      // }
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [state.lockHeight, state.logoOpacity, state.logoIntensity]);

  return (
    <div>
      <div className="intro">
        <div className="u-full-width header row">
          <div className="header-logos" id="leftTop">
            <img src="/static/img/institute-presents-black.png" />
          </div>

          <div className="header-logos" id="rightTop">
            <img src="/static/img/paralelnipolis-logo.png" />
          </div>

          <div className="container navbar">
            <ul className="">
              <li>
                <a onClick={() => {
                    if (scrollTo) {
                      scrollTo("manifesto");
                    }
                  }}>Manifesto</a>
              </li>
              <li>
                <a onClick={() => {
                    if (scrollTo) {
                      scrollTo("content");
                    }
                  }}>Topics</a>
              </li>
              <li>
                <a
                  onClick={() => {
                    if (scrollTo) {
                      scrollTo("signup");
                    }
                  }}
                >
                  Sign Up
                </a>
              </li>
              <li>
                <a onClick={() => {
                    if (scrollTo) {
                      scrollTo("sponsors");
                    }
                  }}>Sponsors</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="info row">
          <div className="u-full-width column">
            July 19<sup>th</sup>-21<sup>st</sup>, 2019, Prague, CZ
          </div>
        </div>

        <div className="container sticky">
          <div className="intro-body row sticky">
            {/*<img src="/static/img/hfc-text-bw-transparent.png"*/}
            {/*   style={{*/}
            {/*     width: `${state.logoWidth}%`,*/}
            {/*     // marginLeft: `-${state.logoMarginLeft}%`,*/}
            {/*}}/>*/}
            <img
              src="/static/img/hfc-text-color-transparent.png"
              style={{
                width: `${state.logoWidth}%`,
                // marginLeft: `-${state.logoMarginLeft}%`,
                filter: `grayscale(${state.logoIntensity}%)`,
                // opacity: `${state.logoOpacity}`
              }}
            />
          </div>
          {/*<div*/}
          {/*  className="scroll-down row"*/}
          {/*  // style={{ top: `${state.mounted ? state.innerHeight - 150 : 500}px`, position: "absolute" }}*/}
          {/*>*/}
          {/*  <ScrollIcon scrollTo="#manifesto" smoothScroll={true} />*/}
          {/*</div>*/}
        </div>
        {/*<div className="test">*/}
        {/*  Test*/}
        {/*</div>*/}
      </div>
      <div className="sticky">
        <div className="container black">
          <div className="row u-full-width black">
            <img className="flowers" src="/static/img/flowers.png" />
            {/*<div className="test">*/}
            <img className="head sticky" src="/static/img/head.png" />
            {/*</div>*/}
          </div>
        </div>
      </div>

      <style jsx>{`
        .test {
          position: relative;
          overflow: hidden;
          margin-top: -80px;
        }
        .info {
          color: black;
          font-weight: 700;
          font-size: 2rem;
          text-align: center;
        }
        .sticky {
          position: sticky;
          top: 0;
        }
        .intro {
          background: white;
          background: linear-gradient(white, black);
          // min-height: -webkit-fill-available;
          // min-height: -moz-available;
          // min-height: fill-available;
          height: 100vh;
        }

        .intro-body {
          padding: 5%;
        }

        .header {
          top: 0;
          padding: 40px;
          height: 120px;
          z-index: 200;
        }
        .header a {
          cursor: pointer;
        }

        .header-logos {
          display: inline-block;
          margin-bottom: 45px;
        }
        .header-logos img {
          max-width: 130px;
          max-height: 80px;
        }

        #leftTop {
          float: left;
        }

        #rightTop {
          margin-top: -20px;
          float: right;
        }

        .intro-body {
          text-align: center;
        }

        .intro-body img {
          width: 80%;
          height: auto;
          position: sticky;
          position: -webkit-sticky;
          top: 50px;
          display: initial;
        }

        .scroll-down {
        }

        .black {
          text-align: center;
          background-color: #000000;
        }
        .flowers {
          width: 96%;
          margin: 0 2%;
          z-index: 100;
        }
        .head {
          position: absolute;
          width: 90%;
          left: 29%;
          margin-top: -60px;
          z-index: 100;
          // object-fit: contain;
          // overflow:hidden;
        }

        .navbar {
          text-align: center;
        }

        ul {
          list-style-type: none;
          margin: 0 auto;
          padding: 0;
          overflow: hidden;
          display: inline-block;
        }

        li {
          float: left;
        }

        li a {
          display: block;
          color: black;
          text-align: center;
          font-size: 1.6rem;
          margin: 10px 20px;
          padding: 10px 10px;
          text-decoration: none;
        }

        li a:hover {
          color: #6b6b6b;
          border-bottom: 2px solid #6b6b6b;
        }
      `}</style>
    </div>
  );
}
