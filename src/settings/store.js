import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async (token) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.setItem('authtoken', token).then(resolve).catch(reject);
  });
};

export const getToken = async () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('authtoken').then(resolve).catch(reject);
  });
};
