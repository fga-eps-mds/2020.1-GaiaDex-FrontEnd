import AsyncStorage from '@react-native-async-storage/async-storage';

export const setToken = async (token) => {
  try {
    await AsyncStorage.setItem('authtoken', token);
  } catch (error) {
    console.log({ error: `error when ${error}` });
  }
};

export const getToken = async () => {
  try {
    return await AsyncStorage.getItem('authtoken');
  } catch (err) {
    return err;
  }
};
