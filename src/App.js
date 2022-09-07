import "./App.css";
import Navigation from "./screens/navigationBar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "./Particles";
import Header from "./screens/header/Header";
import AboutMe from "./screens/aboutMe/AboutMe";
import Technologies from "./screens/technologies/Technologies";
import ContactMe from "./screens/contactMe/ContactMe";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Particles />
      <AboutMe
        style={{ backgroundImage: `url('../../images/background.jpg')` }}
      />
      <Technologies />
      <ContactMe />
    </div>
  );
}

export default App;
