import "./App.css";
import Navigation from "./screens/navigationBar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "./Particles";
import Header from "./screens/header/Header";
import AboutMe from "./screens/aboutMe/AboutMe";
import Resume from "./screens/resume/Resume";
import Skills from "./screens/skills/Skills";
import ContactMe from "./screens/contactMe/ContactMe";
import Portfolio from "./screens/portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Particles />
      <div className="backgroundImg">
        <AboutMe />
        <Resume/>
        <Skills/>
        <Portfolio />
      </div>
      <ContactMe />
    </div>
  );
}

export default App;
