import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';
import { ENDPOINTS, getToken, setToken } from '../settings';

const baseHeaders = (token = '') => ({
  authtoken: token,
  'Content-Type': 'application/json',
  Accept: 'application/json',
});
export const getUserLogado = () => {
  const USER = ENDPOINTS.API.auth;
  return new Promise(async (resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + USER.getUser.route, {
      method: USER.getUser.method,
      headers: baseHeaders(await getToken()),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

export const UserLogin = (User) => {
  const USER = ENDPOINTS.API.auth;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + USER.login.route, {
      method: USER.login.method,
      headers: baseHeaders(),
      body: JSON.stringify({
        email: User.email,
        password: User.password,
      }),
    })
      .then((res) => {
        setToken(res.headers.get('authtoken'));
        return res.json();
      })
      .then(resolve)
      .then(reject);
  });
};

export const UserSignup = (User) => {
  const USER = ENDPOINTS.API.auth;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + USER.signup.route, {
      method: USER.signup.method,
      headers: baseHeaders(),
      body: JSON.stringify({
        username: User.username,
        email: User.email,
        password: User.password,
        passwordConfirmation: User.password,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

export const UserUpdate = (User) => {
  const USER = ENDPOINTS.API.auth;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + USER.update.route, {
      method: USER.update.method,
      headers: baseHeaders(),
      body: JSON.stringify({
        username: User.username,
        email: User.email,
        password: User.password,
        passwordConfirmation: User.password,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

export const UserDelete = () => {
  const USER = ENDPOINTS.API.auth;
  return new Promise(async (resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + USER.delete.route, {
      method: USER.delete.method,
      headers: baseHeaders(await getToken()),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};
export const getUserLogado = () => {
  const USER = ENDPOINTS.API.auth;
  return new Promise(async(resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + USER.getUser.route, {
      method: USER.getUser.method,
      headers: baseHeaders(await getToken()),
    })
      .then(res => res.json())
      .then(resolve)
      .then(reject);
  });
};

export const createTopic = (topicID, topicBody) => {
  const TOPIC = ENDPOINTS.API.topic;
  return new Promise(async (resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + TOPIC.create.route(topicID), {
      method: TOPIC.create.method,
      headers: baseHeaders(await getToken()),
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
export const getTopic = (topicID) => {
  const TOPIC = ENDPOINTS.API.topic;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + TOPIC.getTopic.route(topicID), {
      method: TOPIC.getTopic.method,
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};
export const updateTopic = (topicID, body) => {
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
export const likeTopic = (topicID) => {
  const TOPIC = ENDPOINTS.API.topic;
  return new Promise(async (resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + TOPIC.like.route(topicID), {
      method: TOPIC.like.method,
      headers: baseHeaders(await getToken()),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};
export const dislikeTopic = (topicID) => {
  const TOPIC = ENDPOINTS.API.topic;
  return new Promise(async (resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + TOPIC.dislike.route(topicID), {
      method: TOPIC.dislike.method,
      headers: baseHeaders(await getToken()),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const createComment = (commentID, topicBody) => {
  const COMMENT = ENDPOINTS.API.comment;
  return new Promise(async (resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + COMMENT.create.route(commentID), {
      method: COMMENT.create.method,
      headers: baseHeaders(await getToken()),
      body: JSON.stringify({
        text: topicBody.text,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

export const updateComment = (commentID, topicBody) => {
  const COMMENT = ENDPOINTS.API.comment;
  return new Promise(async (resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + COMMENT.update.route(commentID), {
      method: COMMENT.update.method,
      headers: baseHeaders(await getToken()),
      body: JSON.stringify({
        text: topicBody.text,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};
export const deleteComment = (commentID, topicBody) => {
  const COMMENT = ENDPOINTS.API.comment;
  return new Promise(async (resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + COMMENT.delete.route(commentID), {
      method: COMMENT.delete.method,
      headers: baseHeaders(await getToken()),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};
export const likeComment = (commentID) => {
  const COMMENT = ENDPOINTS.API.comment;
  return new Promise(async (resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + COMMENT.like.route(commentID), {
      method: COMMENT.like.method,
      headers: baseHeaders(await getToken()),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};
export const dislikeComment = (CommentID) => {
  const COMMENT = ENDPOINTS.API.comment;
  return new Promise(async (resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + COMMENT.dislike.route(CommentID), {
      method: COMMENT.dislike.method,
      headers: baseHeaders(await getToken()),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const getPlant = (plantID) => {
  const PLANT = ENDPOINTS.API.plant;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.getPlant.route(plantID), {
      method: PLANT.getPlant.method,
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};
export const getAllPlants = () => {
  const PLANT = ENDPOINTS.API.plant;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.getAllPlant.route(plantID), {
      method: PLANT.getAllPlants,
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const scannerPlant = (scannerBody) => {
  const SCANNER = ENDPOINTS.API.scanner;
  console.log(scannerBody.filename);
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + SCANNER.route, {
      method: SCANNER.method,
      headers: baseHeaders(),
      body: JSON.stringify({
        filename: scannerBody.filename,
        data: scannerBody.data,
        mime: scannerBody.mime,
        plantType: scannerBody.plantType,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};
export const photoPlant = (scannerBody) => {
  const PHOTO = ENDPOINTS.API.savePhoto;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PHOTO.route, {
      method: PHOTO.method,
      headers: baseHeaders(),
      body: mul,
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

export const registerPlant = (plant) => {
  const PLANT = ENDPOINTS.API.plant;
  return new Promise(async (resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.register, {
      method: PLANT.register.method,
      headers: baseHeaders(await getToken()),
      body: {
        scienctificName: plant.species.scientificNameWithoutAuthor,
        genderName: plant.species.genus.scientificNameWithoutAuthor,
        family_name: plant.species.family.scientificNameWithoutAuthor,
        common_name: plant.commonNames[0],
        gbifID: plant.gbifID,
      },
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const delFavorite = (plantID) => {
  const FAVORITES = ENDPOINTS.API.favorites;
  return new Promise(async (resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + FAVORITES.delete.route(plantID), {
      method: FAVORITES.delete.method,
      headers: baseHeaders(await getToken()),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};
export const getFavorites = () => {
  const FAVORITES = ENDPOINTS.API.favorites;
  return new Promise(async (resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + FAVORITES.list.route, {
      method: FAVORITES.list.method,
      headers: baseHeaders(await getToken()),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};
