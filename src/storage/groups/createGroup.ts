import AsyncStorage from '@react-native-async-storage/async-storage';

import { GROUP_COLLECTION } from '../storageConfig';
import { getAllGroups } from './getAllGroups';

// Add a new group to the list of groups in storage
export async function createGroup(newGroup: string) {
  try {
    const storedGroups = await getAllGroups();
    const storage = JSON.stringify([...storedGroups, newGroup]);

    await AsyncStorage.setItem(GROUP_COLLECTION, storage);

  } catch (error) {
    throw error;
  }
} 
