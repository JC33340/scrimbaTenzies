import React from 'react'

export default function Dice({value, isHeld,holdDice,id}){
    const styles = {
        backgroundColor: isHeld ? "#59E391":"white"
    }
    return(
        <div className = 'dice--component' style = {styles} onClick={()=>{holdDice(id)}}>
            <b>{value}</b>
        </div>
    )
}