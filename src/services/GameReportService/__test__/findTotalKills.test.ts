import { GameEvent } from "../../../types";
import { findTotalKills } from "../findTotalKills";

describe('findTotalKills', () => {
  it('return total kill events', () => {
    const payload: GameEvent[] = [
      {
        level: 'InitGame',
      },
      {
        level: 'ClientConnect',
      },
      {
        level: 'Kill',
      },
      {
        level: 'Kill',
      },
    ];

    expect(findTotalKills(payload)).toEqual(2);
  });
})
