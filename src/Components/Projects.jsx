import { Link } from "react-router-dom";

import NCnews from "../assets/NC-News.png";
import Backend from "../assets/Backend.png";
import pokemonBattler from "../assets/pokemonBattler.png";

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <section className="projectsGrid">
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
        <section className="projectCard">
          <Link to="/Pokemon_Battler">
            <h3>Pokemon Battler</h3>
            <img src={pokemonBattler} alt="Pokemon Battler" />
          </Link>
        </section>
      </section>
    </section>
  );
}
