const http = require("http");
const Koa = require('koa');
const serve = require('koa-static')
const koaBody = require('koa-body');
const router = require('./server/router/router');
const logUtil = require("./server/config/log");
const config = require('./server/config/server');
const fetch = require('./server/proxy/fetch');
const token = require('./server/function/token');
require('./server/db/db')
// require('babel-register')
// 创建koa实例
const app = new Koa();
// 全局http请求方法
app.context.fetch = fetch;
// 配置文件上传
app.use(koaBody({
    multipart: true,
    formLimit: '10240kb',
    jsonLimit: '102400',
    formidable: {
        uploadDir: __dirname + '/upload',
        keepExtensions: true
    }
}));
app.use(serve(__dirname + "/dist",{ extensions: ['html']}));
// logger
app.use(async (ctx, next) => {
    const start = new Date(); // 响应开始时间
    var ms; // 响应间隔时间
    try {
      await next(); // 开始进入到下一个中间件
      ms = new Date() - start;
      logUtil.logResponse(ctx, ms); // 记录响应日志
    } catch (error) {
      ms = new Date() - start;
      logUtil.logError(ctx, error, ms); // 记录异常日志
    }
});
// 引入路由
app.use(router.routes());
app.listen(config.port)
if(config.environment === 'development'){
    console.log('\x1B[32m 打开浏览器运行 127.0.0.1:'+config.port+' , 愿你开心快乐每一天\x1b[37m');
}
