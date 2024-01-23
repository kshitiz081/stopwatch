import React from 'react'

function Buttons({ active, pause, handleStart, handlePausePlay, handleReset}) {
    const inActiveButton = <button onClick={handleStart}>Start</button>
    const activeButton = <div>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handlePausePlay}>{pause ?"Play" : "Pause" }</button>
    </div>   
    return (
        <div>
            {active ? activeButton : inActiveButton}
        </div>
    )   
}

export default Buttons