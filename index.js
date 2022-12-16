var wins = 0
var loses = 0
var ties = 0

var vaildAnswer = false
var playerAnswer
var cont = true
var computerAnswer
// rps

while (cont){

// prompted to input rps


while (vaildAnswer === false){
    playerAnswer = prompt('Input R, P, or S');
    playerAnswer = playerAnswer.toLowerCase();

    console.log('player ' + playerAnswer)
// validation of input
    if (playerAnswer == 'r' || playerAnswer == 'p' || playerAnswer == 's'){
        vaildAnswer = true
    } else {
    }
}

// accept

// computer picks RPS

var computerChoice = function computerNum(){
  return Math.floor(Math.random()*3)
}
console.log('compNum ' + computerChoice())

if (computerChoice() === 0){
    computerAnswer = 'r'
} else if (computerChoice() === 1){
    computerAnswer = 'p'
} else if ( computerChoice() === 2){
    computerAnswer = 's'
} else {
    console.log('error')
}

console.log('compAns ' + computerAnswer)

// alerted to computers choice
confirm('The computer chose ' + computerAnswer)

// analize winner
if(computerAnswer === playerAnswer){
    ties++;
    alert(' You tied! \nYou picked ' + playerAnswer.toUpperCase() + ', the computer picked ' + computerAnswer.toUpperCase())
} else if ((computerAnswer === 'r' && playerAnswer === 's') || (computerAnswer === 'p' && playerAnswer === 'r') || (computerAnswer === 's' && playerAnswer === 'p')){
    loses++;
    alert(' You lost! \nYou picked ' + playerAnswer.toUpperCase() + ', the computer picked ' + computerAnswer.toUpperCase())
} else {
    wins++;
    alert(' You won! \nYou picked ' + playerAnswer.toUpperCase() + ', the computer picked ' + computerAnswer.toUpperCase())
}

vaildAnswer = false

// alerted to tally
alert(
    'Score: \n Wins: ' + wins + '\n Loses: ' + loses + '\n Ties: ' +ties
)


// asked if wanting to play again
// reset valid answer

cont = confirm('Would you like to play again?')
}