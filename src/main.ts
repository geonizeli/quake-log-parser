import Koa from 'koa';

const app = new Koa();

app.use(async (ctx) => {
  ctx.body = `${ctx.method} ${ctx.url}`;
});

const DEFAULT_PORT = 3000;

try {
  app.listen(DEFAULT_PORT);
  console.log(`Server is running on port ${DEFAULT_PORT}`);
} catch (e) {
  console.log(e);
}
