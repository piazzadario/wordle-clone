import React from "react";
import {Card} from "react-bootstrap";


const LetterTile = ({letter}) => {
  
  
    return (
      <Card className="letter-tile">
        <Card.Body>{letter}</Card.Body>
      </Card>
    );
  }
  export default LetterTile;