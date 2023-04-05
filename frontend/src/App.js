import './App.css';
import User from './components/User';
import Plant from './components/Plant';
import CreateUser from './components/CreateUser';
import hydrohomieLogo from './hydrohomieLogo.png';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={hydrohomieLogo} width="750px"/>
        <User />
      </header>
    </div>
  );
}

export default App;
