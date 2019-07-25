import { apiRequest } from "./index";

function apiDataLoad(casinoID, websiteID, params = {}) {
  const req = {
    method: "GET",
    url: `/websites/${websiteID}/casino`,
    withoutLangID: true,
    params: {
      ...params,
      casino_id: casinoID
    }
  };

  return apiRequest(req);
}

const settingsAPI = {
  apiDataLoad
};

export default settingsAPI;
