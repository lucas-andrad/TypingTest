import React, { useState } from 'react';
import './InputTyping.css';

export default function InputTyping() {
  const [typed, setTyped] = useState('');
  function verifyLetters(target) {
    setTyped(target.value);
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
