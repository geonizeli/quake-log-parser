import { GameEvent, GameEventType, GroupedGamesEvents } from '../../types';

export const groupEventsByGame = (
  gameEvents: GameEvent[],
): GroupedGamesEvents => {
  const result: GroupedGamesEvents = [];
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
