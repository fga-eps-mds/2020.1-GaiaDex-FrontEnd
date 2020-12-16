import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = (token) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem('authtoken', token).then(resolve).catch(reject);
  });
};

export const getToken = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('authtoken').then(resolve).catch(reject);
  });
};
