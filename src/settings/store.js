import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem('authtoken', token);
  } catch (error) {
    console.log({ error: `error when ${error}` });
  }
};
export const getToken = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem('authtoken').then(resolve).catch(reject);
  });
};
