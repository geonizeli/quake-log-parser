import { LogParserService } from '..';

describe('LogParserService', () => {
  describe('parse', () => {
    describe('when receive a valid log block', () => {
      it('returns game logs', async () => {
        const payload = `20:37 InitGame:
          20:38 ClientConnect: 2
          20:38 ClientUserinfoChanged: 2
          20:40 Item: 2 weapon_rocketlauncher
          20:54 Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT
          20:59 Item: 2 weapon_rocketlauncher
          21:04 Item: 2 ammo_shells
          21:07 Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT
          21:10 ClientDisconnect: 2
          21:53 ClientUserinfoChanged: 3
          21:53 ClientBegin: 3
          22:04 Item: 2 weapon_rocketlauncher
          22:04 Item: 2 ammo_rockets
          22:06 Kill: 2 3 7: Isgalamido killed Mocinha by MOD_ROCKET_SPLASH
          22:11 Item: 2 item_quad
          22:11 ClientDisconnect: 3
          1:47 ShutdownGame:
          20:37 InitGame:
          20:38 ClientConnect: 2
          20:38 ClientUserinfoChanged: 2
          20:40 Item: 2 weapon_rocketlauncher
          20:54 Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT
          20:59 Item: 2 weapon_rocketlauncher
          21:04 Item: 2 ammo_shells
          21:07 Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT
          21:10 ClientDisconnect: 2
          21:53 ClientUserinfoChanged: 3
          21:53 ClientBegin: 3
          22:04 Item: 2 weapon_rocketlauncher
          22:04 Item: 2 ammo_rockets
          22:06 Kill: 2 3 7: Isgalamido killed Mocinha by MOD_ROCKET_SPLASH
          22:11 Item: 2 item_quad
          22:11 ClientDisconnect: 3
          1:47 ShutdownGame:
          `;

        const [error, result] = await LogParserService.parse(payload);

        expect(error).toBeNull();
        expect(result).toHaveLength(2);
        expect(result).toEqual([
          [
            {
              level: 'Kill',
              body: 'Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT',
            },
            {
              level: 'Kill',
              body: 'Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT',
            },
            {
              level: 'Kill',
              body: 'Kill: 2 3 7: Isgalamido killed Mocinha by MOD_ROCKET_SPLASH',
            },
          ],
          [
            {
              level: 'Kill',
              body: 'Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT',
            },
            {
              level: 'Kill',
              body: 'Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT',
            },
            {
              level: 'Kill',
              body: 'Kill: 2 3 7: Isgalamido killed Mocinha by MOD_ROCKET_SPLASH',
            },
          ],
        ]);
      });
    });

    describe('when receive a invalid log block', () => {
      it('retuns error', async () => {
        const [error, result] = await LogParserService.parse(
          1234 as unknown as string,
        );

        expect(error).toBeInstanceOf(Error);
        expect(result).toBeNull();
      });
    });
  });
});
