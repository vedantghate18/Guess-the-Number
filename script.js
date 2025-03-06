'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = '🦅correct number';

// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 7;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

//we added a event listener and the function in the event  listener acted as a event handler

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  //IF Player do not guesses anything
  if (!guess) {
    document.querySelector('.message').textContent = '😵 No Number';
  } //When Player wins the Game
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🦅correct number';

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }

  //When player Guesses Higher
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🚬Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';
      ('You Lost the Game');
      document.querySelector('.score').textContent = 0;

      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
  //When player Guesses lower
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '😓Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost the Game';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
    }
  }
});

// Implementing the again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';

  document.querySelector('.number').style.width = '15rem';
});
