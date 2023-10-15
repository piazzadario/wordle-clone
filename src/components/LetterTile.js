import React from "react";
import {Card} from "react-bootstrap";


const LetterTile = ({letter}) => {
  
  
    return (
      <Card className="letter-tile">
        <h2>
        {letter.toUpperCase()}
        </h2>
      </Card>
    );
  }
  export default LetterTile;