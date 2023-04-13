import './App.css';
import User from './components/User';
import Plant from './components/Plant';
import AboutHydroHomie from './components/AboutHydroHomie';
import AboutUs from './components/AboutUs';
import Citations from './components/Citations';
import hydrohomieLogo from './hydrohomieLogo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
              <img src={hydrohomieLogo} className="logoImage" width="750px"/>
                  <br />
              <AboutHydroHomie /> <AboutUs /> <Citations />
        <User />
    </div>
  );
}

export default App;
