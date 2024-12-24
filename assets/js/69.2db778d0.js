(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{434:function(s,a,t){"use strict";t.r(a);var n=t(7),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"简单了解了一下cloudflare发现真的是个宝藏-还能免费申请网站-只需要到时间就去申请一下续费就可以了-兼职非常好"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#简单了解了一下cloudflare发现真的是个宝藏-还能免费申请网站-只需要到时间就去申请一下续费就可以了-兼职非常好"}},[s._v("#")]),s._v(" 简单了解了一下cloudflare发现真的是个宝藏,还能免费申请网站,只需要到时间就去申请一下续费就可以了,兼职非常好.")]),s._v(" "),a("p",[s._v("这是一个简单初步接受的文案,读来感觉非常受用,可以使用cloudflare来干很多的事情,本土网站备案时间真的太长了,太差劲了.")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://pigsty.io/zh/blog/cloud/cloudflare/",target:"_blank",rel:"noopener noreferrer"}},[s._v("https://pigsty.io/zh/blog/cloud/cloudflare/"),a("OutboundLink")],1)]),s._v(" "),a("h2",{attrs:{id:"使用github来部署一个简易的网站"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用github来部署一个简易的网站"}},[s._v("#")]),s._v(" 使用github来部署一个简易的网站")]),s._v(" "),a("p",[s._v("使用github来托管代码")]),s._v(" "),a("h3",{attrs:{id:"把github上的代码拉取到本地电脑进行开发然后推送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#把github上的代码拉取到本地电脑进行开发然后推送"}},[s._v("#")]),s._v(" 把github上的代码拉取到本地电脑进行开发然后推送")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"# simpleCode"')]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" README.md\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" init\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" README.md\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" commit "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-m")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"first commit"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" branch "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-M")]),s._v(" main\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" remote "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" origin git@github.com:jrndge/simpleCode.git\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" push "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-u")]),s._v(" origin main\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h3",{attrs:{id:"出现错误配置本地电脑到github上进行代码推送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#出现错误配置本地电脑到github上进行代码推送"}},[s._v("#")]),s._v(" 出现错误配置本地电脑到github上进行代码推送")]),s._v(" "),a("div",{staticClass:"language-sh line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1. 生成 SSH 密钥（如果还没有的话）")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 运行命令后一直按回车使用默认设置即可")]),s._v("\nssh-keygen "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-t")]),s._v(" ed25519 "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-C")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"你的邮箱地址"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 2. 启动 ssh-agent")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("eval")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"'),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("ssh-agent "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-s")]),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v('"')]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 3. 添加 SSH 密钥到 ssh-agent")]),s._v("\nssh-add ~/.ssh/id_ed25519\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 4. 查看并复制你的公钥")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" ~/.ssh/id_ed25519.pub\n\n需要复制前面ssh-ed25519  还有后面的邮箱,所有的字符串全部都有复制下来.\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br")])]),a("h2",{attrs:{id:"直接部署到网站就行了"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#直接部署到网站就行了"}},[s._v("#")]),s._v(" 直接部署到网站就行了")]),s._v(" "),a("h2",{attrs:{id:"这是什么网站经常能通过搜索引擎搜索到"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#这是什么网站经常能通过搜索引擎搜索到"}},[s._v("#")]),s._v(" 这是什么网站经常能通过搜索引擎搜索到")]),s._v(" "),a("p",[s._v("https://linux.do/c/welfare/36")])])}),[],!1,null,null,null);a.default=e.exports}}]);