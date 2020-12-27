import { React, useState } from 'react';
import Loading from './Loading';
import './WordsToType.css'

export default function WordsToType() {
    const [ words, setWords ] = useState([])
    const [ loaded, setLoaded ] = useState(false)

    

    const fetchWords = async () => {
        setLoaded(false)
        const response = await fetch('https://random-word-api.herokuapp.com/word?number=30')
        const data = await response.json()
        setWords(data)
        setLoaded(true)
    }

    return (
        <div className='words'>
            <div>
                { !loaded ? <Loading /> : words.map(word => <span>{word} </span>) }
            </div>
            <button onClick={() => fetchWords()}>Fetch</button>
        </div>
    )
}