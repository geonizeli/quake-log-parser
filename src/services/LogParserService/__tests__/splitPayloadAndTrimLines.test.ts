import { splitPayloadAndTrimLines } from '../splitPayloadAndTrimLines';

describe('splitPayloadAndTrimLines', () => {
  it('return splited and trimmed log lines', () => {
    const payload = ` 0:00 ------------------------------------------------------------
        15:00 Exit: Timelimit hit.
        20:34 ClientConnect: 2
        20:37 ClientBegin: 2
        20:37 ShutdownGame:
        20:37 ------------------------------------------------------------
        20:37 ------------------------------------------------------------`;

    expect(splitPayloadAndTrimLines(payload)).toEqual([
      '0:00 ------------------------------------------------------------',
      '15:00 Exit: Timelimit hit.',
      '20:34 ClientConnect: 2',
      '20:37 ClientBegin: 2',
      '20:37 ShutdownGame:',
      '20:37 ------------------------------------------------------------',
      '20:37 ------------------------------------------------------------',
    ]);
  });
});
