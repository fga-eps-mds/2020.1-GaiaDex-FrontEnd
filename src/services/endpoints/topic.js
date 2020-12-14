import { ENDPOINTS, baseHeaders, getToken } from './index';

export const createTopic = async (topicID, topicBody) => {
  const TOPIC = ENDPOINTS.API.topic;
  const token = await getToken();
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + TOPIC.create.route(topicID), {
      method: TOPIC.create.method,
      headers: baseHeaders(token),
      body: JSON.stringify({
        title: topicBody.title,
        description: topicBody.description,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

export const getTopic = async (topicID) => {
  const TOPIC = ENDPOINTS.API.topic;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + TOPIC.find.route(topicID), {
      method: TOPIC.find.method,
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const updateTopic = async (topicID, body) => {
  const TOPIC = ENDPOINTS.API.topic;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + TOPIC.update.route(topicID), {
      method: TOPIC.update.method,
      headers: baseHeaders(),
      body: JSON.stringify({
        title: body.title,
        description: body.description,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const likeTopic = async (topicID) => {
  const TOPIC = ENDPOINTS.API.topic;
  const token = await getToken();
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + TOPIC.like.route(topicID), {
      method: TOPIC.like.method,
      headers: baseHeaders(token),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const dislikeTopic = async (topicID) => {
  const TOPIC = ENDPOINTS.API.topic;
  const token = await getToken();
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + TOPIC.dislike.route(topicID), {
      method: TOPIC.dislike.method,
      headers: baseHeaders(token),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};
