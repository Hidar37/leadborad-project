import API from './API_modules/API_functionality.js';
import './style/style.css';

const api = new API();

document.getElementById('form-add-player-score').addEventListener('submit', (e) => {
  e.preventDefault();
  api.addScores('Tawfiq Ahmad', 70).then((gameResponse) => {
    console.log(gameResponse.result);
  });
});

document.getElementById('refresh').addEventListener('click', () => {
  api.getScores().then((scoresResponse) => {
    scoresResponse.result.forEach((element) => {
      console.log(element.user);
      console.log(element.score);
    });
  });
});