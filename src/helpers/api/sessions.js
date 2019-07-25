import { apiRequest } from "./index";
import { API_URL } from "../../config";

function startGame(data, params = {}) {
  const req = {
    method: "POST",
    url: `/casino/startGame`,
    withoutLangID: true,
    data,
    params
  };

  return apiRequest(req);
}

function endGame(data, params = {}) {
  const req = {
    method: "POST",
    url: `/casino/endGame`,
    withoutLangID: true,
    data,
    params
  };

  return apiRequest(req);
}

function endGameBeforeUnload(data) {
  const { casinoGameID, userID, token } = data;

  const params = `?casino_game_id=${casinoGameID}&user_id=${userID}&token=${token}`;
  const result = navigator.sendBeacon(`${API_URL}/casino/endGame/${params}`);

  return result;
}

const sessionsAPI = {
  startGame,
  endGame,
  endGameBeforeUnload
};

export default sessionsAPI;
