/*创建数据库连接池*/
//1.导入MySQL模块
const mysql=require('mysql');

//2.创建连接池对象
var pool=mysql.createPool({
	host:"127.0.0.1",
	port:3306,
	user:"root",
	password:"",
	database:"ym",
	connectionLimit:20
});

//3.导出对象
module.exports=pool;