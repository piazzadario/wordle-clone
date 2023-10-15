import { useEffect, useState } from 'react';
import Keyboard from 'react-simple-keyboard';
import "react-simple-keyboard/build/css/index.css";
import './App.css';
import Board from './components/Board';
import Api from './api/api';
import { Spinner } from 'react-bootstrap';
import OnScreenKeyboard from './components/OnScreenKeyboard';


function App() {
  const [word,setWord] = useState(null);

  useEffect(()=>{
    Api.getRandomWord().then((w)=> {console.log(w); setWord(w);});
  },[]);


  return (
    <div className="App" >
      {word === null? <Spinner></Spinner> : <Board wordToGuess={word}></Board>}
      <OnScreenKeyboard/>
    </div>
  );
}

export default App;
