import "../Css/App.css";
import Header from "./Header";
import About from "./About";
import Projects from "./Projects";
import Education from "./Education";
import Experience from "./Experience";
import Extra from "./Extra";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Education />
        <Experience />
        <Extra />
      </main>
      <Footer />
    </>
  );
}

export default App;
