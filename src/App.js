import { useState } from "react";
import Game from "./components/Game";
import GameHistoryManager from "./managers/GameHistoryManager";
import AppHeader from "./components/AppHeader";
import GameHistoryDialog from "./components/GameHistoryDialog";
import { ThemeContext } from "./Theme";

const getTheme = () => {
  const theme = localStorage.getItem("theme");
  if (!theme) {
    localStorage.setItem("theme", "dark");
    return "dark";
  } else {
    return theme;
  }
};



function App(){
    const [theme,setTheme] = useState(getTheme())
    const [isGameOver,setIsGameOver] = useState(false);
    
    const [showGameHistory,setShowGameHistory] = useState(false);
    
    
    function saveResult(numberOfGuesses){
      GameHistoryManager.saveResult(numberOfGuesses);
    }
    function onGameOver(numberOfGuesses){
        saveResult(numberOfGuesses);
        setIsGameOver(true);
    }

    function onNewGame(){
        setIsGameOver(false);
    }

    function showGameHistoryDialog(){
      setShowGameHistory(true);
    }

    function hideGameHistoryDialog(){
      setShowGameHistory(false);
    }

    function toggleTheme(){
      var newTheme;
      if(theme==='dark'){
        newTheme = 'light';
      }else{
        newTheme = 'dark';
      }
      setTheme(newTheme);
      saveTheme(newTheme);
    }

    function saveTheme(theme){
      localStorage.setItem("theme", theme);
    }
    return (
      <ThemeContext.Provider value={theme}>
<div className={theme}>
        <AppHeader onShowGamesHistory={showGameHistoryDialog} onToggleTheme={toggleTheme} theme={theme}/>
        <Game onGameOver={onGameOver} isGameOver={isGameOver} onNewGame={onNewGame}/>
        <GameHistoryDialog show={showGameHistory} onHide={hideGameHistoryDialog}/>
      </div>
      </ThemeContext.Provider>
        
    );
  }
  export default App;