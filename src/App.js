import { useState } from "react";
import Game from "./components/Game";
import { Button, Modal } from "react-bootstrap";
import GameHistoryChart from "./components/GameHistoryChart";
import GameHistoryManager from "./managers/GameHistoryManager";


function App(){
    const [isGameOver,setIsGameOver] = useState(false);
    const [showRecapDialog,setShowRecapDialog] = useState(false);
    const [lastGameResult,setLastGameResult] = useState(1);
    
    
    function saveResult(numberOfGuesses){
      GameHistoryManager.saveResult(numberOfGuesses);
    }
    function onGameOver(numberOfGuesses){
        saveResult(numberOfGuesses);
        setIsGameOver(true);
        setShowRecapDialog(true);
    }

    function onNewGame(){
        setIsGameOver(false);
    }

    return (
      <div>
        <Game onGameOver={onGameOver}></Game>
        <Modal show={true} onHide={()=>setShowRecapDialog(false)}>
        <Modal.Header closeButton >
          <Modal.Title>Game recap</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {lastGameResult !== 0? <p>You guessed the word in <b>{lastGameResult}</b> guess(es)</p> : <p>You did not guess the word</p>}
          <GameHistoryChart/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
        </Modal>
        
      </div>
    );
  }
  export default App;