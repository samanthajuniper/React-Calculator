import React from 'react';

function CalcButtons(props) {
    return(
        <button 
        onClick={props.event} 
        className = {props.className} 
        id = {props.id} 
        data-value={props.value} 
        data-type={props.type}
        >{props.value}</button>        
    )   
}

export default CalcButtons