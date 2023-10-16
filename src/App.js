import { useState } from "react";
import Game from "./components/Game";

const initialGameState = {
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
};

function App(){
    const [isGameOver,setIsGameOver] = useState(false);

    function saveResult(numberOfGuesses){
        var history = localStorage.getItem('history');
        if(history===null){
            history = initialGameState;
        }else{
            history = JSON.parse(history);
        }

        history[numberOfGuesses] +=1;
        localStorage.setItem('history', JSON.stringify(history));
    }

    function onGameOver(numberOfGuesses){
        saveResult(numberOfGuesses);
        setIsGameOver(true);
    }

    function onNewGame(){
        setIsGameOver(false);
    }

    return (
      <div>
        <Game onGameOver={onGameOver}></Game>
      </div>
    );
  }
  export default App;