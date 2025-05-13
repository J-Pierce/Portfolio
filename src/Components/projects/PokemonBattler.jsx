import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

import pokemonBattler from "../../assets/pokemonBattler.png";

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
            <img src={pokemonBattler} alt="Pokemon Battler project" />
            <section className="text">
              <p id="toBig">Pokemon Battler - Object Oriented Programming</p>
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
                  <li>
                    <p>OOP</p>
                  </li>
                </ul>
              </section>
            </section>
          </section>
        </section>
        <section className="body">
          <p>
            This project is a command line game where the player can select 6
            pokemon to battle against an opponent. Within a battle they can
            choose what move to play and swap out pokemon.Once all of either
            your or your opponent's pokemon have fainted the match is over.
          </p>

          <p>
            This project was built using javascript, primary focusing on object
            oriented programming, and using a collection of libraries for the
            command line interaction and input.
          </p>

          <p>
            To try it out, click on the github link and follow the install and
            play instructions
          </p>
        </section>
      </main>
    </section>
  );
}
