import './style.css';
import { getScores, addScore } from './modules/scoresHandle';
import { displayScores } from './modules/createList';

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e)=>{
  e.preventDefault();
  addScore();
  getScores().then((response)=>{
    console.log(response);
    displayScores(response.result);
  });
});