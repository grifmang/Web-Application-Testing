import React, { useState } from "react";

const ShowScoreboard = () => {

    const [values, setValues] = useState({
        balls: 0,
        strikes: 0
    })

    const handleBall = () => {
        if (values.balls === 3) {
            setValues({balls: 0, strikes: 0});
        }
        else {
            setValues({balls: values.balls + 1});
        }
    }

    const handleStrike = () => {
        if (values.strikes === 2) {
            setValues({balls: 0, strikes: 0});
        }
        else {
            setValues({strikes: values.strikes + 1});
        }
    }
    
    const handleFoul = () => {
        if (values.strikes < 2) {
            setValues({strikes: values.strikes + 1});
        }
    }

    const handleHit = key => {
        setValues({balls: 0, strikes: 0});
    }

    return (
        <div>
            <div>
                <p>{values.balls}</p>
                <button id='strike' onClick={handleStrike}>Strike</button>
            </div>
            <div>
                <p>{values.strikes}</p>
                <button id='ball' onClick={handleBall}>Ball</button>
            </div>
            <div>
                <button id='foul' onClick={handleFoul}>Foul</button>
            </div>
            <div>
                <button id='hit' onClick={handleHit}>Hit</button>
            </div>
            
        </div>
    )
}

export default ShowScoreboard;