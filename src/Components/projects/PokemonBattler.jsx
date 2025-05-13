import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

import NCnews from "../../assets/NC-News.png";

export default function PokemonBattler() {
  return (
    <section className="project">
      <header>
        <ul>
          <Link to="/" className="button">
            Home
          </Link>
        </ul>
      </header>
      <main>
        <section className="banner">
          <section className="grid">
            <img src={NCnews} alt="Pokemon Battler project" />
            <section className="text">
              <p id="name">Pokemon Battler</p>
              <section className="line" />
              <section className="linksList">
                <p>Links:</p>
                <ul className="links">
                  <li>
                    <a href="https://github.com/J-Pierce/Pokemon_Battler">
                      <section className="link">
                        <GitHubIcon />
                        <p>Github</p>
                      </section>
                    </a>
                  </li>
                </ul>
              </section>
              <section className="technicalSkills">
                <p id="title">Technical Skills:</p>
                <ul>
                  <li>
                    <p>Javascript</p>
                  </li>
                  <li>
                    <p>Jest</p>
                  </li>
                  <li>
                    <p>Node.js</p>
                  </li>
                  <li>
                    <p>Test Driven Development</p>
                  </li>
                  <li>
                    <p>inquirer</p>
                  </li>
                  <li>
                    <p>cli-spinner</p>
                  </li>
                </ul>
              </section>
            </section>
          </section>
        </section>
        <section className="body">
          <p>to-do</p>
        </section>
      </main>
    </section>
  );
}
