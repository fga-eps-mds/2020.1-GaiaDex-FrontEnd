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
            method:TOPIC.create.method,
            headers:baseHeaders(window.localStorage.getItem('token'))
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