import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import GameHistoryChart from "./GameHistoryChart";
import { ThemeContext } from "../Theme";

function GameRecapDialog ({show, onHide, lastGameResult, onPlayAgain}) {
  const theme = useContext(ThemeContext);

    return (
        <Modal show={show} onHide={onHide}>
          <div className={'modal-'+theme}>

        <Modal.Header >
          <Modal.Title>Game recap</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {lastGameResult !== 0? <p>You guessed the word in <b>{lastGameResult}</b> guess(es)</p> : <p>You did not guess the word</p>}
          <GameHistoryChart/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Close</Button>
          <Button variant="primary" onClick={onPlayAgain}>Play again</Button>
        </Modal.Footer>
          </div>
        </Modal>
    );
  }
  export default GameRecapDialog;