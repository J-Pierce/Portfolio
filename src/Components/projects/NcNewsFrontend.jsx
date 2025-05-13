import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

import NCnews from "../../assets/NC-News.png";

export default function NcNewsFrontend() {
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
            <img src={NCnews} alt="NC News Frontend project" />
            <section className="text">
              <p id="name">Nc News Frontend</p>
              <section className="line" />
              <section className="linksList">
                <p>Links:</p>
                <ul className="links">
                  <li>
                    <a href="https://nc-news-jpierce.netlify.app/">
                      <section className="link">
                        <LanguageIcon /> <p>Website</p>
                      </section>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/J-Pierce/NC-News-FE">
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
                    <p>HTML</p>
                  </li>
                  <li>
                    <p>CSS</p>
                  </li>
                  <li>
                    <p>React</p>
                  </li>
                  <li>
                    <p>Netlify</p>
                  </li>
                </ul>
              </section>
            </section>
          </section>
        </section>
        <section className="body">
          <p>
            This project is a web application built to provide a frontend for a
            server and database previously created. The website "NC News"
            contains articles, each with their own page where users can up or
            down vote as well as comment on. The articles can be sorted based on
            a number of queries to the API to search for specific information.
          </p>
          <p>
            This project was built using react as well as vanilla HTML and CSS.
            The Server and Database are hosted online but may take some time to
            spin up after inactivity
          </p>
        </section>
      </main>
    </section>
  );
}
