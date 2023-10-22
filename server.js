const http = require('http');
const Koa = require('koa');
const koaBody = require('koa-body');
const app = new Koa();

app.use(koaBody({
  urlencoded: true,
  multipart: true,
}));

// Предварительный запрос
app.use((ctx, next) => {
  if (ctx.request.method !== 'OPTIONS') {
    next();
    return;
  }
  ctx.response.set('Access-Control-Allow-Origin', '*');
  ctx.response.set('Access-Control-Allow-Methods', 'DELETE, PUT, PATCH, GET, POST');
  ctx.response.status = 204;
  console.log(ctx.request)
});

//Отображение всех тикетов
app.use((ctx, next) => {
  if ((ctx.request.method !== 'GET') || (ctx.request.url !== "/?method=allTickets")){
    next();
    return;
  }
  ctx.response.body = tickets
});

// Создание нового тикета
app.use((ctx, next) => {
  if ((ctx.request.method !== 'POST') || (ctx.request.url !== "/?method=newTicket")){
    next();
    return;
  }
 let name = ctx.request.body.name;
 let body = ctx.request.body.body;
 console.log(name, body)
});

//Удаление тикета
app.use((ctx, next) => {
  if ((ctx.request.method !== 'DELETE') || (ctx.request.url !== "/?method=deleteTicket")){
    next();
    return;
  }
 let name = ctx.request.body.name;
 let body = ctx.request.body.body;
 console.log(name, body)
});

//Изменение тикета
app.use((ctx, next) => {
  if ((ctx.request.method !== 'POST') || (ctx.request.url !== "/?method=changeTicket")){
    next();
    return;
  }
 let name = ctx.request.body.name;
 let body = ctx.request.body.body;
 console.log(name, body)
});

//Получение подробного описание тикета
app.use((ctx, next) => {
  if ((ctx.request.method !== 'GET') || (ctx.request.url !== "/?method=fullTicket")){
    next();
    return;
  }
 let name = ctx.request.body.name;
 let body = ctx.request.body.body;
 console.log(name, body)
});

//Отметка о выполнении каждого тикета
app.use((ctx, next) => {
  if ((ctx.request.method !== 'PUT') || (ctx.request.url !== "/?method=checkoutTicket")){
    next();
    return;
  }
 let name = ctx.request.body.name;
 let body = ctx.request.body.body;
 console.log(name, body)
});

const tickets = [{
    'id' : 'идентификатор (уникальный в пределах системы)',
    'name' : 'краткое описание',
    'description': 'полное описание',
    'status' : false,
    'created' : 'дата создания (timestamp)'
},{
    'id' : '1',
    'name' : 'Не включается компьютер',
    'description': 'полное описание',
    'status' : 'сделано или нет',
    'created' : 'дата создания (timestamp)'
}];

//Запуск сервера
const server = http.createServer(app.callback());
const port = process.env.PORT || 7070;

server.listen(port, (err) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Server is listening to ' + port);
});
