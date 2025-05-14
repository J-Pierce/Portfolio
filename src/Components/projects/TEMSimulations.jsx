import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import report from "../../assets/reportScreenshot.png";
import MOF from "../../assets/MOF's.png";

export default function TEMSimulations() {
  return (
    <section className="project">
      <section className="banner">
        <section className="grid">
          <img src={report} alt="NC News Frontend project" />
          <section className="text">
            <p id="toBig">Transmission Electron Microscopy Simulations</p>
            <section className="line" />
            <section className="linksList">
              <p>Links:</p>
              <ul className="links">
                <li>
                  <a
                    href="https://uniofnottm-my.sharepoint.com/:b:/g/personal/pcyjp4_nottingham_ac_uk/EWlgzXWxDX5JkEVuK7sTILkBI4y0ybXZ_sI4OWUdHs_gwg?e=6yEkpN"
                    target="blank"
                    type="application/pdf"
                  >
                    <section className="link">
                      <PictureAsPdfIcon /> <p>Literature Review</p>
                    </section>
                  </a>
                </li>
                <li>
                  <a
                    href="https://uniofnottm-my.sharepoint.com/:b:/g/personal/pcyjp4_nottingham_ac_uk/ESrHlU-UoHVCt-zLzyaanuIBCnXDdcO3xP8Ik_KJ5zuMng?e=7MwstN"
                    target="blank"
                    type="application/pdf"
                  >
                    <section className="link">
                      <PictureAsPdfIcon />
                      <p>Report</p>
                    </section>
                  </a>
                </li>
              </ul>
            </section>
            <section className="technicalSkills">
              <p id="title">Technical Skills:</p>
              <ul>
                <li>
                  <p>Bash</p>
                </li>
                <li>
                  <p>Orca</p>
                </li>
                <li>
                  <p>Simulations</p>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
      <section className="body">
        <p>
          Metal Organic Frameworks possess many desirable properties. This has
          been a driving factor that has lead to their application in a diverse
          range of fields. However, their stability need to be improved if they
          are to be synthesisable on an industrial scale. This can be achieved
          though an improved understanding of their structure, provided by
          transmission electron microscopy. Computational modelling offers many
          insights into the processes that take place during imaging, and can
          help us better understand how to decrease beam damage and improve
          image interpretation.
        </p>
        <img src={MOF} alt="MOF's simulated" />
        <p>
          Ab initio molecular dynamics simulations were employed to study the
          stability of two copper based metal organic frameworks during
          transmission electron microscopy. Irradiation induced elastic
          scattering events were simulated to study knock-on damage causing
          atomic ejection. It was shown that atom types present played a key
          role in determining the resilience of metal organic frameworks to
          knock-on effects, due to their influence on direct electronic energy
          transfer. However, it is unlikely that this is the only effect of
          importance, and it is theorised that other factors such as electronic
          conductivity are likely to play a role in resilience.
        </p>
      </section>
    </section>
  );
}
