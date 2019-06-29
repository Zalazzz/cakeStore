//使用express框架创建路由

//导入连接池
const pool=require("../ym_pool.js");

//导入express模块
const express=require("express");

//创建路由器
const router=express.Router();

//添加路由
//用户注册
router.post("/v1/register",(req,res)=>{
	//获取req对象的数据
	console.log(req.body);
	var $uname=req.body.uname;
	var $upwd=req.body.upwd;
	var $email=req.body.email;
	var $phone=req.body.phone;
	var $avatar=req.body.avatar;
	var $user_name=req.body.user_name;
	var sql="insert into ym_user values(?,?,?,?,?,?,?,?)";
	pool.query(sql,[null,$uname,$upwd,$email,$phone,$avatar,$user_name,null],(err,result)=>{
		//测试
		console.log(result);
		if(err) throw err;
		if (result.affectedRows>0)
		{
			res.send("1");
		}else{
			res.send("0");
		}
	});
});



//导出路由器
module.exports=router;