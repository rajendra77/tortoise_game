import React from 'react';

const AlphabetContainer = ({alphabet, color}) =>{

    return (
        <div className="alphabetContainer" style={{color : color}}>
            <h1>{alphabet}</h1>
        </div>
    )
}

export default AlphabetContainer