// import axios from 'axios';

// import { API_URL } from '../../config';
// import { restoreData as localRestoreData } from '../../helpers/localStorageUtils';
// import { restoreData as sessionRestoreData } from '../../helpers/sessionStorageUtils';
// import { authTokenValue, langIDValue } from '../../helpers/storeUtils';

// export function apiRequest(req, getHeaders = false, onProgress = () => {}, cancelToken) {
//   const url = API_URL + req.url;

//   let authToken = localRestoreData('authToken', '');
//   if (!authToken) {
//     authToken = sessionRestoreData('authToken', '');
//   };
//   if (!authToken) {
//     authToken = authTokenValue();
//   };

//   if (!req.headers) {
//     req.headers = {};
//   }
//   if (authToken) {
//     req.headers.Authorization = authToken;
//   }

//   req.headers['X-Requested-With'] = 'XMLHttpRequest';
//   req.headers['Content-Type']     = 'application/json';

//   if (!req.params) {
//     req.params = {};
//   }
//   if (!req.data) {
//     req.data = {};
//   }

//   if (req.method === 'GET' && !req.withoutLangID && !req.lang_id) {
//     const langID = langIDValue();
//     req.params.lang_id = langID;
//   }

//   const withCredentials = req.withCredentials ? { withCredentials: true } : {};

//   const axiosData = {
//     method  : req.method,
//     url     : url,
//     headers : req.headers,
//     params  : req.params,
//     data    : req.data,
//     onUploadProgress: onProgress,
//     cancelToken,
//     ...withCredentials,
//   };

//   const axiosRequest = axios(axiosData)
//     .then(response => {
//       const serverData = response.data.data;
//       if(getHeaders) {
//         return {
//           data: serverData,
//           headers: response.headers
//         };
//       }
//       return serverData;
//     })
//     .catch(error => {
//       throw error;
//     });

//   return axiosRequest;
// }

// export function extRequest(req) {
  
//   const url = req.url;
//   if (!req.params) req.params = {};
//   if (!req.data) req.data = {};

//   const axiosData = {
//     method: req.method,
//     url: url,
//     headers: req.headers,
//     params: req.params,
//     data: req.data
//   };

//   const axiosRequest = axios(axiosData)
//     .then(response => {
//       const serverData = response.data;
//       return serverData;
//     })
//     .catch(error => {
//       throw error;
//     });

//   return axiosRequest;
// }

