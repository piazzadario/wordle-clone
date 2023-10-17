import { useState } from "react";
import Game from "./components/Game";
import GameHistoryManager from "./managers/GameHistoryManager";
import GameRecapDialog from "./components/GameRecapDialog";
import AppHeader from "./components/AppHeader";
import GameHistoryDialog from "./components/GameHistoryDialog";


function App(){
    const [isGameOver,setIsGameOver] = useState(false);
    const [showRecapDialog,setShowRecapDialog] = useState(false);
    const [lastGameResult,setLastGameResult] = useState(0);
    const [showGameHistory,setShowGameHistory] = useState(false);
    
    
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

    function showGameHistoryDialog(){
      setShowGameHistory(true);
    }

    function hideGameHistoryDialog(){
      setShowGameHistory(false);
    }

    return (
      <div>
        <AppHeader onShowGamesHistory={showGameHistoryDialog}/>
        <Game onGameOver={onGameOver} isGameOver={isGameOver} onNewGame={onNewGame}/>
        <GameRecapDialog show={showRecapDialog} onHide={hideRecapDialog} lastGameResult={lastGameResult} onPlayAgain={startNewGame}/>
        <GameHistoryDialog show={showGameHistory} onHide={hideGameHistoryDialog}/>
      </div>
    );
  }
  export default App;