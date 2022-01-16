import { GameEvent } from '../../../types';
import { findPlayers } from '../findPlayers';

describe('findPlayers', () => {
  it('search by players nicknames', () => {
    const gameEvents: GameEvent[] = [
      {
        level: 'Kill',
        body: 'Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT',
      },
      {
        level: 'Kill',
        body: 'Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT',
      },
      {
        level: 'Kill',
        body: 'Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT',
      },
      {
        level: 'Kill',
        body: 'Kill: 2 3 7: Isgalamido killed Joao by MOD_ROCKET_SPLASH',
      },
      {
        level: 'Kill',
        body: 'Kill: 2 2 7: Isgalamido killed BetaTest by MOD_ROCKET_SPLASH',
      },
      {
        level: 'Kill',
        body: 'Kill: 2 2 7: Isgalamido killed Isgalamido by MOD_ROCKET_SPLASH',
      },
    ];

    expect(findPlayers(gameEvents)).toEqual(['Isgalamido', 'Joao', 'BetaTest']);
  });
});
