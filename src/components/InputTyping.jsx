import React, { useState } from 'react';
import './InputTyping.css';

export default function InputTyping(props) {
  const [typed, setTyped] = useState('');
  const { words, verifier } = props;

  function verifyLetters(target) {
    setTyped(target.value);
    verifier(target)
  }
  return (
    <textarea
      name=""
      id=""
      cols="100"
      rows="20"
      onChange={(target) => verifyLetters(target)}
      value={typed}
    ></textarea>
  );
}
