import React from "react";
import { useState } from "react";
import { HashLink } from "react-router-hash-link";

import "../Css/App.css";
import MenuIcon from "@mui/icons-material/Menu";
import windowDimensions from "./WindowDimensions";

import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Extra from "./Extra";

const scrollWithOffset = (el, offset) =>
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.pageYOffset + offset,
    behavior: "smooth",
  });

function LargeNavBar() {
  return (
    <section className="large">
      <ul>
        <li key={"About Me"}>
          <HashLink
            smooth
            to="/#About"
            scroll={(el) => scrollWithOffset(el, -70)}
            className="button"
          >
            About
          </HashLink>
        </li>

        <li key={"Projects"}>
          <HashLink
            smooth
            to="/#Projects"
            scroll={(el) => scrollWithOffset(el, -70)}
            className="button"
          >
            Projects
          </HashLink>
        </li>

        <li key={"Experience"}>
          <HashLink
            smooth
            to="/#Experience"
            scroll={(el) => scrollWithOffset(el, -70)}
            className="button"
          >
            Experience
          </HashLink>
        </li>
        <li key={"Education"}>
          <HashLink
            smooth
            to="/#Education"
            scroll={(el) => scrollWithOffset(el, -70)}
            className="button"
          >
            Education
          </HashLink>
        </li>
        <li key={"Extra"}>
          <HashLink
            smooth
            to="/#Extra"
            scroll={(el) => scrollWithOffset(el, -70)}
            className="button"
          >
            Extra
          </HashLink>
        </li>
      </ul>
    </section>
  );
}

function SmallNavBar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className="small">
      <section className="button">
        <MenuIcon fontSize="inherit" onClick={toggleVisibility} />
      </section>
      <Dropdown isVisible={isVisible} toggleVisibility={toggleVisibility} />
    </section>
  );
}

function Dropdown(props) {
  return (
    <div className="large">
      {props.isVisible ? (
        <ul>
          <li key={"About Me"}>
            <HashLink
              smooth
              to="/#About"
              onClick={props.toggleVisibility}
              scroll={(el) => scrollWithOffset(el, -100)}
              className="button"
            >
              About
            </HashLink>
          </li>

          <li key={"Projects"}>
            <HashLink
              smooth
              to="/#Projects"
              onClick={props.toggleVisibility}
              scroll={(el) => scrollWithOffset(el, -70)}
              className="button"
            >
              Projects
            </HashLink>
          </li>

          <li key={"Experience"}>
            <HashLink
              smooth
              to="/#Experience"
              onClick={props.toggleVisibility}
              scroll={(el) => scrollWithOffset(el, -70)}
              className="button"
            >
              Experience
            </HashLink>
          </li>
          <li key={"Education"}>
            <HashLink
              smooth
              to="/#Education"
              onClick={props.toggleVisibility}
              scroll={(el) => scrollWithOffset(el, -70)}
              className="button"
            >
              Education
            </HashLink>
          </li>
          <li key={"Extra"}>
            <HashLink
              smooth
              to="/#Extra"
              onClick={props.toggleVisibility}
              scroll={(el) => scrollWithOffset(el, -70)}
              className="button"
            >
              Extra
            </HashLink>
          </li>
        </ul>
      ) : null}
    </div>
  );
}

function NavBar() {
  const { width } = windowDimensions();

  const ToRenderChild = width > 860 ? LargeNavBar : SmallNavBar;

  return (
    <nav>
      <ToRenderChild />
    </nav>
  );
}

export default function Home() {
  return (
    <section className="home">
      <header>
        <NavBar />
      </header>
      <main>
        <section id="About">
          <About />
        </section>
        <section id="Projects">
          <Projects />
        </section>
        <section id="Experience">
          <Experience />
        </section>
        <section id="Education">
          <Education />
        </section>
        <section id="Extra">
          <Extra />
        </section>
      </main>
    </section>
  );
}
