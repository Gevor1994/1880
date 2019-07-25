import { apiRequest } from './index';

const uploadFile = (file, onProgress, cancelToken) => {
  const formData = new FormData();
  formData.append('file', file);

  const req = {
    method: 'POST',
    url: '/upload',
    data: formData
  };

  return apiRequest(req, false, onProgress, cancelToken);
};

export default {
  uploadFile
}