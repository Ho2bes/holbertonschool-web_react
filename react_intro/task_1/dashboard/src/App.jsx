import './App.css';
import logo from './assets/holberton-logo.jpg';
import { getCurrentYear, getFooterCopy } from './utils';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="Holberton logo" />
        <h1>School dashboard</h1>
      </header>

      <main className="App-body">
        <p>Login to access the full dashboard</p>
      </main>

      <footer className="App-footer">
        <p><i>Copyright {getCurrentYear()} - {getFooterCopy(true)}</i></p>
      </footer>
    </div>
  );
}

export default App;
