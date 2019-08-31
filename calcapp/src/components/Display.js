import React from 'react';

function Display (props) {
    console.log(props.value)
    return( 
        <output className = {props.className}>{props.value}</output> 
     )
}

export default Display