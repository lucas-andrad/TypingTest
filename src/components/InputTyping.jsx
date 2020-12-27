import React, { useState } from 'react'

export default function InputTyping() {
    const [typed, setTyped] = useState('')
    function verifyLetters(target) {
        setTyped(target.value)
    }
    return (
        <textarea name="" id="" cols="30" rows="10" onChange={(target) => verifyLetters(target)} value={typed}></textarea>
    )
}