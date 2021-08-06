import './style.css';
import { getScores, addScore } from './modules/scoresHandle.js';
import { displayScores } from './modules/createList.js';

const submitBtn = document.querySelector('.btn-submit');
const refreshBtn = document.querySelector('.btn-refresh');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addScore();
  getScores().then(({ result }) => {
    displayScores(result);
  });
});

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getScores().then(({ result }) => {
    displayScores(result);
  });
});

window.addEventListener('load',()=>{
  getScores().then(({ result }) => {
    displayScores(result);
  });
})