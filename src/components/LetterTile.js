import React from "react";
import {Card} from "react-bootstrap";

const LetterStatus = {
  correct: 'correct',
  wrongPosition: 'wrong-position',
  notPresent: 'not-present',
  notSubmitted: 'not-submitted'
}

const LetterTile = ({letter, status}) => {
  
    function letterStyle(){
      let baseStyle = "letter-tile";
      switch(status){
        case LetterStatus.correct:
            return baseStyle+' correct';
        case LetterStatus.wrongPosition:
          return baseStyle+' wrong-position';
        case LetterStatus.notPresent:
          return baseStyle+' not-present';
        case LetterStatus.notSubmitted:
            return baseStyle;
        default:
          return baseStyle;
      }
    }
  
    return (
      <Card className={letterStyle()}>
        <h2>
        {letter.toUpperCase()}
        </h2>
      </Card>
    );
  }
  export {LetterTile, LetterStatus};