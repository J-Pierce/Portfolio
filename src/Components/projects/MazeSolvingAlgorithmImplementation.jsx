import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import windowDimensions from "../WindowDimensions";
import MazeSolvingAlgorithm from "../../assets/maze solving algorithms.png";

export default function MazeSolvingAlgorithmImplementation() {
  const { width } = windowDimensions();
  return (
    <section className="project">
      <section className="banner">
        <section className="grid">
          <img src={MazeSolvingAlgorithm} alt="Maze Solving Algorithms" />
          <section className="text">
            <p id="name">Maze Solving Algorithms</p>
            <section className="line" />
            <section className="linksList">
              <p>Links:</p>
              <ul className="links">
                <li>
                  <a href="https://github.com/J-Pierce/Maze-Solving-Algorithms">
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
                  <p>python</p>
                </li>
                <li>
                  <p>algorithm implementation</p>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
      <section className="body">
        <p>This project is an implementation of two maze solving algorithms.</p>
        <p>
          The first, Trémaux's algorithm, marks any unvisited location and all
          its possible routes. It will then choose a route to take, prefering to
          start from the left and working clockwise around. If a route has
          already been taken, it cannot be chosen again. If all routes have been
          taken then it will leave the location from the route that it entered.
          By this process, eventually every location and every route from it
          will be tested until the end point is reached. This algorithm is
          guaranteed to work for all mazes with well-defined paths, including
          mazes with loops, but as it a depth-first search, can take some time
          to find the solution
        </p>
        <p>
          The second algorithm, Maze-routing algorithm, is similar to Trémaux's
          but relies on the fact that the coordinates of the endpoint are known.
          As with Trémaux's, it marks any unvisited location and all its
          possible routes, however when choosing a route to take, it will first
          try to take any path that lowers the Manhattan distance. As can been
          seen from the video below, with denser mazes both algorithms are
          similarly effective, however, with more sparsely populated mazes, the
          Maze-routing algorithm is preferred.
        </p>
        <iframe
          width={width < 600 ? width - 50 : 600}
          height="600"
          src="https://www.youtube.com/embed/MrNxC-tdB6U"
        ></iframe>
        <p>
          This demo was recorded running the code in a game called "The Farmer
          Was Replaced" in which the player has write code for a drone to farm
          crops, each with their own mechanics to solve. Each algorithm was run
          for 300 iterations in which, when the endpoint is reached, some maze
          walls are rearranged or removed. As such, as the iterations increase,
          the maze will have more loops and open areas which less sophisticated
          algoriths may struggle with.
        </p>
      </section>
    </section>
  );
}
