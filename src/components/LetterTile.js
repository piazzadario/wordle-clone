import React from "react";
import {Card} from "react-bootstrap";


const LetterTile = (props) => {

    let {letter} = props;
  
  
    return (
      <Card className="letter-tile">
        <Card.Body>{letter}</Card.Body>
      </Card>
    );
  }
  export default LetterTile;