import AsyncStorage from '@react-native-async-storage/async-storage';
import { PLAYER_COLLECTION } from '@storage/storageConfig';
import { AppError } from '@utils/AppError';

import { getPlayersByGroup } from './getPlayersByGroup';
import { PlayerStorageDTO } from './playerStorageDTO';

export async function addPlayerByGroup(
  player: PlayerStorageDTO,
  group: string,
) {
  try {
    const storedPlayers = await getPlayersByGroup(group);

    const playerAlreadyExists = storedPlayers.some(
      (playerInStorage) => playerInStorage.name === player.name,
    );

    if (playerAlreadyExists) {
      throw new AppError('Esse jogador já existe.');
    }

    const storage = JSON.stringify([...storedPlayers, player]);

    await AsyncStorage.setItem(`${PLAYER_COLLECTION}-${group}`, storage);
  } catch (error) {
    throw error;
  }
}
