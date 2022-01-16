import { until } from '@open-draft/until';
import { GameEvent } from '../../types';
import { identifyLogs } from './identifyLogs';
import { removeUselessLog } from './removeUselessLog';
import { splitPayloadAndTrimLines } from './splitPayloadAndTrimLines';

const parse = (payload: string): Promise<GameEvent[]> =>
  new Promise<GameEvent[]>((resolve, reject) => {
    if (typeof payload !== 'string') {
      reject(new Error('Payload must be a string'));
    }

    try {
      const lines = splitPayloadAndTrimLines(payload);
      const logItems = identifyLogs(lines);
      const filteredLogItems = removeUselessLog(logItems);

      resolve(filteredLogItems);
    } catch (error) {
      reject(error);
    }
  });

export const LogParserService = {
  parse: (payload: string) => until(() => parse(payload)),
};
