(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{559:function(_,v,t){"use strict";t.r(v);var s=t(7),e=Object(s.a)({},(function(){var _=this,v=_._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[v("h2",{attrs:{id:"一行命令安装mysql指定版本"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#一行命令安装mysql指定版本"}},[_._v("#")]),_._v(" 一行命令安装mysql指定版本")]),_._v(" "),v("p",[v("code",[_._v("docker run -d --name mysql_for_dy --restart=always -p 3307:3306 -e MYSQL_ROOT_PASSWORD=123456 mysql:5.7")])]),_._v(" "),v("p",[_._v("因为我设置了一个默认的密码.又没有设置除了root用户以外的别的用户,也没有设置限制访问ip,也没设置备份,导致我在数据库中存储的20万条数据,被人删掉了.")]),_._v(" "),v("p",[_._v("生成一个默认别的用户和密码及默认的root密码.")]),_._v(" "),v("p",[_._v("能成功生成:")]),_._v(" "),v("p",[v("code",[_._v("docker run -d --name mysql_for_mineadmin --restart=always -p 3309:3306 -e MYSQL_USER='ComplexUser123' -e MYSQL_PASSWORD='G7h#9kLmP2@x' -e MYSQL_ROOT_PASSWORD='RootPass#8kLmP2@x' mysql:5.7")])]),_._v(" "),v("h3",{attrs:{id:"具体参数解释"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#具体参数解释"}},[_._v("#")]),_._v(" 具体参数解释")]),_._v(" "),v("ol",[v("li",[v("p",[_._v("docker run: 创建并运行一个新的容器")]),_._v(" "),v("p",[_._v("-d: (detach)")]),_._v(" "),v("p",[_._v("后台运行容器")]),_._v(" "),v("p",[_._v("不会占用当前终端")])]),_._v(" "),v("li",[v("p",[_._v("--name mysql02:")]),_._v(" "),v("p",[_._v("为容器指定名称,方便后续引用和管理")])]),_._v(" "),v("li",[v("p",[_._v("--restart=always:")]),_._v(" "),v("p",[_._v("容器自动重启策略,系统重启或容器崩溃时自动重启")]),_._v(" "),v("p",[_._v("可选值：")]),_._v(" "),v("p",[_._v("​\tno: 默认值，不自动重启")]),_._v(" "),v("p",[_._v("​\talways: 总是重启")]),_._v(" "),v("p",[_._v("​\tunless-stopped: 除非手动停止，否则总是重启")]),_._v(" "),v("p",[_._v("​\ton-failure: 非正常退出时重启")])]),_._v(" "),v("li",[v("p",[_._v("-p 3307:3306:")]),_._v(" "),v("p",[_._v("端口映射")]),_._v(" "),v("p",[_._v("左边3307是主机端口")]),_._v(" "),v("p",[_._v("右边3306是容器内部端口")])]),_._v(" "),v("li",[v("p",[_._v("-e MYSQL_ROOT_PASSWORD=123456:")]),_._v(" "),v("p",[_._v("设置环境变量\t指定MySQL root用户密码")])]),_._v(" "),v("li",[v("p",[_._v("mysql:5.7:")]),_._v(" "),v("p",[_._v("指定使用的镜像和版本")]),_._v(" "),v("p",[_._v("mysql是镜像名,5.7是版本标签")])])])])}),[],!1,null,null,null);v.default=e.exports}}]);