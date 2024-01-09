import React from 'react'

export default function Dice(props){
    return(
        <div className = 'dice--component'>
            <span>{props.value}</span>
        </div>
    )
}