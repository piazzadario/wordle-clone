import { useEffect, useState } from 'react';
import "react-simple-keyboard/build/css/index.css";
import Board from './Board';
import Api from '../api/api';
import { Button, Col, Spinner } from 'react-bootstrap';
import OnScreenKeyboard from './OnScreenKeyboard';
import GameRecapDialog from './GameRecapDialog';

const maxGuesses = 6;
const initialGuesses = Array(maxGuesses).fill({word: '',submitted: false});
function Game({onGameOver, isGameOver, onNewGame}) {

  const [showRecapDialog,setShowRecapDialog] = useState(false);
  const [wordToGuess,setWordToGuess] = useState(null);
  const [guesses,setGuesses] = useState(initialGuesses);
  const [currentInput,setCurrentInput] = useState('');

  useEffect(()=>{
    fetchWordToGuess();
  },[]);

  function fetchWordToGuess(){
    Api.getRandomWord().then((w)=> {console.log(w); setWordToGuess(w);});
  }
  
  function handleOnScreenKeyboardPress(key){
    var safeKey = key;
    if(safeKey === '←'){
      safeKey = 'backspace';
    }
    handleKeyPressed(safeKey.toLowerCase());
  }

  function handlePhysicalKeyboardPress(event){
    handleKeyPressed(event.key.toLowerCase());
  }

  const handleKeyPressed= key=> {
    
    if(!isValidKey(key)){
        return;
    }

    if(key==='enter'){
      handleEnter();
      return;
    }

    if(key==='backspace'){
      handleDelete();
      return;
    }
    
    handleLetter(key);
  }



function isValidKey(key){
  return key==='enter' || key==='backspace' ||  (key >= 'a' && key <= 'z' && key.length===1);
}

function handleEnter(){
  if(currentInput.length < wordToGuess.length){
    return;
  }
  submitGuess();
}

function submitGuess(){
  const newGuesses = guesses.map((guess,index)=>{
    if(index === currentGuessIndex()){
      return {word: currentInput,submitted: true};
    }

    return guess;
  });
  
  if(newGuesses.every(g => g.submitted) || currentInput===wordToGuess){
    onGameOver(getNumberOfGuesses()+1);
    setShowRecapDialog(true);
  }
  setGuesses(newGuesses);
  setCurrentInput('');
}

function handleDelete(){
  if(currentInput.length===0){
    return;
  }
  setCurrentInput(currentInput.substring(0,currentInput.length-1));
}

function handleLetter(letter){
  if(currentInput.length===wordToGuess.length){
    return;
  }
  setCurrentInput(currentInput+letter);
}


function currentGuessIndex(){
  return guesses.findIndex(guess=>guess.word.length < wordToGuess.length);
}

function getNumberOfGuesses(){
  return guesses.filter(g => g.submitted).length;
}


function startNewGame(){
  if(showRecapDialog){
    hideRecapDialog();
  }
  resetGameState();
  fetchWordToGuess();
}

function resetGameState(){
  setWordToGuess(null);
  setCurrentInput('');
  setGuesses(initialGuesses);
  onNewGame();
}

function hideRecapDialog(){
  setShowRecapDialog(false);
}
 

  return (
    <Col className="Game" tabIndex={0} onKeyDown={handlePhysicalKeyboardPress}>
      {wordToGuess === null? <Spinner></Spinner> : <Board wordToGuess={wordToGuess} guesses={guesses} currentInput={currentInput}></Board>}
      <GameRecapDialog show={showRecapDialog} onHide={hideRecapDialog} lastGameResult={getNumberOfGuesses()+1} onPlayAgain={startNewGame}></GameRecapDialog>
      <OnScreenKeyboard onKeyPressed={handleOnScreenKeyboardPress}/>
      {isGameOver? <p><Button onClick={startNewGame}>Play again</Button></p>:null}
      {isGameOver? <p>The word to guess was: <b>{wordToGuess}</b></p>:null}
    </Col>
  );
}

export default Game;
