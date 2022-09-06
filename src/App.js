import "./App.css";
import Navigation from "./screens/navigationBar/NavigationBar";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from './Particles';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Particles/>

    </div>
  )
};

export default App;