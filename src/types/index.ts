export enum GameEventType {
  Exit = 'Exit',
  Item = 'Item',
  Kill = 'Kill',
  InitGame = 'InitGame',
  ClientConnect = 'ClientConnect',
  ClientUserinfoChanged = 'ClientUserinfoChanged',
  ClientBegin = 'ClientBegin',
  ShutdownGame = 'ShutdownGame',
  ClientDisconnect = 'ClientDisconnect',
  ClientUserinfo = 'ClientUserinfo',
}

export type GameEvent = {
  level: GameEventType | string;
  body?: string;
};

export type GroupedGamesEvents = GameEvent[][];

export type Game = {
  total_kills: number;
  players: string[];
  kills: {
    [player: string]: number;
  };
  kills_by_means: {
    [mean: string]: number;
  }
};

export type GamesList<T = Game> = {
  [gameId: string]: T;
};

export enum DeathMeans {
  MOD_UNKNOWN = 'MOD_UNKNOWN',
  MOD_SHOTGUN = 'MOD_SHOTGUN',
  MOD_GAUNTLET = 'MOD_GAUNTLET',
  MOD_MACHINEGUN = 'MOD_MACHINEGUN',
  MOD_GRENADE = 'MOD_GRENADE',
  MOD_GRENADE_SPLASH = 'MOD_GRENADE_SPLASH',
  MOD_ROCKET = 'MOD_ROCKET',
  MOD_ROCKET_SPLASH = 'MOD_ROCKET_SPLASH',
  MOD_PLASMA = 'MOD_PLASMA',
  MOD_PLASMA_SPLASH = 'MOD_PLASMA_SPLASH',
  MOD_RAILGUN = 'MOD_RAILGUN',
  MOD_LIGHTNING = 'MOD_LIGHTNING',
  MOD_BFG = 'MOD_BFG',
  MOD_BFG_SPLASH = 'MOD_BFG_SPLASH',
  MOD_WATER = 'MOD_WATER',
  MOD_SLIME = 'MOD_SLIME',
  MOD_LAVA = 'MOD_LAVA',
  MOD_CRUSH = 'MOD_CRUSH',
  MOD_TELEFRAG = 'MOD_TELEFRAG',
  MOD_FALLING = 'MOD_FALLING',
  MOD_SUICIDE = 'MOD_SUICIDE',
  MOD_TARGET_LASER = 'MOD_TARGET_LASER',
  MOD_TRIGGER_HURT = 'MOD_TRIGGER_HURT',
  MISSIONPACK = 'MISSIONPACK',
  MOD_NAIL = 'MOD_NAIL',
  MOD_CHAINGUN = 'MOD_CHAINGUN',
  MOD_PROXIMITY_MINE = 'MOD_PROXIMITY_MINE',
  MOD_KAMIKAZE = 'MOD_KAMIKAZE',
  MOD_JUICED = 'MOD_JUICED',
  MOD_GRAPPLE = 'MOD_GRAPPLE',
}
