(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{387:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"仓库地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仓库地址"}},[s._v("#")]),s._v(" 仓库地址")]),s._v(" "),a("h3",{attrs:{id:"django-vue-admin后台基础版"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#django-vue-admin后台基础版"}},[s._v("#")]),s._v(" django-vue-admin后台基础版")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://gitee.com/liqianglog/django-vue-admin#%E6%BA%90%E7%A0%81%E5%9C%B0%E5%9D%80",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://gitee.com/liqianglog/django-vue-admin#%E6%BA%90%E7%A0%81%E5%9C%B0%E5%9D%80"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"归档后的后台地址"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#归档后的后台地址"}},[s._v("#")]),s._v(" 归档后的后台地址")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://gitee.com/huge-dream/django-vue3-admin",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://gitee.com/huge-dream/django-vue3-admin"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"使用docker运行"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用docker运行"}},[s._v("#")]),s._v(" 使用docker运行")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 先安装docker-compose (自行百度安装),执行此命令等待安装，如有使用celery插件请打开docker-compose.yml中celery 部分注释")]),s._v("\ndocker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("compose up "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 一次性拉取失败可以单个拉取")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取nginx镜像")]),s._v("\ndocker pull nginx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("alpine\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取mysql镜像 ")]),s._v("\ndocker pull mysql"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8.0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取redis镜像")]),s._v("\ndocker pull redis"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.2")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".6")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("alpine\n    运行失败了"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("因为设定的node"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("16.19")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("alpine的版本不对\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 初始化后端数据(第一次执行即可)")]),s._v("\ndocker "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exec")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("ti dvadmin3"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("django bash\npython manage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py makemigrations \npython manage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py migrate\npython manage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py init_area\npython manage"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("py init\nexit\n\n前端地址：http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),s._v("\n后端地址：http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("//")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("127.0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".0")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v(".1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("8080")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v("api\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在服务器上请把127.0.0.1 换成自己公网ip")]),s._v("\n账号：superadmin 密码：admin123456\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# docker-compose 停止")]),s._v("\ndocker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("compose down\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  docker-compose 重启")]),s._v("\ndocker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("compose restart\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  docker-compose 启动时重新进行 build")]),s._v("\ndocker"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("compose up "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("d "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("build\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);