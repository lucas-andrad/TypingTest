import './App.css';
import InputTyping from './components/InputTyping';
import Timer from './components/Timer';
import WordsToType from './components/WordsToType';

function App() {
  return (
    <div className="App">
      <WordsToType />
      <Timer />
    </div>
  );
}

export default App;
