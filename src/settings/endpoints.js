export const ENDPOINTS = {
  API: {
    base_url: `http://192.168.0.10:3000`,
    auth: {
      delete: {
        route: `/auth/delete`,
        method: `DELETE`,
      },
      update: {
        route: `/auth/update`,
        method: `POST`,
        body: (userBody) => userBody,
      },
      signup: {
        route: `/auth/signup`,
        method: `POST`,
        body: (userBody) => userBody,
      },
      login: {
        route: `/auth/login`,
        method: `POST`,
        body: (userBody) => userBody,
      },
      getUser: {
        route: `/auth/user`,
        method: `GET`,
      },
    },
    plant: {
      register: {
        route: `/plant/register`,
        method: `POST`,
      },
      getPlant: {
        route: (plantID) => `/plant/${plantID}`,
        method: `GET`,
      },
      getAllPlants: {
        route: `/plant/`,
        method: `GET`,
      },
    },
    topic: {
      getTopic: {
        route: (topicID) => `/topic/find/${topicID}`,
        method: `GET`,
      },
      create: {
        route: (plantID) => `/topic/create/${plantID}`,
        method: `POST`,
        body: (topicBody) => topicBody,
      },
      update: {
        route: (topicID) => `/topic/update/${topicID}`,
        method: `PUT`,
        body: (topicBody) => topicBody,
      },
      like: {
        route: (topicID) => `/topic/like/${topicID}`,
        method: `POST`,
      },
      dislike: {
        route: (plantID) => `/topic/dislike/${plantID}`,
        method: `POST`,
      },
    },
    comment: {
      create: {
        route: (commentID) => `/comment/create/${commentID}`,
        method: `POST`,
        body: (commentBody) => commentBody,
      },
      update: {
        route: (commentID) => `/comment/update/${commentID}`,
        method: `PUT`,
        body: (commentBody) => commentBody,
      },
      delete: {
        route: (commentID) => `/comment/delete/${commentID}`,
        method: `DELETE`,
      },
      like: {
        route: (commentID) => `/comment/like/${commentID}`,
        method: `POST`,
      },
      dislike: {
        route: (commentID) => `/comment/dislike/${commentID}`,
        method: `POST`,
      },
    },
    scanner: {
      route: `/scanner/`,
      method: `POST`,
      body: (scannerBody) => scannerBody,
    },
      body:(scannerBody) => scannerBody
    },
    favorites: {
      list:{
        route: (userId) => `/favorites/list/${userId}`,
        method: `GET`,
      },
      delete:{
        route: (userId, plantId) => `/delete/${userId}/${plantId}`,
        method: `DELETE`,
      },
    },
};
