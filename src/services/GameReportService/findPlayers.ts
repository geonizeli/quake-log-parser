import { filter, map, trim, uniq } from "ramda";
import { GameEvent } from "../../types";

const isNotWorld = (player: string) => player !== "<world>";

export const findPlayers = (gameEvents: GameEvent[]): string[] => {
  const players: string[] = [];

  gameEvents.forEach((gameEvent) => {
    if (gameEvent.level === "Kill") {
      const [killer, victim] = gameEvent.body.split("killed");

      players.push(killer.split(":").at(-1));
      players.push(victim.split(" by ").at(0));
    }
  });

  return filter(isNotWorld, uniq(map(trim, players)));
}
