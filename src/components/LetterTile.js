import React from "react";
import {Card} from "react-bootstrap";

const Status = {
  correct: 'correct',
  wrongPosition: 'wrong-position',
  notPresent: 'not-present',
}

const LetterTile = ({letter, status}) => {
  
    function letterStyle(){
      var baseStyle = "letter-tile";
      if(letter===''){
        return baseStyle;
      }

      switch(status){
        case Status.correct:
            baseStyle+=' correct';
          break;
        case Status.wrongPosition:
            baseStyle+=' wrong-position';
            break;
        case Status.notPresent:
            baseStyle+=' not-present';
            break;
        default:
          break;
      }

      return baseStyle;
    }
  
    return (
      <Card className={letterStyle()}>
        <h2>
        {letter.toUpperCase()}
        </h2>
      </Card>
    );
  }
  export default LetterTile;