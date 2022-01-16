import { GameEvent, GameEventType } from '../../types';

export const groupEventsByGame = (
  gameEvents: GameEvent[],
): GameEvent[][] => {
  const result: GameEvent[][] = [];

  let groupedGameEvents: GameEvent[] = [];

  gameEvents.forEach((gameEvent) => {
    if (gameEvent.level === GameEventType.ShutdownGame) {
      result.push(groupedGameEvents);
      groupedGameEvents = [];
    } else if (gameEvent.level !== GameEventType.InitGame) {
      groupedGameEvents.push(gameEvent);
    }
  });

  return result;
};
