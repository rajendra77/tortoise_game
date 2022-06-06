import React, { useRef, useState, useLayoutEffect } from 'react';
import Header from './components/Header';
import AlphabetContainer from './components/AlphabetContainer';
import Timer from './components/Timer';
import Inputbox from './components/Inputbox';
import { getRandomAlphabet } from './util';
import './App.css';

let myTimer

function App() {

  const [alphabet, setAphabet] = useState(getRandomAlphabet())
  const [inputText, setInputText] = useState('')
  const [timer, setTimer] = useState(0)
  const [firstKeyStroke, setFirstKeyStroke] = useState(false)
  const [correctAplhabetCount, setCorrectAlphabetCount] = useState(0)
  const [color , setColor]= useState('green')
  const inputRef = useRef()

  useLayoutEffect(() => {
    inputRef.current.focus();
  });

  const handleInputChange = (e) => {
    setFirstKeyStroke(true)
    if(firstKeyStroke === false){
      startTimer()
    }
    let str = e.target.value
    let inputChar = str.charAt(str.length - 1).toUpperCase()
    if(correctAplhabetCount ===20 ){
      setCorrectAlphabetCount(0)
      const bestScore = localStorage.getItem("bestScore") || 0
      if(timer < bestScore*1000){
        setAphabet("SUCCESS!")
        setColor('green')
      }else{
        setAphabet("FAILURE!")
        setColor('red')
      }
      localStorage.setItem("bestScore", timer/1000)
      setTimer(timer)
      clearInterval(myTimer)
    }else{
      let myTimerInner
      if(alphabet === inputChar){
        setAphabet(getRandomAlphabet())
        setCorrectAlphabetCount(correctAplhabetCount+1)
      }else{
         myTimerInner = setInterval(()=>{
          setTimer(timer =>timer + 500)
          clearInterval(myTimerInner)
        }, 10);
      }
      setInputText(str.toUpperCase())
    }
  }

  const startTimer = () =>{
    myTimer = setInterval(()=>{
      setTimer(timer =>timer + 10)
    }, 10);
  }

  const resetTimer = () =>{
    
    setAphabet(getRandomAlphabet())
    setInputText('')
    setFirstKeyStroke(false)
    setTimer(0)
    clearInterval(myTimer)
    setColor('green')
    inputRef.currect.focus()
  }
  return (
    <div className="App">
          <Header />
          <AlphabetContainer
             alphabet={alphabet}
             color ={ color }
           />
          <Timer timer = {timer}/>
          <Inputbox 
             handleChange ={handleInputChange} 
             inputText={inputText}
             reset = {resetTimer}
             inputRef={inputRef}
             />
      </div>
  );
}

export default App;
