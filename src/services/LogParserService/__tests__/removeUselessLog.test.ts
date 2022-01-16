import { GameEvent } from "../../../types";
import { removeUselessLog } from "../removeUselessLog";

describe('removeUselessLog', () => {
  it('filter only useful logs to report', () => {
    const items: GameEvent[] = [
      {
        level: 'InitGame',
        body: 'InitGame: 0',
      },
      {
        level: 'ClientConnect',
        body: 'ClientConnect: 2',
      }
    ];

    expect(removeUselessLog(items)).toEqual([
      items[0],
    ]);
  })
})
