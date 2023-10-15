import React from "react";
import LetterTile from "./LetterTile";


const GuessRow = ({guess, guessNumber, wordToGuess}) => {
  
  function letters(){
    if(guess.length < wordToGuess.length){
      const missingLetters = wordToGuess.length - guess.length;
      return [...guess,...Array(missingLetters).fill('')]
    }

    return [...guess];
  }
  
    return (
      <div className="guess-row" key={guessNumber}>
        {letters().map((letter,index)=> <LetterTile key={index+guessNumber} letter={letter} ></LetterTile>)}
      </div>
    );
  }
  export default GuessRow;