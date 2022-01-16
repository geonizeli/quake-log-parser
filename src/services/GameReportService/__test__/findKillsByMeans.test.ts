import { GameEvent } from '../../../types';
import { findKillsByMeans } from '../findKillsByMeans';

describe('findKillsByMeans', () => {
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

    expect(findKillsByMeans(gameEvents)).toEqual({
      MISSIONPACK: 0,
      MOD_BFG: 0,
      MOD_BFG_SPLASH: 0,
      MOD_CHAINGUN: 0,
      MOD_CRUSH: 0,
      MOD_FALLING: 0,
      MOD_GAUNTLET: 0,
      MOD_GRAPPLE: 0,
      MOD_GRENADE: 0,
      MOD_GRENADE_SPLASH: 0,
      MOD_JUICED: 0,
      MOD_KAMIKAZE: 0,
      MOD_LAVA: 0,
      MOD_LIGHTNING: 0,
      MOD_MACHINEGUN: 0,
      MOD_NAIL: 0,
      MOD_PLASMA: 0,
      MOD_PLASMA_SPLASH: 0,
      MOD_PROXIMITY_MINE: 0,
      MOD_RAILGUN: 0,
      MOD_ROCKET: 3,
      MOD_ROCKET_SPLASH: 3,
      MOD_SHOTGUN: 0,
      MOD_SLIME: 0,
      MOD_SUICIDE: 0,
      MOD_TARGET_LASER: 0,
      MOD_TELEFRAG: 0,
      MOD_TRIGGER_HURT: 3,
      MOD_UNKNOWN: 0,
      MOD_WATER: 0,
    });
  });
});
