import React from "react";
import {Col, Row} from "react-bootstrap";
import LetterTile from "./LetterTile";


const WordRow = (props) => {

    let {word} = props;
  
  
    return (
      <Row className="word-row">
        {Array.from(word).map((letter)=> <Col><LetterTile letter={letter}></LetterTile></Col>)}
      </Row>
    );
  }
  export default WordRow;