import { GameEvent, GameEventType } from '../../types';

const USED_LEVELS = [
  GameEventType.InitGame,
  GameEventType.Exit,
  GameEventType.Kill,
  GameEventType.ShutdownGame,
];

export const removeUselessLog = (logItems: GameEvent[]) =>
  logItems.filter((logItem) =>
    USED_LEVELS.includes(logItem.level as GameEventType),
  );
