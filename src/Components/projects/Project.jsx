import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import KnowvaMobileApp from "./KnowvaMobileApp";
import NcNewsFrontend from "./NcNewsFrontend";
import NcNewsBackend from "./NcNewsBackend";
import MazeSolvingAlgorithms from "./MazeSolvingAlgorithms";
import PokemonBattler from "./PokemonBattler";
import TEMSimulations from "./TEMSimulations";
import ModellingJosephsonPhotonicsJunction from "./ModellingJosephsonPhotonicsJunction";

const scrollWithOffset = (el, offset) =>
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.pageYOffset + offset,
  });

function Page({ project }) {
  if (project === "Knowva_Mobile_App") {
    return <KnowvaMobileApp />;
  } else if (project === "NC_News_Frontend") {
    return <NcNewsFrontend />;
  } else if (project === "NC_News_Backend") {
    return <NcNewsBackend />;
  } else if (project === "Maze_Solving_Algorithms") {
    return <MazeSolvingAlgorithms />;
  } else if (project === "Pokemon_Battler") {
    return <PokemonBattler />;
  } else if (project === "TEM_Simulations") {
    return <TEMSimulations />;
  } else if (project === "Modelling_Josephson_Photonics_Junction") {
    return <ModellingJosephsonPhotonicsJunction />;
  }
}

export default function Project() {
  const { project } = useParams();
  return (
    <section className="project">
      <header>
        <HashLink
          to="/#Projects"
          scroll={(el) => scrollWithOffset(el, -70)}
          className="button"
        >
          Home
        </HashLink>
      </header>
      <main>
        <Page project={project} />
      </main>
    </section>
  );
}
