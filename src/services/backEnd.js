import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from 'react';
import { ENDPOINTS, getToken, setToken } from '../settings';

const baseHeaders = (token = '') => ({
  authtoken: token,
  'Content-Type': 'application/json',
  Accept: 'application/json',
});
export const getUserLogged = async () => {
  const USER = ENDPOINTS.API.auth;
  const token = await getToken();
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + USER.getUser.route, {
      method: USER.getUser.method,
      headers: baseHeaders(token),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

export const UserLogin = async (User) => {
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

export const UserSignup = async (User) => {
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

export const UserUpdate = async (User) => {
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

export const UserDelete = async () => {
  const USER = ENDPOINTS.API.auth;
  const token = await getToken();
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + USER.delete.route, {
      method: USER.delete.method,
      headers: baseHeaders(token),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

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
    fetch(ENDPOINTS.API.base_url + TOPIC.getTopic.route(topicID), {
      method: TOPIC.getTopic.method,
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

export const createComment = async (commentID, topicBody) => {
  const COMMENT = ENDPOINTS.API.comment;
  const token = await getToken();
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + COMMENT.create.route(commentID), {
      method: COMMENT.create.method,
      headers: baseHeaders(token),
      body: JSON.stringify({
        text: topicBody.text,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};

export const updateComment = async (commentID, topicBody) => {
  const COMMENT = ENDPOINTS.API.comment;
  const token = await getToken();
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + COMMENT.update.route(commentID), {
      method: COMMENT.update.method,
      headers: baseHeaders(token),
      body: JSON.stringify({
        text: topicBody.text,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};
export const deleteComment = async (commentID) => {
  const COMMENT = ENDPOINTS.API.comment;
  const token = await getToken();
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + COMMENT.delete.route(commentID), {
      method: COMMENT.delete.method,
      headers: baseHeaders(token),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};
export const likeComment = async (commentID) => {
  const COMMENT = ENDPOINTS.API.comment;
  const token = await getToken();
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + COMMENT.like.route(commentID), {
      method: COMMENT.like.method,
      headers: baseHeaders(token),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};
export const dislikeComment = async (CommentID) => {
  const COMMENT = ENDPOINTS.API.comment;
  const token = await getToken();
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + COMMENT.dislike.route(CommentID), {
      method: COMMENT.dislike.method,
      headers: baseHeaders(token),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const getPlant = async (plantID) => {
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
export const getAllPlants = async () => {
  const PLANT = ENDPOINTS.API.plant;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.getAllPlant.route(), {
      method: PLANT.getAllPlants,
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const getPlants = async () => {
  const PLANT = ENDPOINTS.API.plant;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.getAllPlants.route, {
      method: PLANT.getAllPlants.method,
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const scannerPlant = async (scannerBody) => {
  const SCANNER = ENDPOINTS.API.scanner;
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

export const addMyPlant = async (plantId, plantNickname) => {
  const PLANT = ENDPOINTS.API.myPlant;
  const token = await getToken();
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.add.route(plantId), {
      method: PLANT.add.method,
      headers: baseHeaders(token),
      body: JSON.stringify({
        nickname: plantNickname,
      }),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};

export const registerPlant = async (plant) => {
  const PLANT = ENDPOINTS.API.plant;
  const token = await getToken();
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.register.route, {
      method: PLANT.register.method,
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

export const editMyPlant = async (myPlantID, newNick) => {
  const PLANT = ENDPOINTS.API.myPlant;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.edit.route(myPlantID), {
      method: PLANT.edit.method,
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

export const deleteMyPlant = async (myPlantID) => {
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

export const favoritePlant = async (plantID) => {
  const PLANT = ENDPOINTS.API.favorite;
  const token = await getToken();
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + PLANT.add.route(plantID), {
      method: PLANT.add.method,
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
    fetch(ENDPOINTS.API.base_url + PLANT.remove.route(plantID), {
      method: PLANT.remove.method,
      headers: baseHeaders(token),
    })
      .then((res) => res.json())
      .then(resolve)
      .catch(reject);
  });
};
