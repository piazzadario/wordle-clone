import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
import Api from './api/api';
import { Spinner } from 'react-bootstrap';

function App() {
  const [word,setWord] = useState(null);

  useEffect(()=>{
    Api.getRandomWord().then((w)=> {console.log(w); setWord(w);});
  },[]);

  return (
    <div className="App" >
        
       {word === null? <Spinner></Spinner> : <Board wordToGuess={word}></Board>}
       
        
      
    </div>
  );
}

export default App;
