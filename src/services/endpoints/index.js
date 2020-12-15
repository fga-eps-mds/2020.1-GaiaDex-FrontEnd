import { ENDPOINTS, getToken, setToken } from '../../settings';

const baseHeaders = (token = '') => ({
  authtoken: token,
  'Content-Type': 'application/json',
  Accept: 'application/json',
});

export { ENDPOINTS, getToken, setToken, baseHeaders };
