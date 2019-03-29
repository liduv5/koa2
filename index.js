//引入koa
const Koa = require('koa')
//实例化一个koa对象
const app = new Koa()
//引入模板文件
const views = require('koa-views')
const { resolve } = require('path')

app.use(views(resolve(__dirname, './views'), {
  extension: 'pug'
}))
app.use(async (ctx, next) => {
  await ctx.render('index', {
    you: 'caoli',
    me: 'lidu'
  })
})

app.listen(3000, () => {
  console.log("server is running at http://127.0.0.1:3000")
})