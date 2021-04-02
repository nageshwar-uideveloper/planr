import AsyncStorage from '@react-native-async-storage/async-storage';

const getAuthToken = async (key) => {
  return await AsyncStorage.getItem(key);
};

export {getAuthToken};
