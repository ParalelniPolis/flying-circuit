export function HeaderBlackBg() {
  return (
    <header>
      <div className="header-logos black-bg">
        <div
          className="header-img"
          style={{
            backgroundImage: "url(/static/img/institute-presents.png)",
            backgroundSize: "130px 45px",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: 0,
            left: 0,
            width: "130px",
            height: "45px",
            margin: "40px 50px 0",
            zIndex: 201
          }}
        />
        <div
          className="header-img"
          style={{
            backgroundImage: "url(/static/img/paralelnipolis-logo-white.png)",
            backgroundSize: "100px 100px",
            backgroundRepeat: "no-repeat",
            position: "absolute",
            top: 0,
            right: 0,
            width: "100px",
            height: "100px",
            margin: "20px 50px 0",
            zIndex: 201
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
          z-index: 200;
        }
        .black-bg {
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
