import './style.css';
import { getScores, addScore } from './modules/scoresHandle';
import { displayScores } from './modules/createList';

const submitBtn = document.querySelector('.btn-submit');
const refreshBtn = document.querySelector('.btn-refresh')

submitBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  addScore();
  getScores().then((response)=>{
    displayScores(response.result);
  });
});

refreshBtn.addEventListener('click', (e)=>{
  e.preventDefault();
  getScores().then((response)=>{
    displayScores(response.result);
  });
});