import { until } from '@open-draft/until';
import { pipe } from 'ramda';
import { GameEvent } from '../../types';
import { groupEventsByGame } from './groupEventsByGame';
import { identifyLogs } from './identifyLogs';
import { removeUselessLog } from './removeUselessLog';
import { splitPayloadAndTrimLines } from './splitPayloadAndTrimLines';

const parseFlow = pipe(
  splitPayloadAndTrimLines,
  identifyLogs,
  removeUselessLog,
  groupEventsByGame,
);

const parse = (payload: string): Promise<GameEvent[][]> =>
  new Promise<GameEvent[][]>((resolve, reject) => {
    if (typeof payload !== 'string') {
      reject(new Error('Payload must be a string'));
    }

    try {
      const gamesEvents = parseFlow(payload);

      resolve(gamesEvents);
    } catch (error) {
      reject(error);
    }
  });

export const LogParserService = {
  parse: (payload: string) => until(() => parse(payload)),
};
