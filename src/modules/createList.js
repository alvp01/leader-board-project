export const displayScores = (scoresArray) => {
  const scoresList = document.querySelector('.list-scores');
  scoresList.innerHTML = '';
  scoresArray.forEach((score) => {
    scoresList.innerHTML += `<li>${score.user}: ${score.score}</li>`;
  });
};

export default displayScores;