import React from 'react';

const Timer = ({timer}) =>{


    return (
        <div>
            <h3>Time : {timer/1000} s</h3>
            <h5>my best time : {localStorage.getItem("bestScore") || 0} !</h5>
        </div>
    )
}

export default Timer