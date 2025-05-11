import "../Css/App.css";
import About from "./About";
import Contact from "./Contact";
import Education from "./Education";
import Footer from "./Footer";
import Header from "./Header";
import Projects from "./Projects";
import Skills from "./Skills";
import Work from "./Work";

function App() {
  return (
    <>
      <Header />
      <main>
        <About />
        <Projects />
        <Education />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
