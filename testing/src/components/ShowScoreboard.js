import React, { useState } from "react";

const ShowScoreboard = (props) => {

    // const [values, setValues] = useState(props.data);
    console.log(props.data)

    return (
        <div className="center">
            <div>
                <h2>Balls</h2>
                <p>{props.data.balls}</p>
            </div>
            <div>
                <h2>Strikes</h2>
                <p>{props.data.strikes}</p>
            </div>
        </div>
    )
}

export default ShowScoreboard;