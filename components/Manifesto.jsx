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
          Paralelní Polis mission is to bring alternatives and tools for preventing authoritarian tendencies in society.
          Hackatoshi’s Flying Circuit is an intervention of cypherpunks into both virtual and physical public space to
          concentrate inspiration, knowledge base and share the sweat to address sick parts of the system and fix them
          with solutions resulting from privacy and decentralized principles.
        </p>
      </div>

      <div className="row manifesto-paragraph">
        <h5> True hackathon </h5>
        <p>
          Weekend-long hacking competition focused on privacy, individual freedom, decentralization and viable system
          exploits.
        </p>
      </div>

      <div className="row manifesto-paragraph">
        <p>
          Hackers Congress Paralelni Polis (HCPP) has been successful in gathering great minds and thinkers from the
          Cypherpunk and Cryptoanarchist space. Yet all of the topics and ideas discussed during the congress are only
          as good as they can be applied, performed or achieved. The Hacks Sweatshop should motivate hackers, makers and
          developers to take their tools and skills into practice. The key goal of the hackathon is to prototype new
          concepts that will help people to protect their digital self or exploit existing systems that were built to
          constrain personal freedom.
        </p>
      </div>
      <div className="row">
        <h5>
          Join us: <a href="mailto:hackatoshi@flyingcircuit.com">hackatoshi@flyingcircuit.com</a>
        </h5>
      </div>

      {/*<div className="row join-us">
        <Link href="/code-of-conduct">
          <button className="btn">Code of conduct</button>
        </Link>
        <AnchorLink offset="100" href="#tickets">
          <button>Join us!</button>
        </AnchorLink>
      </div>*/}
      <style jsx>{`
        .manifesto-section {
          margin: 450px auto 0;
          width: 100%;
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
