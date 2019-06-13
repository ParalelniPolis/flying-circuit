import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";

export function Manifesto() {
  return (
    <div className="container manifesto-section">

      <div className="row manifesto">
        <h3 className="manifesto-title">Manifesto</h3>
      </div>
      <div className="row manifesto-paragraph">
        <p>
          Paralelní Polis' mission is to bring alternatives and tools for  preventing authoritarian tendencies in society.
          Hackatoshi’s Flying Circuit is an intervention of cypherpunks into both virtual and physical public space to
          concentrate inspiration and knowledge to address sick parts of the system and fix them
          with solutions resulting from privacy and decentralized principles.
        </p>

      </div>

      <div className="row">
        <h3 className="manifesto-title"> True hackathon </h3>
        <p>
          Weekend-long hacking competition focused on privacy, individual freedom, decentralization and viable system
          exploits. Each track will have <u> three winning teams</u> awarded with prize money (cryptocurrency) & sw
          from the sponsors. Code submissions have to be open sourced.
        </p>
        <p>
          Hackers Congress Paralelni Polis <a href="https://hcpp.cz" target="_blank">(HCPP)</a> has been successful in gathering great minds and thinkers from the
          Cypherpunk and Cryptoanarchist space. Yet all of the topics and ideas discussed during the congress are only
          as good as they can be applied, performed or achieved. Hackatoshis's Flying Circuit should motivate hackers, makers and
          developers to take their tools and skills into practice. The key goal of the hackathon is to prototype new
          concepts that will help people to protect their digital identity or exploit existing systems that were built to
          constrain personal freedom.
        </p>
      </div>

      <div className="row">
        <h3 className="manifesto-title">Prize money</h3>
        <p>
          Each track will have 3 winning teams which means <u>9 winning teams</u> in total! The winners will be picked on the last day (July 21<sup>st</sup>)
          by a group of judges. The criteria will vary based on the competition track. The current total prize money is set to $5100
          and may be extended if we find more sponsors.
        </p>
      </div>
      <div className="row">

        <div className="four columns track-card">
          <h5>
            1<sup>st</sup> = $1000
          </h5>
        </div>

        <div className="four columns track-card">
          <h5>
            2<sup>st</sup> = $500
          </h5>
        </div>

        <div className="four columns track-card">
          <h5>
            3<sup>rd</sup> = $200
          </h5>
        </div>
      </div>

      <div className="row manifesto-paragraph">

      </div>
      {/*<div className="row join-us">*/}
      {/*  /!*<Link href="/code-of-conduct">*!/*/}
      {/*  /!*  <button className="btn">Code of conduct</button>*!/*/}
      {/*  /!*</Link>*!/*/}
      {/*  <AnchorLink offset="100" href="#tickets">*/}
      {/*    <button>Join us!</button>*/}
      {/*  </AnchorLink>*/}
      {/*</div>*/}
      <style jsx>{`
        .manifesto-section {
          margin-top: 50px;
        }

        .manifesto {
          text-align: center;
        }

        .manifesto-title {
          font-weight: 700;
          font-size: 3rem;
        }

        .manifesto-paragraph {
          font-size: 1.9rem;
          margin-top: 40px;
        }

        .manifesto-paragraph h5 {
          font-weight: 500;
          font-size: 2.5rem;
        }
        .join-us {
          margin-top: 50px;
        }
        .join-us button {
          margin: 5px;
        }
        
      `}</style>
    </div>
  );
}
