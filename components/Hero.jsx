import ParallaxMousemove from "react-parallax-mousemove";
import { ScrollIcon } from "./ScrollIcon";

// TODO (michal): fix parallax effect (currently not working)
export function Hero() {
  return (
    <div className="header-graphics">
      <ParallaxMousemove>
        <ParallaxMousemove.Layer
          config={{
            xFactor: 0.5,
            yFactor: 0.5,
            springSettings: {
              stiffness: 50,
              damping: 30,
            },
          }}
        >
          <img className="flowers" src="/static/img/flowers.png" />
        </ParallaxMousemove.Layer>
        <ParallaxMousemove.Layer
          config={{
            xFactor: 0.5,
            yFactor: 0.5,
            springSettings: {
              stiffness: 50,
              damping: 30,
            },
          }}
        >
          <img className="head" src="/static/img/head.png" />
        </ParallaxMousemove.Layer>
        <ParallaxMousemove.Layer
          config={{
            xFactor: 0.5,
            yFactor: 0.5,
            springSettings: {
              stiffness: 50,
              damping: 40,
            },
          }}
        >
          <img className="flying-circus-text" src="/static/img/hfc-text-color-transparent.png" />
        </ParallaxMousemove.Layer>
      </ParallaxMousemove>
      <div className="scroll-down">
        <ScrollIcon scrollTo="#manifesto" smoothScroll={true} />
      </div>
      <style jsx>{`
        .header-graphics {
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
        .scroll-down {
          margin-top: 100px;
        }
      `}</style>
    </div>
  );
}
