export const ENDPOINTS = {
  API: {
    base_url: `http://192.168.0.106:3000`,
    auth: {
      delete: {
        route: `/auth/update`,
        method: `PUT`,
        body: (userBody) => userBody,
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
      create: {
        route: (topicID) => `/topic/create/${topicID}`,
        method: `POST`,
      },
      update: {
        route: (topicID) => `/topic/update/${topicID}`,
        method: `PUT`,
      },
      like: {
        route: (topicID) => `/topic/like/${topicID}`,
        method: `POST`,
      },
      dislike: {
        route: (topicID) => `/topic/dislike/${topicID}`,
        method: `POST`,
      },
    },
    comment: {
      create: {
        route: (commentID) => `/comment/create/${commentID}`,
        method: `POST`,
      },
      update: {
        route: (commentID) => `/comment/update/${commentID}`,
        method: `PUT`,
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
  },
};
