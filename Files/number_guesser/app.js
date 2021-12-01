/*
GAME FUNCTION:
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify Player of the correct answer if loose
- Let Player choose to play again
*/

// Game Values
let min = 1,
  max = 10,
  winningNum = getRandNum(min, max),
  guessesLeft = 3;

//   UI Elements
const game = document.querySelector('#game'),
  minNum = document.querySelector('.min-num'),
  maxNum = document.querySelector('.max-num'),
  guessBtn = document.querySelector('#guess-btn'),
  guessInput = document.querySelector('#guess-input'),
  message = document.querySelector('.message');

//   Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play Again
game.addEventListener('mousedown', function (e) {
  if (e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function () {
  let guess = parseInt(guessInput.value);
  console.log(guess);

  //   Validate
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, 'red');
  }

  //   Check if won
  if (guess === winningNum) {
    // Game Over - Won

    gameOver(true, `${winningNum} is correct, YOU WIN!!`);
  } else {
    //   Wrong Number
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      // Game Over - Lost

      gameOver(
        false,
        `Game Over, You Lost. The Correct Number was ${winningNum}`
      );
    } else {
      // Game continues - answer wrong

      //   Change border color
      guessInput.style.borderColor = 'red';

      //   Clear Input
      guessInput.value = '';

      // Tell User Wrong Number
      setMessage(`${guess} is not correct. ${guessesLeft} guesses left`, 'red');
    }
  }
});

// Game Over
function gameOver(won, msg) {
  let color;
  won === true ? (color = 'green') : (color = 'red');

  // Disable Input
  guessInput.disabled = true;
  // Change border color
  guessInput.style.borderColor = 'green';
  // Change Text Color
  message.style.color = color;
  // Set Message
  setMessage(msg);

  // Play Again
  guessBtn.value = 'Play Again';
  guessBtn.className += 'play-again';
}

// Get Winning Number
function getRandNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
