(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{406:function(e,t,s){"use strict";s.r(t);var a=s(7),v=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"通过宝塔的后端点击本地容器-看到那个容器之后创建容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过宝塔的后端点击本地容器-看到那个容器之后创建容器"}},[e._v("#")]),e._v(" 通过宝塔的后端点击本地容器,看到那个容器之后创建容器.")]),e._v(" "),t("p",[e._v("根据下方的截图进行点击操作")]),e._v(" "),t("p",[t("img",{attrs:{src:"D:%5Ccongyou%5Cvuefile%5Cvuepress-theme-vdoing%5Cdocs.vuepress%5Cpublic%5Cimg%5Cback%5Cimage-20241214134552006.png",alt:"image-20241214134552006"}})]),e._v(" "),t("p",[e._v("主要添加参数如下截图")]),e._v(" "),t("p",[e._v("首先是容器名称:daguohuyan")]),e._v(" "),t("p",[e._v("镜像因为是通过镜像创建的所以不需要选择.")]),e._v(" "),t("p",[e._v("主要是端口号,要根据代码里面的server来看端口号,本地端口和容器里面的端口.")]),e._v(" "),t("p",[e._v("下面的网络要选择hyperf-skeleton  这样才能访问")]),e._v(" "),t("p",[e._v("然后是本地目录和挂载容器卷因为gitee上忽略了env文件,所以要手动上传env文件")]),e._v(" "),t("p",[e._v("贴一个env问价的配置信息")]),e._v(" "),t("div",{staticClass:"language-env line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[t("img",{attrs:{src:"D:%5Ccongyou%5Cvuefile%5Cvuepress-theme-vdoing%5Cdocs.vuepress%5Cpublic%5Cimg%5Cback%5Cimage-20241214134934568.png",alt:"image-20241214134934568"}})]),e._v(" "),t("h2",{attrs:{id:"更新线上的代码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#更新线上的代码"}},[e._v("#")]),e._v(" 更新线上的代码")]),e._v(" "),t("p",[e._v("本地测试好代码后,把代码推送到gitee上")]),e._v(" "),t("p",[e._v("然后进入到容器的目录下面拉取代码")]),e._v(" "),t("p",[e._v("git pull")]),e._v(" "),t("p",[e._v("然后再点击重启容器")]),e._v(" "),t("p",[e._v("通过apifox就能访问到接口地址了")]),e._v(" "),t("p",[t("img",{attrs:{src:"D:%5Ccongyou%5Cvuefile%5Cvuepress-theme-vdoing%5Cdocs.vuepress%5Cpublic%5Cimg%5Cback%5Cimage-20241214141204206.png",alt:"image-20241214141204206"}})]),e._v(" "),t("p",[e._v("进入到对应目录后还要找到映射的目录")]),e._v(" "),t("p",[e._v("然后在目录的终端内使用git pull")]),e._v(" "),t("p",[t("img",{attrs:{src:"D:%5Ccongyou%5Cvuefile%5Cvuepress-theme-vdoing%5Cdocs.vuepress%5Cpublic%5Cimg%5Cback%5Cimage-20241214141334218.png",alt:"image-20241214141334218"}})]),e._v(" "),t("h2",{attrs:{id:"使用阿里云的mqtt"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用阿里云的mqtt"}},[e._v("#")]),e._v(" 使用阿里云的mqtt")]),e._v(" "),t("p",[e._v("最开始官方推荐的使用这个")]),e._v(" "),t("div",{staticClass:"language-commonlisp line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("composer require php-mqtt/client\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br")])]),t("p",[e._v("里面使用到的参数")]),e._v(" "),t("p",[e._v("在下面这个链接里面找")]),e._v(" "),t("p",[t("a",{attrs:{href:"https://help.aliyun.com/zh/iot/user-guide/manage-the-endpoint-of-an-instance?spm=a2c4g.11186623.0.0.5af8b581vlEzxL#task-1545804",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://help.aliyun.com/zh/iot/user-guide/manage-the-endpoint-of-an-instance?spm=a2c4g.11186623.0.0.5af8b581vlEzxL#task-1545804"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("跑起来之后发现不兼容")]),e._v(" "),t("p",[e._v("composer require stomp-php/stomp-php:^5.0")])])}),[],!1,null,null,null);t.default=v.exports}}]);