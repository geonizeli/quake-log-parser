import { Game, GameEvent } from '../../types';

export const findKills = (
  gameEvents: GameEvent[],
  players: string[],
): Game['kills'] => {
  const kills: Game['kills'] = {};

  const gameKills = gameEvents.filter(
    (gameEvent) => gameEvent.level === 'Kill',
  );

  players.forEach((player) => {
    kills[player] = 0;

    gameKills.forEach((gameKill) => {
      if (gameKill.body.includes(`${player} killed `)) {
        kills[player] += 1;
      }
    });
  });

  const worldKills = gameKills.filter((gameKill) =>
    gameKill.body.includes('<world> killed '),
  );

  worldKills.forEach((gameKill) => {
    const victim = gameKill.body.split('killed').at(-1).split(' by ').at(0).trim();

    kills[victim] -= 1;
  });

  return kills;
};
