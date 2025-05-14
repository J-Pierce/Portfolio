import React from "react";
import { useState } from "react";
import { Link, Element } from "react-scroll";
import "../Css/App.css";
import MenuIcon from "@mui/icons-material/Menu";
import windowDimensions from "./WindowDimensions";

import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Extra from "./Extra";

function LargeNavBar() {
  return (
    <section className="large">
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
    </section>
  );
}

function SmallNavBar() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  function Dropdown(props) {
    return (
      <div className="large">
        {props.isVisible ? (
          <ul>
            <li key={"About Me"}>
              <Link
                className="button"
                spy={true}
                to={"About Me"}
                smooth={true}
                offset={-300}
                duration={500}
                onClick={toggleVisibility}
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
                offset={-300}
                duration={500}
                onClick={toggleVisibility}
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
                offset={-270}
                duration={500}
                onClick={toggleVisibility}
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
                offset={-300}
                duration={500}
                onClick={toggleVisibility}
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
                offset={-270}
                duration={500}
                onClick={toggleVisibility}
              >
                {"Extra"}
              </Link>
            </li>
          </ul>
        ) : null}
      </div>
    );
  }

  return (
    <section className="small">
      <section className="button">
        <MenuIcon fontSize="inherit" onClick={toggleVisibility} />
      </section>
      <Dropdown isVisible={isVisible} />
    </section>
  );
}

function NavBar() {
  const { width } = windowDimensions();

  const ToRenderChild = width > 765 ? LargeNavBar : SmallNavBar;

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
