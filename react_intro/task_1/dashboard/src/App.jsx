import './App.css';
import logo from './assets/holberton-logo.jpg';
import { getCurrentYear, getFooterCopy } from './utils';
import Notifications from './Notifications';

function App() {
  return (
    <>
      <Notifications />
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Holberton logo" />
          <h1>School dashboard</h1>
        </header>

        <main className="App-body">
          <p>Login to access the full dashboard</p>
        </main>

        <footer className="App-footer">
          <p><i>Copyright {getCurrentYear()} - {getFooterCopy(false)}</i></p>
        </footer>
      </div>
    </>
  );
}

export default App;
