import * as SecureStore from 'expo-secure-store';
import { User } from '../context/types';

// Storing data securely
async function storeDataSecurely(key: string, value: User) {
  try {
    await SecureStore.setItemAsync(key, JSON.stringify(value));
    console.log('Data stored securely.');
  } catch (error) {
    console.error('Error storing data:', error);
  }
}

// Retrieving data securely
async function retrieveDataSecurely(key: string) {
  try {
    const data = await SecureStore.getItemAsync(key);
    if (data) {
      console.log('Retrieved data:', data);
      return data
    } else {
      console.log('Data not found.');
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
  }
}

// Deleting data securely
async function deleteDataSecurely(key: string) {
  try {
    await SecureStore.deleteItemAsync(key);
    console.log('Data deleted securely.');
  } catch (error) {
    console.error('Error deleting data:', error);
  }
}

export {
    storeDataSecurely,
    retrieveDataSecurely,
    deleteDataSecurely
}
