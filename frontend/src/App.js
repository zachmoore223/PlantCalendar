import logo from './logo.svg';
import './App.css';
import User from './components/User';
import Plant from './components/Plant';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <User />
      </header>
    </div>
  );
}

export default App;
