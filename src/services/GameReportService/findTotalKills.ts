import { GameEvent, GameEventType } from '../../types';

export const findTotalKills = (gamesEvents: GameEvent[]): number =>
  gamesEvents.filter((gameEvent) => gameEvent.level === GameEventType.Kill).length;
