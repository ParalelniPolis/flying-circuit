export function Hero() {
  function scrollDown() {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 1400);
    }
  }
  return (
    <div className="header-graphics">
      <img className="flowers" src="/static/img/flowers.png" />
      <img className="head" src="/static/img/head.png" />
      <img className="flying-circus-text" src="/static/img/flying-circus-text.png" />
      <button className="scroll-down-btn" onClick={scrollDown}>scroll down (toto bude ikonka)</button>
      <style jsx>{`
        .header-graphics {
          margin-bottom: 100px;
          text-align: center;
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
          top: 110px;
          z-index: 101;
        }
        .flying-circus-text {
          position: absolute;
          width: 50%;
          z-index: 102;
          top: 150px;
          left: 25%;
        }
        .scroll-down-btn {
          margin-top: 50px;
        }
      `}</style>
    </div>
  );
}
