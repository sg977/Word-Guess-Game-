//create an array to store all the words
    const words =["alex", "britney","dean", "colin", "julia", "justin", "siyi", "jacob"];
//chose word randomly
    let randomNum = Math.floor(Math.random()*words.length);
    let rightWord = []; 
    let wrongWord = []; 
    let choosenWord = words[randomNum]; 
    let underScore = [];
//create underscore based on the number of words

    let docUnderScore = document.getElementsByClassName('underscore'); 
    let docRightGuess = document.getElementsByClassName('rightGuess'); 
    let docWrongGuess = document.getElementsByClassName('wrongGuess'); 



console.log(choosenWord); 



let generateUnderScore = () => {
    for (let i = 0; i < choosenWord.length; i++) {
        underScore.push("_");
    
    }
    return underScore;
}

//get user's guess
document.addEventListener("keypress", (event) => {
    let keyword = String.fromCharCode(event.keyCode); 
    console.log(keyword); 
    
//if user guess is right 
    if (choosenWord.indexOf(keyword) > -1) {
        //push to right array
        rightWord.push(keyword);
       
        //whenever use gets it right, replace underscore with right letter
        underScore[choosenWord.indexOf(keyword)] = keyword;
        docUnderScore[0].textContent = underScore.join(' '); 
        docRightGuess[0].textContent = rightWord.join(' ');
        if (underScore.join(' ') == choosenWord) {
            alert("You Win!!!")
        }
        console.log(underScore);
        
    }

    else {
        wrongWord.push(keyword);
        docWrongGuess[0].textContent = wrongWord.join(' '); 
        console.log(wrongWord);
    }
})


docUnderScore[0].innerHTML= generateUnderScore().join(' '); 



//check if guess is right 
//if right push to right arry
//if wrong push to wrong array
