import { ENDPOINTS, baseHeaders, getToken } from './index';

export const favoritePlant = (plantID) => {
  const PLANT = ENDPOINTS.API.favorite;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.create.route(plantID), {
      method: PLANT.create.method,
      headers: baseHeaders(getToken()),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const desfavoritePlant = (plantID) => {
  const PLANT = ENDPOINTS.API.favorite;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.delete.route(plantID), {
      method: PLANT.delete.method,
      headers: baseHeaders(getToken()),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};
