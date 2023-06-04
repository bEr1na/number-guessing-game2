import {useState } from 'react';
import './style.css'
import PreviousGuesses from './PreviousGuesses';
import RemainingAttempts from './RemainingAttempts';
import TooHigh from './TooHigh';
import TooLow from './TooLow';
import AlreadyTyped from './AlreadyTyped';
import GameEnd from './GameEnd';
import GameWin from './GameWin';

function App() {

  const [previousGuesses, setPreviuosGuesses] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(10);
  const [input, setInput] = useState('');
  const [randomNumber, setRandomNumber] =useState(Math.floor(Math.random() * 100) + 1)
  const [tooLow, setTooLow] = useState(null)
  const [alreadyTyped, setAlreadyTyped] = useState(false)
  const [gameEnd, setGameEnd] = useState(false)
  const [gameWin, setGameWin] = useState(false)
  

 const handleInput = (event) => {
  setInput(Math.max(1, Math.min(100, Number(event.target.value))))
  }

  const startNewGame =()=>{
    setPreviuosGuesses([]);
    setRemainingAttempts(10)
    setInput('')
    setRandomNumber(Math.floor(Math.random() * 100) + 1)
    setTooLow(null)
    setAlreadyTyped(false)
    setGameEnd(false)
    setGameWin(false)
  }

  const handleClear=(e)=>{
    e.preventDefault();
    setInput('')
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    
    let sameNumber = false;
    for(let i=0;i<previousGuesses.length; i++){
      if(input === previousGuesses[i]) sameNumber = true
    }
    if(sameNumber === false){
      previousGuesses.push(input);
      setAlreadyTyped(false);
      setRemainingAttempts(remainingAttempts-1)
    }

    if(sameNumber === true){
      setAlreadyTyped(true)
    }
    sameNumber = false;
  
    if(randomNumber < input) setTooLow(false)
    if(randomNumber > input) setTooLow(true)

    if(remainingAttempts === 1) setGameEnd(true)
    if(parseFloat(input) === randomNumber) setGameWin(true)

    setInput('')
  }
  return (
    <div className="app">
      <div className='heading'>
      <h1>Number Guessing Game</h1>
      <p className='msg'>Guess the number between 1 and 100!</p>
      </div>
      <div className="container"> 
      <p className='enter-a-number'>ENTER A NUMBER:</p>
      <div className='input-box'>
        <input type='number'
         id='input' 
         name='input'
         value={input}
         onChange={handleInput}/>
      </div>
      <div className="buttons">
        <button onClick={handleSubmit} disabled={!input || gameWin || gameEnd}>Submit</button>
        <button onClick={handleClear} disabled={gameWin || gameEnd}>Clear</button>
        <button onClick={startNewGame} disabled={gameWin || gameEnd}>Reset</button>
      </div>
      <hr />
      <RemainingAttempts remainingAttempts={remainingAttempts}/>
      <PreviousGuesses previousGuesses={previousGuesses}/>
      {alreadyTyped === false && gameEnd === false && gameWin === false && tooLow === false &&<TooHigh/>}
      {alreadyTyped === false && gameEnd === false && gameWin === false && tooLow === true && <TooLow/>}
      {alreadyTyped === true && gameEnd === false && gameWin === false&& <AlreadyTyped/>}
      {gameWin === true && <GameWin startNewGame={startNewGame}/>}
      {gameEnd === true && gameWin === false && <GameEnd startNewGame={startNewGame}/>}
      </div>
    </div>
  );
}

export default App;
