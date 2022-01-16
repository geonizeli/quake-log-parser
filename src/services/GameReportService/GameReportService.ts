import { until } from '@open-draft/until';
import { Game, GamesList, GroupedGamesEvents } from '../../types';
import { findKills } from './findKills';
import { findKillsByMeans } from './findKillsByMeans';
import { findPlayers } from './findPlayers';
import { findTotalKills } from './findTotalKills';

type PartialGameList = GamesList<Partial<Game>>;

const matchs = (
  groupedGamesEvents: GroupedGamesEvents,
): Promise<PartialGameList> =>
  new Promise<PartialGameList>((resolve, reject) => {
    try {
      const result: PartialGameList = {};

      groupedGamesEvents.forEach((groupEventsByGame, index) => {
        const players = findPlayers(groupEventsByGame);
        const total_kills = findTotalKills(groupEventsByGame);
        const kills = findKills(groupEventsByGame, players);
        const kills_by_means = findKillsByMeans(groupEventsByGame);

        result[`game_${index + 1}`] = {
          players,
          total_kills,
          kills,
          kills_by_means,
        };
      });

      resolve(result);
    } catch (error) {
      reject(error);
    }
  });

export const GameReportService = {
  matchs: (groupedGamesEvents: GroupedGamesEvents) =>
    until(() => matchs(groupedGamesEvents)),
  ranking: () => null,
};
