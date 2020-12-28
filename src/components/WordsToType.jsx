import { React, useState, useEffect } from 'react';
import InputTyping from './InputTyping';
import Loading from './Loading';
import './WordsToType.css';

export default function WordsToType() {
  const [words, setWords] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [lenght, setLenght] = useState(0)

  useEffect(() => {
    fetchWords();
  }, []);

  const fetchWords = async () => {
    setLoaded(false);
    const response = await fetch(
      'https://random-word-api.herokuapp.com/word?number=30'
    );
    const data = await response.json();
    setWords(data.join(' ').split(''));
    console.log(words)
    setLoaded(true);
    setLenght(0)
  };

  const verifyLetters = ({target}) => {
    if (words[lenght] === target.value[lenght]){
      document.querySelectorAll('.characters span')[lenght].classList.add('green')
    } else {
      document.querySelectorAll('.characters span')[lenght].classList.add('red')
    }
    setLenght(lenght + 1)
  }
  
  return (
    <div className="words">
      <div>
       <span className="characters">{!loaded ? <Loading /> : words.map(word => <span>{word}</span>)}</span>
      </div>
      <button onClick={() => fetchWords()}>Fetch</button>
      <div>
        <InputTyping words={words} verifier={verifyLetters}/>
      </div>
    </div>
  );
}
