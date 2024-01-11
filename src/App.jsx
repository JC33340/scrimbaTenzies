import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dice from './components/Dice.jsx'
import {nanoid} from 'nanoid'

function App() {
  const [numArr, setDiceNum] = React.useState(allNewDice())

  //completely changes the dice array generating 10 new numbers
  function allNewDice(){
    const randomNumArr = []
    for (let i=0;i<10;i++){
      randomNumArr.push(
        {
          value: Math.floor(Math.random()*6)+1, 
          isHeld:false,
          id: nanoid()
        }
      );
    }
    return randomNumArr
  }

  //rolling the dice on the button click
  function rollDice(){
    setDiceNum(allNewDice())
  }

  //holding the dice
  function holdDice(id){
    //mapping over the previous state array
    setDiceNum(prevState=>{
      return prevState.map((die)=>{
        // finding the dice with the id which matches the one clicked
        // when found return array but with isHeld property reversed
        //else return normal die object
        return (die.id === id) ? {...die,isHeld:!die.isHeld}:die
      })
    })
  }

  const diceElements = numArr.map((num)=>{
    return (<Dice key= {num.id} id ={num.id} value = {num.value} isHeld={num.isHeld} holdDice = {holdDice}/>)
  })


  return (
    <main>
        <div className = "diceContainer">
            {diceElements}
        </div>
        <button className = "reset--button" onClick={rollDice}>Roll</button>

    </main>
  )
}

export default App
