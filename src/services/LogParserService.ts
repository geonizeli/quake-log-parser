import { until } from '@open-draft/until';

type LogItemLevel =
  | 'Exit'
  | 'Item'
  | 'Kill'
  | 'InitGame'
  | 'ClientConnect'
  | 'ClientUserinfoChanged'
  | 'ClientBegin'
  | 'ShutdownGame'
  | 'ClientDisconnect'
  | 'ClientUserinfo';

type LogItem = {
  timestamp: string;
  level: LogItemLevel;
};

const parse = (payload: string): Promise<string[]> => {
  return new Promise<string[]>((resolve, reject) => {
    if (typeof payload !== 'string') {
      reject(new Error('Payload must be a string'));
    }

    resolve(payload.split('\n'));
  });
};

export const LogParserService = {
  parse: (payload: string) => until(() => parse(payload)),
};
