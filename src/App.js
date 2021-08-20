import './App.css';
import Email from './Email';
import emails from './emails';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className="App-component">
          <Email excel={emails} />
      </div>
    </div>
  );
}

export default App;
