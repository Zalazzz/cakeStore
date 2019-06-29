//现在用express模块创建服务器

//导入expres模块
const express=require("express");

//导入pool连接池对象
const ymPool=require("./ym_pool");

//导入路由器
const ymRouter=require("./routers/ym_user.js");

//导入body-parse中间件解析，将post请求的数据格式化为对象
const bodyParser=require("body-parser");

//创建服务器
var app=express();

//监听服务器端口
app.listen(8080);

//托管静态资源
app.use(express.static('public/html'));

//使用中间件
app.use(bodyParser.urlencoded({
	extended:false
}));

//使用路由器
app.use("/ym_user",ymRouter);
