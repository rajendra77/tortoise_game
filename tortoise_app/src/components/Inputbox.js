import React from 'react';

const Inputbox = ({handleChange, inputText, reset, inputRef}) =>{

    return (
        <div className="inputbox">
            <input value={inputText} onChange = {handleChange} ref= {inputRef}/>
            <button onClick ={reset}>Reset</button>
        </div>
    )
}

export default Inputbox