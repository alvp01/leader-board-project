import './style.css';
import { getScores, addScore } from './modules/scoresHandle.js';
import { displayScores } from './modules/createList.js';

const submitBtn = document.querySelector('.btn-submit');
const refreshBtn = document.querySelector('.btn-refresh');
const form = document.querySelector('.score-form');
const syncIcon = document.querySelector('.fa-sync');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addScore();
  getScores().then(({ result }) => {
    displayScores(result);
    form.reset();
  });
});

refreshBtn.addEventListener('click', (e) => {
  e.preventDefault();
  getScores().then(({ result }) => {
    displayScores(result);
  });
});

refreshBtn.addEventListener('mouseenter', () => {
  syncIcon.classList.add('fa-spin');
});

refreshBtn.addEventListener('mouseleave', () => {
  if (syncIcon.classList.contains('fa-spin')) syncIcon.classList.remove('fa-spin');
});

window.addEventListener('load', () => {
  getScores().then(({ result }) => {
    displayScores(result);
  });
});