import profile from "../assets/Me.png";

export default function About() {
  return (
    <section className="about">
      <h2>About</h2>
      <section className="row">
        <img src={profile} alt="placeholder image" id="profileImage" />
        <section className="profileText">
          <section className="name">
            <p id="name">James Pierce</p>
            <p id="pronouns">He/Him</p>
          </section>
          <p id="location">Essex, United Kingdom</p>
          <p id="statement">
            Academic applications of modelling and coding experienced during my
            degree, and PhD, is what sparked my interest in software
            development. Being someone who loves challenges and problem solving,
            I am greatly interested in pursuing a career that allows me to use
            these skills on a day-to-day basis. With my time at Northcoders I
            have gained valuable experience in both front end and back end
            development and am keen to develop these skills further. I am a
            motivated and dependable individual and, alongside my time in both
            industry and academia in which I developed strong communication and
            team working skills, I believe I would be an asset to any team.
          </p>
        </section>
      </section>
    </section>
  );
}
