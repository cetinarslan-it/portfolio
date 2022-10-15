import "./App.css";
import Navigation from "./pages/navigationBar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "./Particles";
import Header from "./pages/header/Header";
import AboutMe from "./pages/aboutMe/AboutMe";
import Resume from "./pages/resume/Resume";
import Skills from "./pages/skills/Skills";
import Contact from "./pages/contact/Contact";
import Footer from "./pages/footer/Footer";
import Portfolio from "./pages/portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Particles />
      <div className="backgroundImg">
        <AboutMe />
        <Resume />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}

export default App;
