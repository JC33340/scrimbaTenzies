import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dice from './components/Dice.jsx'

function App() {

  return (
    <main>
        <div className = "diceContainer">
            <Dice value = {1}/>
            <Dice value = {1}/>
            <Dice value = {1}/>
            <Dice value = {1}/>
            <Dice value = {1}/>
            <Dice value = {1}/>
            <Dice value = {1}/>
            <Dice value = {1}/>
            <Dice value = {1}/>
            <Dice value = {1}/>
        </div>
    </main>
  )
}

export default App
