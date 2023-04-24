import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

import { GROUP_COLLECTION, PLAYER_COLLECTION } from '../storageConfig';
import { getAllGroups } from './getAllGroups';

export async function removeGroupByName(groupName: string) {
  try {
    const storedGroups = await getAllGroups();

    const groups = storedGroups.filter(group => group !== groupName);

    const storage = JSON.stringify(groups);

    await AsyncStorage.setItem(
      GROUP_COLLECTION, 
      storage
    );
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupName}`);

  } catch (error) {
    throw error;
  }
} 
