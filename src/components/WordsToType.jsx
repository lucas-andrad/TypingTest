import { React, useState, useEffect } from 'react';
import InputTyping from './InputTyping';
import Loading from './Loading';
import './WordsToType.css';

export default function WordsToType() {
  const [words, setWords] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = async () => {
    setLoaded(false);
    const response = await fetch(
      'https://random-word-api.herokuapp.com/word?number=30'
    );
    const data = await response.json();
    setWords(data.join(' '));
    setLoaded(true);
  };

  return (
    <div className="words">
      <div>
       <span>{!loaded ? <Loading /> : words}</span>
      </div>
      <button onClick={() => fetchWords()}>Fetch</button>
    </div>
  );
}
