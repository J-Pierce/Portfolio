import { Link } from "react-router-dom";

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
            <Link to="/Knowva_Mobile_App">
              <h3>Knowva Mobile App</h3>
              <img src={placeholder} alt="" />
            </Link>
          </section> */}

          <section className="projectCard">
            <Link to="/NC_News_Frontend">
              <h3>NC News Frontend</h3>
              <img src={NCnews} alt="NC News Frontend project" />
            </Link>
          </section>

          <section className="projectCard">
            <Link to="/NC_News_Backend">
              <h3>NC News Backend</h3>
              <img src={Backend} alt="NC News Backend project" />
            </Link>
          </section>

          {/* <section className="projectCard">
            <Link to="/Maze_Solving_Algorithm_Implementation">
              <h3>Maze Solving Algorithm Implementation</h3>
              <img src={placeholder} alt="" />
            </Link>
          </section> */}

          <section className="projectCard">
            <Link to="/Pokemon_Battler">
              <h3>Pokemon Battler</h3>
              <img src={pokemonBattler} alt="Pokemon Battler" />
            </Link>
          </section>

          <section className="projectCard">
            <Link to="/TEM_Simulations">
              <h3>TEM Simulations</h3>
              <img src={report} alt="" />
            </Link>
          </section>

          {/* <section className="projectCard">
            <Link to="/Modelling_Josephson_Photonics_Junction">
              <h3>Modelling Josephson Photonics Junction</h3>
              <img src={placeholder} alt="" />
            </Link>
          </section> */}
        </section>
      </section>
    </section>
  );
}
