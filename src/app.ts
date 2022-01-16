import Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';
import { GameReportService } from './services/GameReportService';
import { LogParserService } from './services/LogParserService';

const app = new Koa();

app.use(
  bodyParser({
    enableTypes: ['text'],
  }),
);

app.use(async (ctx) => {
  const [parseError, parseResult] = await LogParserService.parse(ctx.request.body);

  if (ctx.path === '/') {
    ctx.body = parseError?.message ?? parseResult;
  } else if (ctx.path === '/matchs') {
    const [matchReportError, matchsReportResult] = await GameReportService.matchs(parseResult);

    ctx.body = matchReportError?.message ?? matchsReportResult;
  }
});

export default app;
