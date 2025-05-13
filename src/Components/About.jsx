import profile from "../assets/profile.png";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function About() {
  return (
    <section className="about">
      <section className="sizing">
        <section className="grid">
          <div className="imageBox">
            <img src={profile} alt="placeholder image" id="profileImage" />
          </div>

          <div className="text">
            <p id="name">James Pierce</p>
            <p id="role">Junior Software Developer</p>
            <section id="statement">
              <p>
                Academic applications of modelling and coding experienced during
                my degree is what sparked my interest in software development.
                Being someone who loves challenges and problem solving, I am
                greatly interested in pursuing a career that allows me to use
                these skills on a day-to-day basis.
              </p>
              <p>
                With my time at Northcoders I have gained valuable experience in
                both front end and back end development and am keen to develop
                these skills further. I am a motivated and dependable individual
                and, alongside my time in both industry and academia in which I
                developed strong communication and team working skills, I
                believe I would be an asset to any team.
              </p>
            </section>
            <section className="connect">
              <p id="title">Connect with me:</p>
              <ul className="links">
                <li>
                  <a href="mailto:contact@jamespierce.co.uk">
                    <section className="link">
                      <MailOutlineIcon /> <p>Email</p>
                    </section>
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/james-t-pierce/">
                    <section className="link">
                      <LinkedInIcon className="icon" />
                      <p>LinkedIn</p>
                    </section>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/J-Pierce/">
                    <section className="link">
                      <GitHubIcon />
                      <p>Github</p>
                    </section>
                  </a>
                </li>
              </ul>
            </section>
          </div>
        </section>
      </section>
    </section>
  );
}
