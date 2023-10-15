import { useEffect, useState } from 'react';
import "react-simple-keyboard/build/css/index.css";
import Board from './components/Board';
import Api from './api/api';
import { Spinner } from 'react-bootstrap';
import OnScreenKeyboard from './components/OnScreenKeyboard';


function Game() {
  const [word,setWord] = useState(null);

  useEffect(()=>{
    Api.getRandomWord().then((w)=> {console.log(w); setWord(w);});
  },[]);


  return (
    <div className="Game" >
      {word === null? <Spinner></Spinner> : <Board wordToGuess={word}></Board>}
      <OnScreenKeyboard/>
    </div>
  );
}

export default Game;
