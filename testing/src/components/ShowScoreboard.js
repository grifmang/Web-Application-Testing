import React, { useState } from "react";

const ShowScoreboard = (props) => {

    return (
        <div className="center">
            <div className='spaced'>
                <h2>Balls</h2>
                <p>{props.data.balls}</p>
            </div>
            <div className='spaced'>
                <h2>Strikes</h2>
                <p>{props.data.strikes}</p>
            </div>
        </div>
    )
}

export default ShowScoreboard;