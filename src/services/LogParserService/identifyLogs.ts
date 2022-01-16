import { GameEvent } from '../../types';

const timestampRegex = new RegExp('^([0-9]+:[0-9]{2})');

export const identifyLogs = (lines: string[]): GameEvent[] =>
  lines.map<null | GameEvent>((line) => {
    const body = line.replace(timestampRegex, '').trim();
    const [level] = body.split(':');

    return {
      level,
      body,
    };
  });
