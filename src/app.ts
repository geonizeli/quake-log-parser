import Koa from 'koa';
import * as bodyParser from 'koa-bodyparser';

import { LogParserService } from './services/LogParserService';

const app = new Koa();

app.use(
  bodyParser({
    enableTypes: ['text'],
  }),
);

app.use(async (ctx) => {
  const [error, result] = await LogParserService.parse(ctx.request.body);

  ctx.body = error?.message ?? result;
});

export default app;
