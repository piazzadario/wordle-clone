import { useEffect, useState } from 'react';
import "react-simple-keyboard/build/css/index.css";
import Board from './components/Board';
import Api from './api/api';
import { Spinner } from 'react-bootstrap';
import OnScreenKeyboard from './components/OnScreenKeyboard';

const maxGuesses = 6;

function Game() {
  const [wordToGuess,setWordToGuess] = useState(null);
  const [guesses,setGuesses] = useState(Array(maxGuesses).fill(''));
    const [currentInput,setCurrentInput] = useState('');

  useEffect(()=>{
    Api.getRandomWord().then((w)=> {console.log(w); setWordToGuess(w);});
  },[]);

  


  const handleKeyPressed= event=> {
    let key=event.key.toLowerCase();
    if(!isValidKey(key)){
        return;
    }

    if(key==='enter'){
      handleEnter();
      return;
    }

    if(key==='delete'){
      handleDelete();
      return;
    }
    
    handleLetter(key);
  }



function isValidKey(key){
  return key==='enter' || key==='enter' ||  (key >= 'a' && key <= 'z');
}

function handleEnter(){
  if(currentInput.length < wordToGuess.length){
    return;
  }
  submitGuess();
}

function submitGuess(){
  setGuesses(guesses.map((guess,index)=>{
    if(index === currentGuessIndex()){
      return currentInput;
    }

    return guess;
  }));
  setCurrentInput('');
}

function handleDelete(){
  if(currentInput.length===0){
    return;
  }
  setCurrentInput(currentInput.substring(0,currentInput.length-1));
}

function handleLetter(letter){
  const newInput = currentInput+letter; // TODO: delete
  console.log(newInput);
  if(currentInput.length===wordToGuess.length){
    return;
  }
  setCurrentInput(newInput);
}


function currentGuessIndex(){
  return guesses.findIndex(guess=>guess.length < wordToGuess.length);
}

  return (
    <div className="Game" tabIndex={0} onKeyDown={handleKeyPressed}>
      {wordToGuess === null? <Spinner></Spinner> : <Board wordToGuess={wordToGuess} guesses={guesses} currentInput={currentInput}></Board>}
      <OnScreenKeyboard />
    </div>
  );
}

export default Game;
