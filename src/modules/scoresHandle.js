const GAME_URL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/v2LBVxdzmSvYNYA0f7V3/scores/';

export const getScores = async () => {
  const response = await fetch(GAME_URL);
  
  if(!response.ok) throw new Error(`An error has ocurred: ${response.status}`) 
  
  return response.json()
};

export const addScore = async () => {
  const name = document.querySelector('#name').value;
  const score = document.querySelector('#score').value;
  const playerScore = {
    user: name,
    score: parseInt(score, 10),
  }

  const request = await fetch(GAME_URL, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(playerScore),
  });
  return request.json();  
};