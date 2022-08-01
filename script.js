'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value)
*/

//Generate random number for player to guess AND setup scoreboard
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;


//Add event listening for Check! button click.
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

//If statement to check if there is a guess and if so, is it right?
   

    //When there is no input
    if (!guess) {
        document.querySelector('.message').textContent = 'Please Pick A Number Between 1 & 20'
    } 
    
    //When guess is correct
    else if (guess === secretNumber) {
        document.querySelector('.message').textContent = 'Correct Number'
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
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


