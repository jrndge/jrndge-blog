(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{403:function(t,_,e){"use strict";e.r(_);var a=e(7),r=Object(a.a)({},(function(){var t=this,_=t._self._c;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h2",{attrs:{id:"教程链接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#教程链接"}},[t._v("#")]),t._v(" 教程链接")]),t._v(" "),_("p",[t._v("使用EMQX进行搭建mqtt服务器")]),t._v(" "),_("p",[t._v("EMQX 官网：https://www.emqx.io")]),t._v(" "),_("p",[_("a",{attrs:{href:"https://mp.weixin.qq.com/s/uoGou8mdWLcDS20JRbiHzg",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://mp.weixin.qq.com/s/uoGou8mdWLcDS20JRbiHzg"),_("OutboundLink")],1)]),t._v(" "),_("h2",{attrs:{id:"在windows上搭建emqx"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#在windows上搭建emqx"}},[t._v("#")]),t._v(" 在Windows上搭建EMQX")]),t._v(" "),_("h3",{attrs:{id:"_1-打开命令提示符或powershell-拉取emqx镜像"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_1-打开命令提示符或powershell-拉取emqx镜像"}},[t._v("#")]),t._v(" 1.打开命令提示符或PowerShell，拉取EMQX镜像：")]),t._v(" "),_("p",[t._v("docker pull emqx/emqx:latest")]),t._v(" "),_("p",[t._v("如果遇到拉取失败的话,可以添加一个registry-mirrors的环境变量.")]),t._v(" "),_("p",[t._v("百度的这个.")]),t._v(" "),_("p",[t._v('"https://mirror.baidubce.com"')]),t._v(" "),_("h3",{attrs:{id:"_2-运行emqx容器"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_2-运行emqx容器"}},[t._v("#")]),t._v(" 2.运行EMQX容器：")]),t._v(" "),_("p",[t._v("docker run -d --name emqx --restart always -p 1883:1883 -p 8083:8083 -p 8084:8084 -p 8883:8883 -p 18083:18083 emqx/emqx:latest")]),t._v(" "),_("p",[t._v("端口介绍")]),t._v(" "),_("p",[t._v("1883: MQTT 协议端口")]),t._v(" "),_("p",[t._v("8083: MQTT/WebSocket 端口")]),t._v(" "),_("p",[t._v("8084: MQTT/WebSocket/SSL 端口")]),t._v(" "),_("p",[t._v("8883: MQTT/SSL 端口")]),t._v(" "),_("p",[t._v("18083: EMQX Dashboard 管理控制台端口")]),t._v(" "),_("h3",{attrs:{id:"_3-访问emqx管理控制台"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_3-访问emqx管理控制台"}},[t._v("#")]),t._v(" 3.访问EMQX管理控制台：")]),t._v(" "),_("p",[t._v("打开浏览器访问：http://localhost:18083")]),t._v(" "),_("p",[t._v("默认登录凭证：")]),t._v(" "),_("p",[t._v("用户名：admin")]),t._v(" "),_("p",[t._v("密码：public（已经修改过了）")]),t._v(" "),_("h3",{attrs:{id:"_4-测试连接"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#_4-测试连接"}},[t._v("#")]),t._v(" 4.测试连接")]),t._v(" "),_("p",[t._v("可以使用MQTT客户端工具（如MQTT.fx或Mosquitto客户端）连接测试：")]),t._v(" "),_("p",[t._v("主机：localhost")]),t._v(" "),_("p",[t._v("端口：1883")]),t._v(" "),_("p",[t._v("协议：MQTT")]),t._v(" "),_("p",[t._v("能测试通过")]),t._v(" "),_("h2",{attrs:{id:"一些使用技巧"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一些使用技巧"}},[t._v("#")]),t._v(" 一些使用技巧")])])}),[],!1,null,null,null);_.default=r.exports}}]);