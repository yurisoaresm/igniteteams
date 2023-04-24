import AsyncStorage from "@react-native-async-storage/async-storage";
import { AppError } from "@utils/AppError";

import { PLAYER_COLLECTION } from "@storage/storageConfig";
import { PlayerStorageDTO } from "./playerStorageDTO";
import { getPlayersByGroup } from "./getPlayersByGroup";

export async function getPlayersByGroupAndTeam(group: string, team: string) {
  try {
    const storage = await getPlayersByGroup(group);

    const players: PlayerStorageDTO[] = storage.filter(player => player.team === team);

    return players;
  } catch (error) {
    throw error;
  }
}
