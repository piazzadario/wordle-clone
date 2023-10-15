import {Container} from "react-bootstrap";
import GuessRow from "./GuessRow";




function Board({wordToGuess, guesses, currentInput}){

  function currentGuessIndex(){
    return guesses.findIndex(guess=>guess.length < wordToGuess.length);
  }


    return (
      <div className="board">
        {guesses.map((g,index)=> {
            let guess = index===currentGuessIndex()? currentInput:g;
            return <Container key={'guess' + index}><GuessRow guess={guess} guessNumber={index} wordToGuess={wordToGuess}></GuessRow></Container>;
        })}
      </div>
    );
  }
  export default Board;