import { ENDPOINTS, baseHeaders, getToken } from './index';

export const createPlant = async (plant) => {
  const PLANT = ENDPOINTS.API.plant;
  const token = await getToken();
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.create.route, {
      method: PLANT.create.method,
      headers: baseHeaders(token),
      body: JSON.stringify({
        scientificName: plant.species.scientificNameWithoutAuthor,
        genderName: plant.species.genus.scientificNameWithoutAuthor,
        familyName: plant.species.family.scientificNameWithoutAuthor,
        commonName: plant.species.commonNames[0]
          ? plant.species.commonNames[0]
          : 'Sem commonName',
        gbifID: plant.gbifID,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const getPlant = (plantID) => {
  const PLANT = ENDPOINTS.API.plant;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.find.route(plantID), {
      method: PLANT.find.method,
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const getPlants = () => {
  const PLANT = ENDPOINTS.API.plant;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.list.route, {
      method: PLANT.list.method,
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};
