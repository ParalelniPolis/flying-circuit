import { HeaderBlackBg } from "./HeaderBlackBg";
import { HeaderWhiteBg } from "./HeaderWhiteBg";
import { HeroBlackBg } from "./HeroBlackBg";
import { HeroWhiteBg } from "./HeroWhiteBg";

export function AnimatedHeader() {
  return (
    <div>
      <div className="white-header-section">
        <HeaderWhiteBg />
        <HeroWhiteBg />
      </div>
      <div className="black-header-section">
        <HeaderBlackBg />
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
