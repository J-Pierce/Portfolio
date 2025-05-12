import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Project() {
  const { project } = useParams();
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
        <p>{project}</p>
        <p>Project Page</p>
      </main>
    </section>
  );
}
