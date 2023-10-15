import GuessRow from "./GuessRow";

function Board({wordToGuess, guesses, currentInput}){

  function currentGuessIndex(){
    return guesses.findIndex(guess=>guess.length < wordToGuess.length);
  }


    return (
      <div className="board">
        {guesses.map((g,index)=> {
            let guess = index===currentGuessIndex()? currentInput:g;
            return <GuessRow key={'guess' + index} guess={guess} guessNumber={index} wordToGuess={wordToGuess}></GuessRow>;
        })}
      </div>
    );
  }
  export default Board;