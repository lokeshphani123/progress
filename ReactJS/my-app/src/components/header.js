import '../index.css';
import logo from '../logo.svg';


export default function Header() {
    return ( <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </header>
  </div>
);
}