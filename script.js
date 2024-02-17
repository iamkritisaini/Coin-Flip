const score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0 };

function playgame(guess) {
  const randomNumber = Math.random();
  const result = randomNumber < 0.5 ? 'heads' : 'tails';

  const winOrLose = guess === result ? 'you win' : 'you lose';
  console.log(winOrLose);

  if (guess === result) {
    score.wins++;
  } else {
    score.losses++;
  }

  document.getElementById('wins').innerText = score.wins;
  document.getElementById('losses').innerText = score.losses;

  localStorage.setItem('score', JSON.stringify(score));
}