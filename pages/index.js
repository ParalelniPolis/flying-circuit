import { Manifesto } from "../components/Manifesto";
import { AnimatedHeader } from "../components/AnimatedHeader";
import { Intro } from "../components/Intro";
import { Content } from "../components/Content";
import { Sponsors } from "../components/Sponsors";
import { Mentors } from "../components/Mentors";
import { Partners } from "../components/Partners";
import { Hackerspaces } from "../components/Hackerspaces";
import { Schedule } from "../components/Schedule";
import { Section } from "../components/Section";
import { Speakers } from "../components/Speakers";
import { Footer } from "../components/Footer";
import { SignUp } from "../components/SignUp";

export default () => (
  <div>
    {/*<AnimatedHeader />*/}
    <Intro />
    <Section id="manifesto">
      <Manifesto />
    </Section>
    <Section id="content">
      <Content />
    </Section>
    <Section id="signup">
      <SignUp />
    </Section>
    <Section id="partners">
      <Partners />
    </Section>
    <Section id="sponsors">
      <Sponsors />
    </Section>
    {/*<Section id="hackerspaces">
      <Hackerspaces />
    </Section>
    <Section id="speakers">
      <Speakers />
    </Section>
    <Section id="mentors">
      <Mentors />
    </Section>
    <Section id="schedule">
      <Schedule />
    </Section>*/}
    {/*<Footer />*/}
    <style global jsx>{`
      body {
        background-color: black;
        font-family: "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
        color: white;
        font-size: 1.7rem;
        overflow-x: hidden;
      }
      p {
        text-align: justify;
      }
      input[type="email"],
      input[type="number"],
      input[type="search"],
      input[type="text"],
      input[type="tel"],
      input[type="url"],
      input[type="password"],
      textarea,
      select {
        color: #9e9e9e;
        height: 50px;
        padding: 6px 20px;
        background-color: #080808;
        border: 1px solid #232323;
        box-shadow: none;
        box-sizing: border-box;
      }

      input[type="email"]:hover,
      input[type="number"]:hover,
      input[type="search"]:hover,
      input[type="text"]:hover,
      input[type="tel"]:hover,
      input[type="url"]:hover,
      input[type="password"]:hover,
      textarea:hover,
      select:hover {
        border: 1px solid #2f2f2f;
        outline: 0;
      }
      input[type="email"]:focus,
      input[type="number"]:focus,
      input[type="search"]:focus,
      input[type="text"]:focus,
      input[type="tel"]:focus,
      input[type="url"]:focus,
      input[type="password"]:focus,
      textarea:focus,
      select:focus {
        border: 1px solid #8e8e8e;
        outline: 0;
      }

      .button,
      button,
      input[type="submit"],
      input[type="reset"],
      input[type="button"] {
        display: inline-block;
        height: 50px;
        padding: 0 30px;
        color: #c5c5c5;
        text-align: center;
        font-size: 14px;
        font-weight: 600;
        line-height: 38px;
        letter-spacing: 0.1rem;
        text-transform: uppercase;
        text-decoration: none;
        white-space: nowrap;
        background-color: transparent;
        border: 1px solid #bbb;
        cursor: pointer;
        box-sizing: border-box;
      }

      .button:hover,
      button:hover,
      input[type="submit"]:hover,
      input[type="reset"]:hover,
      input[type="button"]:hover,
      .button:focus,
      button:focus,
      input[type="submit"]:focus,
      input[type="reset"]:focus,
      input[type="button"]:focus {
        color: #fff;
        border-color: #fff;
        outline: 0;
      }

      textarea {
        height: 150px;
      }
    `}</style>
  </div>
);
