import React from "react";
import { Button, Modal } from "react-bootstrap";
import GameHistoryChart from "./GameHistoryChart";

function GameRecapDialog ({show, onHide, lastGameResult, onPlayAgain}) {

    return (
        <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton >
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
        </Modal>
    );
  }
  export default GameRecapDialog;