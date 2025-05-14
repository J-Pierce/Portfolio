import { HashLink } from "react-router-hash-link";

import placeholder from "../assets/imagePlaceholder.png";
import NCnews from "../assets/NC-News.png";
import Backend from "../assets/Backend.png";
import pokemonBattler from "../assets/pokemonBattler.png";
import report from "../assets/reportScreenshot.png";

export default function Projects() {
  return (
    <section className="projects">
      <section className="grid">
        <h2>Projects</h2>

        <section className="projectsGrid">
          {/* <section className="projectCard">
            <HashLink to="/Knowva_Mobile_App#">
              <h3>Knowva Mobile App</h3>
              <img src={placeholder} alt="" />
            </HashLink>
          </section> */}

          <section className="projectCard">
            <HashLink to="/NC_News_Frontend#">
              <h3>NC News Frontend</h3>
              <img src={NCnews} alt="NC News Frontend project" />
            </HashLink>
          </section>

          <section className="projectCard">
            <HashLink to="/NC_News_Backend#">
              <h3>NC News Backend</h3>
              <img src={Backend} alt="NC News Backend project" />
            </HashLink>
          </section>

          {/* <section className="projectCard">
            <HashLink to="/Maze_Solving_Algorithm_Implementation#">
              <h3>Maze Solving Algorithm Implementation</h3>
              <img src={placeholder} alt="" />
            </HashLink>
          </section> */}

          <section className="projectCard">
            <HashLink to="/Pokemon_Battler#">
              <h3>Pokemon Battler</h3>
              <img src={pokemonBattler} alt="Pokemon Battler" />
            </HashLink>
          </section>

          <section className="projectCard">
            <HashLink to="/TEM_Simulations#">
              <h3>TEM Simulations</h3>
              <img src={report} alt="" />
            </HashLink>
          </section>

          {/* <section className="projectCard">
            <HashLink to="/Modelling_Josephson_Photonics_Junction">
              <h3>Modelling Josephson Photonics Junction</h3>
              <img src={placeholder} alt="" />
            </HashLink>
          </section> */}
        </section>
      </section>
    </section>
  );
}
