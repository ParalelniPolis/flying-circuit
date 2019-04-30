import styled from "styled-components";

export function HeroBlackBg() {
  return (
    <div className="header-graphics-black">
      <img className="flowers" src="/static/img/flowers.png" />
      <img className="head" src="/static/img/head.png" />
      <style jsx>{`
        .header-graphics-black {
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
          margin-top: -80px;
          z-index: 101;
        }
      `}</style>
    </div>
  );
}
