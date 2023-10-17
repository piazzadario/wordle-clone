import { useState } from "react";
import Game from "./components/Game";
import { Button, Modal } from "react-bootstrap";
import GameHistoryChart from "./components/GameHistoryChart";
import GameHistoryManager from "./managers/GameHistoryManager";
import GameRecapDialog from "./components/GameRecapDialog";


function App(){
    const [isGameOver,setIsGameOver] = useState(false);
    const [showRecapDialog,setShowRecapDialog] = useState(false);
    const [lastGameResult,setLastGameResult] = useState(0);
    
    
    function saveResult(numberOfGuesses){
      GameHistoryManager.saveResult(numberOfGuesses);
    }
    function onGameOver(numberOfGuesses){
        saveResult(numberOfGuesses);
        setIsGameOver(true);
        setShowRecapDialog(true);
        setLastGameResult(numberOfGuesses);
    }

    function onNewGame(){
        setIsGameOver(false);
    }

    function hideRecapDialog(){
      setShowRecapDialog(false);
    }

    function startNewGame(){
      setIsGameOver(false);
    }

    return (
      <div>
        <Game onGameOver={onGameOver}/>
        <GameRecapDialog show={showRecapDialog} onHide={hideRecapDialog} lastGameResult={lastGameResult} onPlayAgain={startNewGame}/>
      </div>
    );
  }
  export default App;