const initialGameState = {
    1:0,
    2:0,
    3:0,
    4:0,
    5:0,
    6:0,
};


function saveResult(numberOfGuesses){
    var history = getGamesHistory();
    history[numberOfGuesses] +=1;
    localStorage.setItem('history', JSON.stringify(history));
}

function getGamesHistory(){
    var history = localStorage.getItem('history');
    if(history===null){
        history = initialGameState;
    }else{
        history = JSON.parse(history);
    }
    return history;
}

const GameHistoryManager = {saveResult,getGamesHistory}
export default GameHistoryManager;