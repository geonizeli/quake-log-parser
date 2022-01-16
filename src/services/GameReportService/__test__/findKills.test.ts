import { findKills } from '../findKills';

describe('findKills', () => {
  it('return kills by player', () => {
    const payload = [
      {
        level: 'Kill',
        body: 'Kill: 1022 2 22: <world> killed Isgalamido by MOD_TRIGGER_HURT',
      },
      {
        level: 'Kill',
        body: 'Kill: 1022 4 22: <world> killed Zeh by MOD_TRIGGER_HURT',
      },
      {
        level: 'Kill',
        body: 'Kill: 1022 2 19: Dono da Bola killed Zeh by MOD_FALLING',
      },
      {
        level: 'Kill',
        body: 'Kill: 1022 2 19: Dono da Bola killed Isgalamido by MOD_FALLING',
      },
      {
        level: 'Kill',
        body: 'Kill: 1022 2 19: Dono da Bola killed Isgalamido by MOD_FALLING',
      },
      {
        level: 'Kill',
        body: 'Kill: 1022 2 19: Isgalamido killed Zeh by MOD_FALLING',
      },
    ];

    expect(
      findKills(payload, [
        'Isgalamido',
        'Dono da Bola',
        'Zeh',
      ]),
    ).toEqual({
			"Isgalamido": 0,
			"Zeh": -1,
			"Dono da Bola": 3
		});
  });
});
