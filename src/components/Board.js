import { useState } from "react";
import {Container} from "react-bootstrap";
import GuessRow from "./GuessRow";


const maxGuesses = 6;

function Board({wordToGuess}){

    const [guesses,setGuesses] = useState(Array(maxGuesses).fill(''));
    const [currentInput,setCurrentInput] = useState('');


    const hanldeKeyPressed= event=> {
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
      <Container onKeyDown={hanldeKeyPressed} className="board" tabIndex={0}>
        {guesses.map((g,index)=> {
            let guess = index===currentGuessIndex()? currentInput:g;
            return <Container key={'guess' + index}><GuessRow guess={guess} guessNumber={index} wordToGuess={wordToGuess}></GuessRow></Container>;
        })}
      </Container>
    );
  }
  export default Board;