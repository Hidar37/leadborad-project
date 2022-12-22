import { key } from './API_key.js';

export default class API {
  constructor() {
    this.apiName = 'Haider Ahmad';
  }

  // eslint-disable-next-line class-methods-use-this
  async addScores(playerName, playerSocre) {
    const response = await fetch(
      `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${key}/scores/`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
        body: JSON.stringify({
          user: playerName,
          score: playerSocre,
        }),
      },
    );
    const responseJson = await response.json();
    return responseJson;
  }

  // eslint-disable-next-line class-methods-use-this
  async getScores() {
    const response = await fetch(
      'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/k1XrGGwLaFG2Z0M5dLBC/scores/',
    );
    const jsonRes = await response.json();
    return jsonRes;
  }
}
