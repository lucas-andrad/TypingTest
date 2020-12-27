import React, { useEffect, useState } from 'react'

export default function Timer() {
    const [hour, setHour] = useState(100)
    const [timesUp, settimesUp] = useState(false)
    useEffect(() => {
    setTimeout(() => {
        hour === 0 ? settimesUp(true) : setHour(hour - 1)
    }, 1000);
    }, [hour, setHour])
    return (
        <div>
            {timesUp ? <h1>Time's Up!</h1> : <h1>{hour}</h1>}
        </div>
    )
}