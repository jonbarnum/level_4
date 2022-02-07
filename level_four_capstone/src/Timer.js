import React, {useState, useEffect} from "react";

const defaultTime = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
    blastOff: false
}

const Timer = () => {
    const [remainingTime, setRemainingTime] = useState(defaultTime)

    useEffect(() => {
        const timerInterval =setInterval(() => {
        updateRemainingTime()
        }, 1000)
        return(
            clearInterval(timerInterval)
        )
    }, [])

    function updateRemainingTime(){

    }

    return(
        <div>
            <span>{remainingTime.days}</span>
            <span>Days</span>
            <span>{remainingTime.hours}</span>
            <span>Hours</span>
            <span>{remainingTime.minutes}</span>
            <span>Minutes</span>
            <span>{remainingTime.seconds}</span>
            <span>Seconds</span>
        </div>
    )
}

export default Timer