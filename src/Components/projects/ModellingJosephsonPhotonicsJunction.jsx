import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";

import NCnews from "../../assets/NC-News.png";

export default function ModellingJosephsonPhotonicsJunction() {
  return (
    <section className="project">
      <section className="banner">
        <section className="grid">
          <img
            src={NCnews}
            alt="Modelling Josephson Photonics Junction project"
          />
          <section className="text">
            <p id="toBig">Modelling Josephson Photonics Junction</p>
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
                      <p>GitHub</p>
                    </section>
                  </a>
                </li>
              </ul>
            </section>
            <section className="technicalSkills">
              <p id="title">Technical Skills:</p>
              <ul>
                <li>
                  <p>MATLAB</p>
                </li>
                <li>
                  <p>Modelling</p>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
      <section className="body">
        <p>toDO</p>
      </section>
    </section>
  );
}
