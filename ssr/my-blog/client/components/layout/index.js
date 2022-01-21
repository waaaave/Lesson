import React from 'react';
import Head from 'next/head';

const UserLayout  = (props) => {
  return(
    <div>
      <Head>
        <title>
          百度前端Mr.li
        </title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no" />
        <meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta content="always" name="referrer" />
        <meta name="description" content="Mr.li的前端博客网站，个人博客，技术总结" />
        <meta name="keywords" content="React,前端，css，webpack，es6" />
        <link rel="shotcut icon" href="https://lianxiaozhuang.oss-cn-beijing.aliyuncs.com/xz1024/img/system/favicon.ico" />
      </Head>
      <div className="main-wrapper">
        {props.children}
      </div>
    </div>
  )
}

export default UserLayout