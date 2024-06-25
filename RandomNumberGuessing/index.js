const minNumInput = document.getElementById("minNum");
const maxNumInput = document.getElementById("maxNum");
const guessInput = document.getElementById("guess");
const minNum = parseInt(minNumInput.value);
const maxNum = parseInt(maxNumInput.value);
const guess = parseInt(guessInput.value);
let rollnumber;
let tries=0;
let highscore=0;
let btn = document.getElementById("btnGo");
btn.onclick = function(){
    // if(minNum =="" || maxNum == ""){
    //     alert("You have to enter max and min number");
    // }
    // else if(guess==""){
    //     alert("You have to guess! duh!");
    // }
    // else if(typeof minNum !== "number" || typeof maxNum !=="number" || typeof guess !=="number"){
    //     alert("Please enter a number!");
    // }
    const minNum = parseInt(minNumInput.value);
    const maxNum = parseInt(maxNumInput.value);
    const guess = parseInt(guessInput.value);
    if (isNaN(minNum) || isNaN(maxNum) || isNaN(guess)) {
        alert("Please enter valid numbers for minimum, maximum, and guess!");
        return;  // Exit the function if input is invalid
      } else if (minNum >= maxNum) {
        alert("Minimum number must be less than maximum number!");
        return;
      } 
      else{
        tries++;
        rollnumber = Math.floor(Math.random()*maxNum)+minNum;
        document.getElementById("rollnumber").textContent=rollnumber;
        document.getElementById("try").textContent='Try: '+tries;
      
      let message;
      if(guess === rollnumber){
        message = 'You won in '+tries+' tries! Nice';
        highscore++;
        document.getElementById("highscore").textContent="High score: "+highscore;
        document.getElementById("messbox").textContent=message;
        return;
      }
      else if (guess < rollnumber) {
        message = `Too low! Try again.`;
        document.getElementById("messbox").textContent=message;
        return;
      } else {
        message = `Too high! Try again.`;
        document.getElementById("messbox").textContent=message;
        return;
      }
    }
      
      


}

