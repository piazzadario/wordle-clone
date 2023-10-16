import GuessRow from "./GuessRow";

function Board({wordToGuess, guesses, currentInput}){

  function currentGuessIndex(){
    return guesses.findIndex(guess=>guess.word.length < wordToGuess.length);
  }


    return (
      <div className="board">
        {guesses.map((g,index)=> {
            let guess = index===currentGuessIndex()? {word: currentInput,submitted: false}:g;
            return <GuessRow key={'guess' + index} guess={guess} guessNumber={index} wordToGuess={wordToGuess} submitted={guess.submitted}></GuessRow>;
        })}
      </div>
    );
  }
  export default Board;