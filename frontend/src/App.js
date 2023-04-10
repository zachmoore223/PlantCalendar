import './App.css';
import User from './components/User';
import Plant from './components/Plant';
import CreateUser from './components/CreateUser';
import AboutUs from './components/AboutUs';
import Citations from './components/Citations';
import hydrohomieLogo from './hydrohomieLogo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={hydrohomieLogo} width="750px"/>
            <br />
        <AboutUs /> <Citations />
      </header>
        <User />
    </div>
  );
}

export default App;
