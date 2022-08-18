import logo from './logo.svg';
import './App.css';
import Main from './components/Main.js';

const header = <h1>MATH PRACTICE</h1>;


function App() {
  return (
    <div className="App">
        {header}
        <Main/>

    </div>
  );
}

export default App;
