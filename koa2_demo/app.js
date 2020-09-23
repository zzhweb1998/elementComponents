const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const cors = require('koa-cors');

const article = require('./routes/article')
const users = require('./routes/users')
const socket = require('./routes/socket')
const upload = require('./routes/upload')


// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// 使用koa-cors
app.use(cors());

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(article.routes(), article.allowedMethods())
app.use(users.routes(), users.allowedMethods())
app.use(socket.routes(), socket.allowedMethods())
app.use(upload.routes(), upload.allowedMethods())

//读取pubilc下的文件（如图片）
app.use(require('koa-static')(__dirname+'/public'))

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
