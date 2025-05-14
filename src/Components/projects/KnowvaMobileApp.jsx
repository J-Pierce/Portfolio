import LanguageIcon from "@mui/icons-material/Language";
import GitHubIcon from "@mui/icons-material/GitHub";
import windowDimensions from "../WindowDimensions";
import KnowvaLogo from "../../assets/Knowva_Logo.png";

export default function KnowvaMobileApp() {
  const { width } = windowDimensions();
  return (
    <section className="project">
      <section className="banner">
        <section className="grid">
          <img src={KnowvaLogo} alt="Knowva Mobile App project" />
          <section className="text">
            <p id="name">Knowva Mobile App</p>
            <section className="line" />
            <section className="linksList">
              <p>Links:</p>
              <ul className="links">
                <li>
                  <a href="https://github.com/NC-Knowva/FE">
                    <section className="link">
                      <LanguageIcon /> <p>Frontend</p>
                    </section>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/NC-Knowva/BE">
                    <section className="link">
                      <LanguageIcon /> <p>Backend</p>
                    </section>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/NC-Knowva">
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
                  <p>ReactNative</p>
                </li>
                <li>
                  <p>Expo</p>
                </li>
                <li>
                  <p>socket-io</p>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
      <section className="body">
        <section>
          <p>
            A gamified study app that helps learners master difficult topics
            through engaging quizzes, offering personalised study support, and
            enabling community discussions to share insights and find answers
            together.
          </p>
          <p>
            This project was built using ReactNative, expo, and socket-io for
            the frontend, along with Node.js, Express, and PostgreSQL for the
            backend.
          </p>
          <p>A demo video of the app can be watched below:</p>
        </section>
        <iframe
          width={width < 600 ? width - 50 : 600}
          height="600"
          src="https://www.youtube.com/embed/m6gyRqZrUw0"
        ></iframe>
      </section>
    </section>
  );
}
