import { About } from "../components/About";
import { Navigation } from "../components/Navigation";
import { Newsletter } from "../components/Newsletter";
import { Organizer } from "../components/Organizer";
import { Partners } from "../components/Partners";
import { Schedule } from "../components/Schedule";
import { Section } from "../components/Section";
import { Speakers } from "../components/Speakers";
import { Tickets } from "../components/Tickets";

export default () => (
  <div className="container">
    <Navigation />
    <Section id="about"><About /></Section>
    <Section id="speakers"><Speakers /></Section>
    <Section id="schedule"><Schedule /></Section>
    <Section id="tickets"><Tickets /></Section>
    <Section id="partners"><Partners /></Section>
    <Section id="organizer"><Organizer /></Section>
    <Section id="newsletter"><Newsletter /></Section>
    <footer>
      <div className="yellow-stripe" />
      <div className="bottom-nav">a b c d e</div>
      <div className="copyright">Copyright &copy; {new Date().getFullYear()} Paralelní Polis</div>
      <div className="social-icons">
        <ul>
          <li>FB</li>
          <li>TW</li>
          <li>IG</li>
        </ul>
      </div>
    </footer>
    <style jsx>{`
      .container {
        display: flex;
        color: white;
        flex-direction: column;
        justify-content: center;
      }
      .container;
    `}</style>
  </div>
);
