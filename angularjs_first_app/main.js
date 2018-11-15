

//Update the text between the scores with the result of the round and with what each player played

function resultText(result) {
    if (result === 'tie') {
        roundResultText.innerHTML = "Tie";
    }
    else if (result === 'win') {
        roundResultText.innerHTML = "Win"; 
    }
    else if (result === 'lost') {
        roundResultText.innerHTML = "Lost";
    }

    
}

//Reset scores and text elements to 0
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundResultText.innerHTML = "";
    playerScoreText.innerHTML = "0";
    computerScoreText.innerHTML = "0";
}


//Alert the player whether they won or not after someone reaches 10 points
function gameOver() {
    if (playerScore > computerScore) {
        alert('You WON! way to go buddy');
    }
    else if (playerScore < computerScore) {
        alert("HAHA! A BOT WON YOU OVER");
    }
    else if (playerScore === computerScore) {
        alert("It's a TIE! You were close though...");
    }
    resetGame();
}

//Play a round of Rock, Paper, Scissors
function playRound(playerChoice) {
    let randomIndex = Math.floor(Math.random() * choices.length);
    var computerChoice = choices[randomIndex];
    console.log("Computer chose " + computerChoice)
       if (playerChoice === computerChoice) {
           console.log("Tie");
           resultText('tie');
           return playerChoice
       }
       else if (playerChoice === "Rock") {
               if (computerChoice === "Scissors") {
                   playerScore += 1;
                   console.log("Player Won")
                   resultText('win');
               } 
               else if (computerChoice === "Paper") {
                   computerScore += 1;
                   console.log("Computer Won");
                   resultText('lost');
               }
       }
       else if (playerChoice === "Scissors") {
               if (computerChoice === "Rock") {
                   computerScore += 1
                   console.log("Computer Won")
                   resultText('lost');
               }
               else if  (computerChoice === "Paper") {
                   playerScore += 1;
                   console.log("Player Won")
                   resultText('win');
               }
       }
       else if (playerChoice === "Paper") {
               if (computerChoice === "Rock") {
                   playerScore += 1;
                   console.log("Player Won")
                   resultText('win');
               }
               else if (computerChoice === "Scissors") {
                   computerScore += 1;
                   console.log("Computer Won")
                   resultText('lost');
               }
       }
       playerScoreText.innerHTML = playerScore;
       computerScoreText.innerHTML = computerScore;
       if (playerScore === 10 || computerScore === 10) {
        gameOver();
    }
   
   }
//Variables for the game

const choices = ["Rock", "Paper", "Scissors"];
var playerScore = 0;
var computerScore = 0;
const winningScore = 10;

//Element nodes

const buttons = document.querySelectorAll('.btn-choice');
const playerScoreText = document.getElementById('playerScoreText');
const computerScoreText = document.getElementById('computerScoreText');
const roundResultText = document.getElementById('roundResultText');
var startOver = document.getElementById('resetBtn')
//Event Listeners

buttons.forEach(function(button) {
    button.addEventListener('click', function(event) { 
        let playerChoice = event.currentTarget.getAttribute('data-option');
        playRound(playerChoice);
    
    
    });
});




