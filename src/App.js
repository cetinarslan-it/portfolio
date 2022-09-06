import "./App.css";
import Navigation from "./screens/navigationBar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from './Particles';
import Header from './screens/header/Header';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header/>
      <Particles/>
    </div>
  )
};

export default App;