import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Section } from "../components/Section";

export default () => (
  <div>
    <Header />
    <Section id="about">Code of conduct</Section>
    <Footer />
    <style global jsx>{`
      body {
        background-color: black;
        font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: white;
        font-size: 1.7rem;
      }
    `}</style>
  </div>
);
