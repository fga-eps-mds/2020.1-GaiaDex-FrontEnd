import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react'
import { ENDPOINTS } from '../settings'

const baseHeaders = (token = '') => ({
  authtoken: token,
  'Content-Type': 'application/json',
  Accept: 'application/json',
})

export const createTopic = (topicID) => {
    const TOPIC = ENDPOINTS.API.topic
    return new Promise((resolve, reject) => {
        fetch(ENDPOINTS.API.base_url + TOPIC.create.route(topicID),{
            method: TOPIC.create.method,
            headers: baseHeaders(window.localStorage.getItem('token'))
        })
        .then(resolve)
        .then(reject)
    })
}

export const getPlant = (plantID) => {
  const PLANT = ENDPOINTS.API.plant;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.getPlant.route(plantID), {
      method: PLANT.getPlant.method
    })
    .then(res => res.json())
    .then(resolve)
    .catch(reject)
  })
}

export const scannerPlant = (scannerBody) =>{
  const SCANNER = ENDPOINTS.API.scanner;
  console.log(scannerBody.filename)
  return new Promise((resolve, reject) => {
    fetch(
      ENDPOINTS.API.base_url + SCANNER.route,
      {
        method: SCANNER.method,
        headers: baseHeaders(),
        body: JSON.stringify({
          filename: scannerBody.filename,
          data: scannerBody.data,
          mime: scannerBody.mime,
          plantType: scannerBody.plantType,
        })
      })
      .then(res => res.json())
      .then(resolve)
      .then(reject)
  })
}

export const registerPlant = (plant) => {
  const PLANT = ENDPOINTS.API.plant;
  return new Promise((resolve, reject) => {
    fetch(
      ENDPOINTS.API.base_url + PLANT.register, 
      {
        method: PLANT.register.method,
        headers: baseHeaders(window.localStorage).getItem('token'),
        body: {
        scienctificName: plant.species.scientificNameWithoutAuthor,
        genderName: plant.species.genus.scientificNameWithoutAuthor,
        family_name: plant.species.family.scientificNameWithoutAuthor,
        common_name: plant.commonNames[0],
        gbifID: plant.gbifID,
      }
    })
    .then(res => res.json())
    .then(resolve)
    .catch(reject)
  })
}