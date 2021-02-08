import React from 'react';

const LineNumbers = props => {
    let result = [];
    for(let i=0; i<props.max; i++) {
        result.push(<p className="lineNumber" key={i}>{i+1}</p>)
    }
    return result;
}

export default LineNumbers;