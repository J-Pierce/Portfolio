import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

import NCnews from "../../assets/NC-News.png";

export default function KnowvaMobileApp() {
  return (
    <section className="project">
      <section className="banner">
        <section className="grid">
          <img src={NCnews} alt="Knowva Mobile App project" />
          <section className="text">
            <p id="name">Knowva Mobile App</p>
            <section className="line" />
            <section className="linksList">
              <p>Links:</p>
              <ul className="links">
                <li>
                  <a href="https://knowvaapi.onrender.com/api">
                    <section className="link">
                      <LanguageIcon /> <p>Backend</p>
                    </section>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/orgs/NC-Knowva/repositories">
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
        <p>to DO</p>
      </section>
    </section>
  );
}
