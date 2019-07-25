import { apiRequest } from "./index";

function currencyList(params = {}) {
  const req = {
    method: "GET",
    url: `/currencies`,
    withoutLangID: true,
    params
  };

  return apiRequest(req);
}

const currencyAPI = {
  currencyList
};

export default currencyAPI;
