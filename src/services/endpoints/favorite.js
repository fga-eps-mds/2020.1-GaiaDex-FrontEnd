import { ENDPOINTS, baseHeaders, getToken } from './index';

export const favoritePlant = async (plantID) => {
  const PLANT = ENDPOINTS.API.favorite;
  const token = await getToken();
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.create.route(plantID), {
      method: PLANT.create.method,
      headers: baseHeaders(token),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const desfavoritePlant = async (plantID) => {
  const PLANT = ENDPOINTS.API.favorite;
  const token = await getToken();
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.delete.route(plantID), {
      method: PLANT.delete.method,
      headers: baseHeaders(token),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};
