import React from "react";
import { Button, Modal } from "react-bootstrap";
import GameHistoryChart from "./GameHistoryChart";

function GameHistoryDialog ({show, onHide}) {

    return (
        <Modal show={show} onHide={onHide}>
        <Modal.Header closeButton >
          <Modal.Title>Game history</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <GameHistoryChart/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Close</Button>
        </Modal.Footer>
        </Modal>
    );
  }
  export default GameHistoryDialog;