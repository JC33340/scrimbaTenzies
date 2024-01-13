import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dice from './components/Dice.jsx'
import {nanoid} from 'nanoid'
import Confetti from "react-confetti"

function App() {
  const [numArr, setDiceNum] = React.useState(allNewDice())
  const [tenzies, setTenzies] = React.useState(false)

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
    if (!tenzies){
      setDiceNum(prevState=>{
        return prevState.map((die)=>{
          return die.isHeld ? die:{...die,value:Math.floor(Math.random()*6)+1}
        })
      })
    } else {
      setTenzies(false)
      setDiceNum(allNewDice())
    }
    //if the tenzies state is true then the button should reset the game
    //otherwise we should just roll like normal
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

  //checking if the game is won
  React.useEffect(()=>{
    // getting the value in the first JS object
    const heldNumber = numArr[0].value
    //using .every checking every object in the array to see if the isHeld property is true and that they all have the same number
    //returns a boolean value
    const sameValues = numArr.every(die=>(die.value === heldNumber && die.isHeld === true))
    //if it is true then performing the winning tasks
    if (sameValues === true){
      setTenzies(true);
      console.log("user won!")
    }
  },[numArr])

  return (
    <main>
        {tenzies && <Confetti />}
        <h1 className = "title">Tenzies</h1>
        <p className = "title--p">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <div className = "diceContainer">
            {diceElements}
        </div>
        <button className = "reset--button" onClick={rollDice}>{tenzies ? "New Game":"Roll"}</button>

    </main>
  )
}

export default App
