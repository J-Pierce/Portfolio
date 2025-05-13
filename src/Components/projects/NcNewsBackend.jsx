import { Link } from "react-router-dom";
import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

import Backend from "../../assets/Backend.png";

export default function NcNewsBackend() {
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
            <img src={Backend} alt="NC News Backend project" />
            <section className="text">
              <p id="name">NC News Backend</p>
              <section className="line" />
              <section className="linksList">
                <p>Links:</p>
                <ul className="links">
                  <li>
                    <a href="https://nc-news-b93u.onrender.com/api">
                      <section className="link">
                        <LanguageIcon /> <p>Website</p>
                      </section>
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/J-Pierce/NC-News-BE">
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
                    <p>Jest</p>
                  </li>
                  <li>
                    <p>Supertest</p>
                  </li>
                  <li>
                    <p>SQL</p>
                  </li>
                  <li>
                    <p>PSQL</p>
                  </li>
                  <li>
                    <p>Seeding</p>
                  </li>
                  <li>
                    <p>Migrations</p>
                  </li>
                  <li>
                    <p>Render</p>
                  </li>
                </ul>
              </section>
            </section>
          </section>
        </section>
        <section className="body">
          <p>
            This project is a server and database for "Northcoders News". The
            server is build with MVC architecture and handles multiple
            endpoints, paramaterised inputs, and a range of queries. A user can
            send requests to the server, which will then query the database and
            responded with the relavant information for the request.
          </p>
          <p>
            It has been built following test driven development and as such
            comes with a suite of tests to verify functionality and error
            handling. A list of valid requests and expected response formats can
            be found in the endpoints.json file.
          </p>
        </section>
      </main>
    </section>
  );
}
