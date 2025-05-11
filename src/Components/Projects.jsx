
import NCnews from "../assets/NC-News.png";
import Backend from "../assets/Backend.png";
import pokemonBattler from "../assets/pokemonBattler.png";

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <section className="projectsGrid">
        <a href={"https://github.com/J-Pierce/NC-News-FE"}>
          <section className="project">
            <h3>NC News Frontend</h3>
            <img src={NCnews} alt="NC News Frontend project" />
          </section>
        </a>
        <section className="project">
          <a href={"https://github.com/J-Pierce/NC-News-BE"}>
            <h3>NC News Backend</h3>
            <img src={Backend} alt="NC News Backend project" />
          </a>
        </section>
        <section className="project">
          <a href={"https://github.com/J-Pierce/Pokemon_Battler"}>
            <h3>Pokemon Battler</h3>
            <img src={pokemonBattler} alt="NC News project" />
          </a>
        </section>
      </section>
    </section>
  );
}
