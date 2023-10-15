async function getRandomWord(){
    try{
        const response = await fetch('https://random-word-api.herokuapp.com/word?length=5');
        const word = await response.json();
        return word[0];
    }catch(err){
        console.log(err);
    }
}

const Api = {getRandomWord};
export default Api;