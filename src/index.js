import API from './API_modules/API_functionality.js';
import './style/style.css';

const api = new API();
const playerName = document.getElementById('name');
const playerScore = document.getElementById('score');
const playerInfoWrapper = document.getElementById('add-player-info');

// Show all Players info on page load
window.addEventListener('load', () => {
  api.getScores().then((getScoresResponse) => {
    getScoresResponse.result.forEach((element) => {
      // Creating li for each player
      const liElement = document.createElement('li');
      liElement.setAttribute('class', 'nav-item');
      liElement.textContent = `${element.user}: ${element.score}`;
      playerInfoWrapper.appendChild(liElement);
    });
  });
});

// Add New player and thier scores
document
  .getElementById('form-add-player-score')
  .addEventListener('submit', (e) => {
    e.preventDefault();
    api.addScores(playerName.value, playerScore.value).then((gameResponse) => {
      // Clear form input after player Info saved in the server
      api.resetForm(document.getElementById('form-add-player-score'));
      // Show Success/Failer message
      document.getElementById('show-message').textContent = gameResponse.result;
      document.getElementById('show-message').style.display = 'block';
      setInterval(() => {
        document.getElementById('show-message').style.display = 'none';
      }, 5000);
    });
  });
// Get all Players Info
document.getElementById('refresh').addEventListener('click', () => {
  // Clear all the page data because of duplication
  playerInfoWrapper.innerHTML = '';
  api.getScores().then((getScoresResponse) => {
    getScoresResponse.result.forEach((element) => {
      // Creating li for each player
      const liElement = document.createElement('li');
      liElement.setAttribute('class', 'nav-item');
      liElement.textContent = `${element.user}: ${element.score}`;
      playerInfoWrapper.appendChild(liElement);
    });
  });
});
