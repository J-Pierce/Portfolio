import { Link, Element } from "react-scroll";

export default function Education() {
  return (
    <Element name="education">
      <section className="education">
        <h2>Education</h2>

        <section className="qualification">
          <h3 id="title">
            MSci Natural Science - Chemistry, Physics, and Mathematics
          </h3>
          <p id="date">2018 - 2022</p>
          <p id="location">University of Nottingham</p>
          <p id="Classification">First Class Honours</p>
        </section>
        <section className="qualification">
          <h3 id="title">A-Levels</h3>
          <p id="date">2016 - 2018</p>
          <p id="location">The King John Sixth Form</p>
          <p id="Classification">
            Chemistry (A), Physics (A), Mathematic (A*), Further Mathematics (A)
          </p>
        </section>
        <section className="qualification">
          <h3 id="title">GCSE's</h3>
          <p id="date">2013 - 2016</p>
          <p id="location">The King John School</p>
          <p id="Classification">11 GCSE grade A* - C</p>
        </section>
      </section>
    </Element>
  );
}
