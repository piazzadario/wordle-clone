import React, { useContext } from "react";
import { Button, Modal } from "react-bootstrap";
import GameHistoryChart from "./GameHistoryChart";
import { ThemeContext } from "../Theme";


function GameHistoryDialog ({show, onHide}) {
const theme = useContext(ThemeContext);

    return (
        <Modal show={show} onHide={onHide}>
          <div className={'modal-'+theme}>
          <Modal.Header >
          <Modal.Title>Game history</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <GameHistoryChart/>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>Close</Button>
        </Modal.Footer>
          </div>
        
        </Modal>
    );
  }
  export default GameHistoryDialog;