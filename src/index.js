import './style.css';
import { getScores, addScore } from './modules/scoresHandle';

const btn = document.querySelector('.btn');

btn.addEventListener('click', (e)=>{
  e.preventDefault();
  addScore();
  getScores();
});