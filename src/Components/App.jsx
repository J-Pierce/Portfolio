import "../Css/App.css";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Extra from "./Extra";
import React from "react";
import { Link, Element } from "react-scroll";

function App() {
  const items = ["About Me", "Projects", "Experience", "Education", "Extra"];

  return (
    <>
      <header>
        <nav>
          <ul>
            {items.map((item) => {
              return (
                <li key={item}>
                  <Link
                    className="button"
                    spy={true}
                    to={item}
                    smooth={true}
                    offset={-110}
                    duration={500}
                  >
                    {item}
                  </Link>
                </li>
              );
            })}
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
    </>
  );
}

export default App;
