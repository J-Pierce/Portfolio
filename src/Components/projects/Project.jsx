import { useParams } from "react-router-dom";

import KnowvaMobileApp from "./KnowvaMobileApp";
import NcNewsFrontend from "./NcNewsFrontend";
import NcNewsBackend from "./NcNewsBackend";
import MazeSolvingAlgorithmImplementation from "./MazeSolvingAlgorithmImplementation";
import PokemonBattler from "./PokemonBattler";
import TEMSimulations from "./TEMSimulations";
import ModellingJosephsonPhotonicsJunction from "./ModellingJosephsonPhotonicsJunction";

export default function Project() {
  const { project } = useParams();

  if (project === "Knowva_Mobile_App") {
    return <KnowvaMobileApp />;
  } else if (project === "NC_News_Frontend") {
    return <NcNewsFrontend />;
  } else if (project === "NC_News_Backend") {
    return <NcNewsBackend />;
  } else if (project === "Maze_Solving_Algorithm_Implementation") {
    return <MazeSolvingAlgorithmImplementation />;
  } else if (project === "Pokemon_Battler") {
    return <PokemonBattler />;
  } else if (project === "TEM_Simulations") {
    return <TEMSimulations />;
  } else if (project === "Modelling_Josephson_Photonics_Junction") {
    return <ModellingJosephsonPhotonicsJunction />;
  }
}
