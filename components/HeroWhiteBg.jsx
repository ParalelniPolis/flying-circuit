import { useState, useEffect } from "react";
import { ScrollIcon } from "./ScrollIcon";
import config from "../config";
import withResponsiveCSS from "../utils/withResponsiveCSS";

const { css } = config;

const initialState = {
  revealedFromHeight: 300,
  logoOffsetTop: 150,
  logoWidth: 525,
  logoHeight: 300,
  innerHeight: 0,
  scrollY: 0,
  isMounted: false,
  position: "fixed",
};

function HeroWhiteBgComponent(props) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    // Use Desktop's media queries for default responsive CSS
    let responsiveCSS = css.mediaQueries.desktop;
    if (window.innerWidth < css.mediaQueries.desktop)
      setState({ ...state, mounted: true, innerHeight: window.innerHeight });

    const onScroll = () => {
      const revealYStart = window.innerHeight - state.logoOffsetTop - state.logoHeight;
      const revealYEnd = revealYStart + state.logoHeight;

      if (window.scrollY < revealYStart) {
        // not revealing yet...
        setState({
          ...state,
          scrollY: window.scrollY,
          revealedFromHeight: state.logoHeight,
          logoOffsetTop: 150,
          position: "fixed",
        });
      } else if (window.scrollY > revealYStart && window.scrollY < revealYEnd) {
        // within logo height
        setState({
          ...state,
          scrollY: window.scrollY,
          revealedFromHeight: state.logoHeight - (window.scrollY - revealYStart),
          logoOffsetTop: 150,
          position: "fixed",
        });
      } else if (window.scrollY > revealYEnd && window.scrollY < window.innerHeight + 600) {
        // after logo revealed BUT still fixated
        setState({ ...state, scrollY: window.scrollY, revealedFromHeight: 0, logoOffsetTop: 150, position: "fixed" });
      } else {
        // whole logo revealed and is scrolled away
        setState({
          ...state,
          scrollY: window.scrollY,
          revealedFromHeight: 0,
          logoOffsetTop: window.innerHeight + 750,
          position: "absolute",
        });
      }
    };

    window.addEventListener("resize", onScroll);
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("scroll", onScroll);
    };
  }, [state.scrollY]);

  console.log(props);
  return (
    <div className="header-graphics-white">
      <div
        style={{
          backgroundImage: "url(/static/img/hfc-text-bw-transparent.png)",
          backgroundSize: `${state.logoWidth}px ${state.logoHeight}px`,
          backgroundRepeat: "no-repeat",
          position: state.position,
          width: `${state.logoWidth}px`,
          height: `${state.revealedFromHeight}px`,
          zIndex: 203,
          top: `${state.logoOffsetTop}px`,
          left: "25%",
          display: state.revealedFromHeight === 0 ? "none" : "block",
        }}
      />
      <div
        style={{
          backgroundImage: "url(/static/img/hfc-text-color-transparent.png)",
          backgroundSize: `${state.logoWidth}px ${state.logoHeight}px`,
          backgroundRepeat: "no-repeat",
          position: state.position,
          width: `${state.logoWidth}px`,
          height: `${state.logoHeight}px`,
          zIndex: 201,
          top: `${state.logoOffsetTop}px`,
          left: "25%",
        }}
      />
      <div
        className="scroll-down"
        style={{ top: `${state.mounted ? state.innerHeight - 150 : 500}px`, position: "absolute" }}
      >
        <ScrollIcon scrollTo="#manifesto" smoothScroll={true} />
      </div>
      <style jsx>{`
        .header-graphics-white {
          text-align: center;
          background-color: #ffffff;
        }
      `}</style>
    </div>
  );
}

export const HeroWhiteBg = withResponsiveCSS(HeroWhiteBgComponent);
