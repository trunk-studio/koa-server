var Koa = require('koa');

const app = new Koa();

// x-response-time
app.use(async (ctx, next) => {
  var start = new Date;
  await next();
  const ms = new Date - start;
  ctx.set('X-Response-Time', ms + 'ms');
});

// logger
app.use(async (ctx, next) => {
  const start = new Date;
  await next();
  const ms = new Date - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

// response
app.use( ctx => {
  ctx.body = 'Hello World';
});

app.listen(3000);
console.log('Listening on http://localhost:3000');
