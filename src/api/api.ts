const url = 'https://61e029ae0f3bdb0017934e25.mockapi.io/api/v1/login';

export const getUser = () => {
  return fetch(`${url}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
        
      }

      return response.json();
    });
};
