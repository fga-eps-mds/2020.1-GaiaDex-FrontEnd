export const ENDPOINTS = {
  API: {
    base_url: `http://192.168.0.10:3000`,
    auth: {
      user:{
        route: `/auth/user`,
        method: `GET`,
      },
      delete: {
        route: `/auth/delete`,
        method: `DELETE`,
      },
      update: {
        route: `/auth/update`,
        method: `POST`,
        body: (userBody) => userBody,
      }, 
      findOne:{
        route: (userID) => `/auth/user/${userID}`,
        method: `GET`
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
        route: `/plant`,
        method: `GET`
      }
    },
    myPlant: {
      edit: {
        route: (myPlantID) => `/myplants/edit/${myPlantID}`,
        method: `PUT`,
      },
      delete: {
        route: (myPlantID) => `/myplants/delete/${myPlantID}`,
        method: `DELETE`,
        body: (nickname) => nickname,
      },
    },
    favorite: {
      add: {
        route: (plantID) => `/favorites/add/${plantID}`,
        method: `POST`,
      },
      remove: {
        route: (plantID) => `/favorites/delete/${plantID}`,
        method: `DELETE`,
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
    favorites: {
      list: {
        route: `/favorites/list`,
        method: `GET`,
      },
      delete: {
        route: (plantId) => `/favorites/delete/${plantId}`,
        method: `DELETE`,
      },
    },
    scanner: {
      route: `/scanner/`,
      method: `POST`,
      body: (scannerBody) => scannerBody,
    },
  },
};
