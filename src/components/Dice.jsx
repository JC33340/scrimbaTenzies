import React from 'react'

export default function Dice(props){
    return(
        <div className = 'dice--component'>
            <b>{props.value}</b>
        </div>
    )
}