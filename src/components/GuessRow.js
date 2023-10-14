import React from "react";
import {Col, Row} from "react-bootstrap";
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
      <Row className="guess-row" key={guessNumber}>
        {letters().map((letter,index)=> <Col key={index+guessNumber}><LetterTile letter={letter} ></LetterTile></Col>)}
      </Row>
    );
  }
  export default GuessRow;