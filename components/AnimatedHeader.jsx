import { useState, useEffect } from "react";
import { Waypoint } from "react-waypoint";
import { HeaderBlackBg } from "./HeaderBlackBg";
import { HeaderWhiteBg } from "./HeaderWhiteBg";
import { HeroBlackBg } from "./HeroBlackBg";
import { HeroWhiteBg } from "./HeroWhiteBg";

const initialState = {
  innerHeight: 0,
  lockHeight: null
}


export function AnimatedHeader() {
  const [state, setState] = useState(initialState);

  // useEffect(() => {
  //   setState({ ...state, innerHeight: window.innerHeight });

  //   const onScroll = () => {
  //     const lockHeight = window.innerHeight + state.sectionTopMargin;

  //     if (window.scrollY > lockHeight) {
  //       // not revealing yet...
  //       setState({ ...state, lockHeight });
  //     } else {
  //       // whole logo revealed
  //       setState({ ...state, lockHeight: null });
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   return () => {
  //     window.removeEventListener("scroll", onScroll);
  //   };
  // }, [state.lockHeight]);
  return (
    <div>
      <div className="white-header-section">
        <div className="white-middle-bg" />
        <HeaderWhiteBg />
        <HeroWhiteBg />
      </div>
      <div className="black-header-section">
        <HeaderBlackBg />
        {/*<Waypoint onEnter={() => setIsHidden(false)} onLeave={() => setIsHidden(true)} />*/}
        <HeroBlackBg />
      </div>
      <style jsx>{`
        .white-header-section {
          width: 100%;
          background-color: white;
          height: 100vh;
        }
        .white-middle-bg {
          width: 100%;
          background-color: white;
          height: 100vh;
          z-index: 202;
          position: absolute;
        }
        .black-header-section {
          background-color: black;
          margin-top: 750px;
        }
      `}</style>
    </div>
  );
}
