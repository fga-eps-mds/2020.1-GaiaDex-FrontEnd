import { ENDPOINTS, baseHeaders, getToken, setToken } from './index';

export const getUserLogged = () => {
  const USER = ENDPOINTS.API.auth;
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + USER.getUser.route, {
      method: USER.getUser.method,
      headers: baseHeaders(getToken()),
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
    fetch(ENDPOINTS.API.base_url + USER.create.route, {
      method: USER.create.method,
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
  return new Promise((resolve, reject) => {
    fetch(ENDPOINTS.API.base_url + USER.delete.route, {
      method: USER.delete.method,
      headers: baseHeaders(getToken()),
    })
      .then((res) => res.json())
      .then(resolve)
      .then(reject);
  });
};
