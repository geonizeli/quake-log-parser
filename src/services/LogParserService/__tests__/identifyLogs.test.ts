import { identifyLogs } from '../identifyLogs';

describe('identifyLogs', () => {
  it('return GameEvent for each log line', () => {
    const lines: string[] = [
      '20:38 ClientConnect: 2',
      '20:38 ClientUserinfoChanged: 2',
      '20:38 ClientBegin: 2',
      '20:40 Item: 2 weapon_rocketlauncher',
      '20:40 Item: 2 ammo_rockets',
    ];

    expect(identifyLogs(lines)).toEqual([
      {
        level: 'ClientConnect',
        body: 'ClientConnect: 2',
      },
      {
        level: 'ClientUserinfoChanged',
        body: 'ClientUserinfoChanged: 2',
      },
      {
        level: 'ClientBegin',
        body: 'ClientBegin: 2',
      },
      {
        level: 'Item',
        body: 'Item: 2 weapon_rocketlauncher',
      },
      {
        level: 'Item',
        body: 'Item: 2 ammo_rockets',
      },
    ]);
  });
});
