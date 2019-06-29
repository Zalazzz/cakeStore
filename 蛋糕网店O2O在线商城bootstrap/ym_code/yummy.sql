/**1.设置UTF8的编码方式**/
SET NAMES utf8;

/**2.删除数据库，如果已存在ym数据库**/
DROP DATABASE IF EXISTS ym;

/**3.创建ym数据库,并设置为UT8的编码方式**/
create database ym charset=utf8;

/**4.进入ym数据库**/
USE ym;

/**4.1创建用户信息表ym_user**/
create table ym_user (
	uid int primary key auto_increment,
	firstName varchar(32) not null,
	lastName varchar(32) not null,
	email varchar(64) not null uinque,
	news varchar(8),
	upwd varchar(32) not null,
);