'use strict';

/* console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number ✨';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;

 */

const secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  const lowerScore = function lowerScore() {
    score--;
    document.querySelector('.label-score').textContent = `💯 Score: ${score}`;
  };

  if (!guess) {
    document.querySelector('.message').textContent = 'No Number ⛔';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High! 👆';
      lowerScore();
    } else {
      document.querySelector('.message').textContent = '😢 You Lost the game';
      document.querySelector('.label-score').textContent = `💯 Score: 0`;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!! 👇';
      lowerScore();
    } else {
      document.querySelector('.message').textContent = '😢 You Lost the game';
      document.querySelector('.label-score').textContent = `💯 Score: 0`;
    }
  } else {
    document.querySelector('.message').textContent = 'Correct!';
    document.querySelector('.number').textContent = secretNumber;
    highscore += score;
    document.querySelector('.label-highscore span').textContent = `${score}`;
  }
});
