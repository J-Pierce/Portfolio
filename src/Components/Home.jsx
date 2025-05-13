import React from "react";
import { Link, Element } from "react-scroll";
import "../Css/App.css";

import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Extra from "./Extra";

function Home() {
  return (
    <section className="home">
      <header>
        <nav>
          <ul>
            <li key={"About Me"}>
              <Link
                className="button"
                spy={true}
                to={"About Me"}
                smooth={true}
                offset={-110}
                duration={500}
              >
                {"About Me"}
              </Link>
            </li>

            <li key={"Projects"}>
              <Link
                className="button"
                spy={true}
                to={"Projects"}
                smooth={true}
                offset={-110}
                duration={500}
              >
                {"Projects"}
              </Link>
            </li>

            <li key={"Experience"}>
              <Link
                className="button"
                spy={true}
                to={"Experience"}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {"Experience"}
              </Link>
            </li>
            <li key={"Education"}>
              <Link
                className="button"
                spy={true}
                to={"Education"}
                smooth={true}
                offset={-110}
                duration={500}
              >
                {"Education"}
              </Link>
            </li>
            <li key={"Extra"}>
              <Link
                className="button"
                spy={true}
                to={"Extra"}
                smooth={true}
                offset={-110}
                duration={500}
              >
                {"Extra"}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Element name="About Me">
          <About />
        </Element>
        <Element name="Projects">
          <Projects />
        </Element>
        <Element name="Experience">
          <Experience />
        </Element>
        <Element name="Education">
          <Education />
        </Element>
        <Element name="Extra">
          <Extra />
        </Element>
      </main>
    </section>
  );
}

export default Home;
