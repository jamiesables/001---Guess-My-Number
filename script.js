'use strict';

//Generate random number for player to guess AND setup scoreboard
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

//Add event listening for Check! button click.
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

//If statement to check if there is a guess and if so, is it right?
   

    //When there is no input from user
    if (!guess) {
        document.querySelector('.message').textContent = 'Please Pick A Number Between 1 & 20'
    } 
    
    //When guess is correct
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number'
        document.querySelector('.number').textContent = secretNumber;
    
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'

    //Code to save high score on page
        if (score > highScore) {
            highScore = score;
        }


        //Code to see if guess is bigger or lower
        document.querySelector('.highscore').textContent = highScore
    }      
    else if (guess > secretNumber) {

        //Game over if score reaches 0    
        if (score > 1) {

            document.querySelector('.message').textContent = 'Ooooh, too high!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost - GAME OVER'
            document.querySelector('body').style.backgroundColor = '#EE4B2B'
            
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber) {

          //Game over if score reaches 0   
        if (score > 1) {

        document.querySelector('.message').textContent = 'Ooooh, too low!';
        score--;
        document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent = 'You Lost - GAME OVER'
            document.querySelector('body').style.backgroundColor = '#EE4B2B'
            
            document.querySelector('.score').textContent = 0;
        }
    }
})

//Code to reset eveything when "play again" button is pressed
document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('body').style.backgroundColor = '#00008B';
    document.querySelector('.score').textContent = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = '';
})