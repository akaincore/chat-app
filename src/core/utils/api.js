import fetch from 'isomorphic-fetch';

const api = (uri, token, options, payload) => {
  const url = `//10.102.100.176:9999/v1/${uri}`;
  const authHeaders = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
  return fetch(url, {
    method: 'GET',
    body: JSON.stringify(payload),
    headers: {
      Accept: 'application/json',
      'Content-type': 'application/json',
      ...authHeaders,
    },
    ...options,
  })
    .then(response => response.json())
    .then(json => {
      if (json.success) {
        return json;
      }
      throw new Error(json.message);
    });
};

export default api;
