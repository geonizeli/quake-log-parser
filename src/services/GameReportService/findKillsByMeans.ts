import { DeathMeans, Game, GameEvent } from '../../types';

export const findKillsByMeans = (gameEvents: GameEvent[]): Game['kills_by_means'] => {
  const killsByMeans: Game['kills_by_means'] = {};
  const gameKills = gameEvents.filter(
    (gameEvent) => gameEvent.level === 'Kill',
  );

  Object.values(DeathMeans).forEach((deathMean) => {
    killsByMeans[deathMean] = gameKills.filter((gameEvent) =>
      gameEvent.body.includes(deathMean),
    ).length;
  });

  return killsByMeans;
};
