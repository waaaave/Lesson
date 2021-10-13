1. SQL 索引
2. 数据解构 B+树
3. 数据库缓存 redis

- mall
    用户表 
    1. 密码要加密(安全问题) 不应该存用户密码
    2. 登录? 每次登录时将密码进行md5之后进行对比 login_name=wave&password=md5(password)


CREATE TABLE costomer_login (
  customer_id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '用户ID',
  login_name VARCHAR(20) NOT NULL COMMENT '用户登录名',
  password CHAR(32) NOT NULL COMMENT '用户密码',
  user_stats TINYINT(1) NOT NULL DEFAULT 1 COMMENT '用户的状态',
  modified_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  PRIMARY KEY pk_customerid(customer_id)
);

CREATE TABLE customer_inf(
    customer_inf_id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT 'ID',
    customer_id INT UNSIGNED NOT NULL COMMENT 'customer_login表的自增ID',
    customer_name VARCHAR(20) NOT NULL COMMENT '用户姓名',
    identity_card_type TINYINT(1) NOT NULL DEFAULT 1 COMMENT '1 身份证 2 军官证 3 护照',
    identity_card_no VARCHAR(20) COMMENT '证件号码',
    mobile_phone INT UNSIGNED COMMENT '手机号码',
    customer_email VARCHAR(50) COMMENT '邮箱',
    gender CHAR(1) COMMENT '性别',
    user_point INT NOT NULL DEFAULT 0 COMMENT '用户积分',
    register_time TIMESTAMP NOT NULL COMMENT '注册时间',
    birthday DATETIME COMMENT '会员生日',
    customer_level TINYINT(1) NOT NULL DEFAULT 1 COMMENT '1 普通会员 2 PLUS会员 3 黄金会员',
    user_money DECIMAL(8,2) NOT NULL DEFAULT 0.00 COMMENT '用户余额',
    PRIMARY KEY pk_customerinfid(customer_inf_id)
);

CREATE TABLE customer_level_inf(
    customer_level TINYINT not null auto_increment COMMENT '会员级别ID',
    id TINYINT NOT NULL AUTO_INCREMENT COMMENT '级别ID',
    level_name VARCHAR(10) NOT NULL COMMENT '会员级别名称',
    min_point INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '该级别最低积分',
    max_point INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '该级别最高积分',
    PRIMARY KEY pk_levelid(customer_level)
);

CREATE TABLE customer_addr(
  customer_addr_id INT UNSIGNED AUTO_INCREMENT NOT NULL COMMENT '自增主键ID',
  customer_id INT UNSIGNED NOT NULL COMMENT 'customer_login表的自增ID',
  zip SMALLINT NOT NULL COMMENT '邮编',
  province SMALLINT NOT NULL COMMENT '地区表中省份的ID',
  city SMALLINT NOT NULL COMMENT '地区表中城市的ID',
  district SMALLINT NOT NULL COMMENT '地区表中的区ID',
  address VARCHAR(200) NOT NULL COMMENT '具体的地址门牌号',
  is_default TINYINT NOT NULL COMMENT '是否默认',
  modified_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP COMMENT '最后修改时间',
  PRIMARY KEY pk_customeraddid(customer_addr_id)
) ENGINE = innodb COMMENT '用户地址表';

CREATE TABLE customer_point_log(
  point_id INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '积分日志ID',
  customer_id INT UNSIGNED NOT NULL COMMENT '用户ID',
  source TINYINT UNSIGNED NOT NULL COMMENT '积分来源：0订单，1登陆，2活动',
  refer_number INT UNSIGNED NOT NULL DEFAULT 0 COMMENT '积分来源相关编号',
  change_point SMALLINT NOT NULL DEFAULT 0 COMMENT '变更积分数',
  create_time TIMESTAMP NOT NULL COMMENT '积分日志生成时间',
  PRIMARY KEY pk_pointid(point_id)
) ENGINE = innodb COMMENT '用户积分日志表';

CREATE TABLE customer_balance_log(
  balance_id INT UNSIGNED NOT NULL AUTO_INCREMENT COMMENT '余额日志ID',
  customer_id INT UNSIGNED NOT NULL COMMENT '用户ID',
  source TINYINT UNSIGNED NOT NULL DEFAULT 1 COMMENT '记录来源：1订单，2退货单',
  source_sn INT UNSIGNED NOT NULL COMMENT '相关单据ID',
  create_time TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '记录生成时间',
  amount DECIMAL(8,2) NOT NULL DEFAULT 0.00 COMMENT '变动金额',
  PRIMARY KEY pk_balanceid(balance_id)
) ENGINE = innodb COMMENT '用户余额变动表';

create table customer_login_log(
 login_id int UNSIGNED not null auto_increment comment '登录日志ID',
 customer_id int UNSIGNED not null COMMENT '登录用户ID',
 login_time TIMESTAMP not null COMMENT '用户登录时间', 
 login_ip int unsigned not null COMMENT '登录IP', 
 login_type TINYINT not null COMMENT '登录类型：0未成功 1成功',
 PRIMARY key pk_loginid (login_id)
) ENGINE=INNODB COMMENT '用户登录日志表'
;

MYSQL是关系型数据库