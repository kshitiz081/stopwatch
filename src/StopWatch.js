import React, { useEffect, useState } from 'react'
import Time from './Time';
import Buttons from './Buttons';
function StopWatch() {
    const [active, setActive] = useState(false);
    const [pause, setPause] = useState(true);
    const [time, setTime] = useState(0);

    function handleStart() {
        setActive(true);
        setPause(false);
    }

    function handlePausePlay() {
        setPause(!pause);
    }

    function handleReset() {
        setTime(0);
        setActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (active && !pause) {
            interval = setInterval(() => {
                setTime((time) => time + 10);
            }, 10);
        }
        else{
            clearInterval(interval);
        }
        return ()=>{
            clearInterval(interval);
        }
    }, [active, pause]);

    return (
        <div>
            <Time time={time}/>
            <Buttons active={active} pause={pause} handleStart={handleStart} handlePausePlay={handlePausePlay} handleReset={handleReset}/>
        </div>
    )
}

export default StopWatch