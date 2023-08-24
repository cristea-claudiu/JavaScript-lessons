
var startBtn=document.getElementById("start-btn");
var guessBtn=document.getElementById("guess-btn");
var input = document.getElementById("guessInput");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("guess-btn").click();
  }
});
const startGame=()=>{
    startBtn.innerText = "Reset";
    guessBtn.removeAttribute("disabled");
    secretNumber = Math.floor(Math.random() * (100-50+1)) + 50;
}
const checkGuess=() =>{
            const guessTxt=document.getElementById("guessInput")
            const guess = parseInt(document.getElementById("guessInput").value);
            const guessResultElement = document.getElementById("guessResult");

            if (isNaN(guess) || guess < 50 || guess > 100) {
                guessResultElement.textContent = "Please enter a valid number between 50 and 100.";
                guessResultElement.style.color = "red";
                guessTxt.value="";
                guessTxt.focus();
            } else if (guess === secretNumber) {
                guessResultElement.textContent = `Congratulations! The number is: ${secretNumber}
                                                    the page will be reloaded in 5 sec`;
                guessResultElement.style.color = "green";
                setTimeout(reloadPage, 5000);
            } else if (guess < secretNumber) {
                guessResultElement.textContent = "Try a higher number.";
                guessResultElement.style.color = "orange";
                guessTxt.value="";
            guessTxt.focus();
            } else {
                guessResultElement.textContent = "Try a lower number.";
                guessResultElement.style.color = "blue";
                guessTxt.value="";
            guessTxt.focus();
            }
            
        }
        function reloadPage() {
            location.reload();
        }
