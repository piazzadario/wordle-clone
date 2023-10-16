import React from "react";
import {LetterTile,LetterStatus} from "./LetterTile";


const GuessRow = ({guess, guessNumber, wordToGuess, submitted}) => {
  
  function letters(){
    if(guess.word.length < wordToGuess.length){
      const missingLetters = wordToGuess.length - guess.word.length;
      return [...guess.word,...Array(missingLetters).fill('')]
    }

    return [...guess.word];
  }

  function getLetterStatus(index){
    if(!submitted){
      return LetterStatus.notSubmitted;
    }

    if(guess.word[index] === wordToGuess[index]){
      return LetterStatus.correct;
    }

    if(wordToGuess.includes(guess.word[index])){
      return LetterStatus.wrongPosition;
    }

    return LetterStatus.notPresent;
  }

    return (
      <div className="guess-row" key={guessNumber}>
        {letters().map((letter,index)=> <LetterTile key={index+guessNumber} letter={letter} status={getLetterStatus(index)}></LetterTile>)}
      </div>
    );
  }
  export default GuessRow;