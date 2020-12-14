import { ENDPOINTS, baseHeaders, getToken } from './index';

export const createMyPlant = (plantId, plantNickname) => {
  const PLANT = ENDPOINTS.API.myPlant;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.create.route(plantId), {
      method: PLANT.create.method,
      headers: baseHeaders(getToken()),
      body: JSON.stringify({
        nickname: plantNickname,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const updateMyPlant = (myPlantID, newNick) => {
  const PLANT = ENDPOINTS.API.myPlant;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.update.route(myPlantID), {
      method: PLANT.update.method,
      headers: baseHeaders(),
      body: JSON.stringify({
        nickname: newNick,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const deleteMyPlant = (myPlantID) => {
  const PLANT = ENDPOINTS.API.myPlant;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.delete.route(myPlantID), {
      method: PLANT.delete.method,
      headers: baseHeaders(),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};
