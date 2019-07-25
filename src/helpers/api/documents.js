import { apiRequest } from './index';

const getDocuments = () => {
  const req = {
    method: 'GET',
    url: '/profile/documents',
  };

  return apiRequest(req);
};

const addDocument = (type, url) => {
  const req = {
    method: 'POST',
    url: '/profile/documents',
    data: {
      type_id: type,
      url
    }
  };

  return apiRequest(req);
};

const removeDocument = id => {
  const req = {
    method: 'DELETE',
    url: `/profile/documents/${id}`
  };

  return apiRequest(req);
};

export default {
  addDocument,
  getDocuments,
  removeDocument
}