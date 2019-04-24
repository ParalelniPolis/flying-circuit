export function About() {
  return (
    <div className="about-section">
      <div className="flowers" />
      <div className="head" />
      <div className="flying-circus-text" />
      <style jsx>{`
        .about-section {
          height: 400vh;
        }
        .flowers {
          background-image: url(/static/img/flowers.png);
          background-repeat: no-repeat;
          background-position: center;
          position: absolute;
          width: 100%;
          height: 900px;
          z-index: 100;
        }
        .head {
          background-image: url(/static/img/head.png);
          background-repeat: no-repeat;
          background-position: center;
          position: absolute;
          width: 100%;
          height: 1000px;
          z-index: 101;
        }
        .flying-circus-text {
          background-image: url(/static/img/flying-circus-text.png);
          background-repeat: no-repeat;
          background-position: center;
          position: absolute;
          width: 100%;
          height: 300px;
          z-index: 102;
        }
      `}</style>
    </div>
  );
}
