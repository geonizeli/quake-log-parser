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

export type Game = {
  totalKills: number;
  players: string[],
  kills: {
    [player: string]: number,
  }
}

export type GamesList = {
  [gameId: string]: Game,
}
