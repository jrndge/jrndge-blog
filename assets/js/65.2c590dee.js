(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{430:function(a,s,t){"use strict";t.r(s);var r=t(7),e=Object(r.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"python降级步骤-从3-10-11到3-9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python降级步骤-从3-10-11到3-9"}},[a._v("#")]),a._v(" Python降级步骤：从3.10.11到3.9")]),a._v(" "),s("h2",{attrs:{id:"_1-备份重要数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-备份重要数据"}},[a._v("#")]),a._v(" 1. 备份重要数据")]),a._v(" "),s("ul",[s("li",[a._v("备份你的Python项目和重要数据。")])]),a._v(" "),s("h2",{attrs:{id:"_2-卸载当前python版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-卸载当前python版本"}},[a._v("#")]),a._v(" 2. 卸载当前Python版本")]),a._v(" "),s("ol",[s("li",[a._v("打开“控制面板” -> “程序和功能”")]),a._v(" "),s("li",[a._v("找到“Python 3.10.11”")]),a._v(" "),s("li",[a._v("右键点击选择“卸载”")]),a._v(" "),s("li",[a._v("等待卸载完成")])]),a._v(" "),s("h2",{attrs:{id:"_3-清理残留文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-清理残留文件"}},[a._v("#")]),a._v(" 3. 清理残留文件")]),a._v(" "),s("ol",[s("li",[a._v("删除Python安装目录："),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("C:\\Users\\AUSU\\AppData\\Local\\Programs\\Python\\Python310\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])]),a._v(" "),s("li",[a._v("清理Scripts目录（如果存在）："),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("C:\\Users\\AUSU\\AppData\\Local\\Programs\\Python\\Python310\\Scripts\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])]),a._v(" "),s("h2",{attrs:{id:"_4-下载并安装python-3-9"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-下载并安装python-3-9"}},[a._v("#")]),a._v(" 4. 下载并安装Python 3.9")]),a._v(" "),s("ol",[s("li",[a._v("访问Python官网下载页面："),s("a",{attrs:{href:"https://www.python.org/downloads/release/python-3913/",target:"_blank",rel:"noopener noreferrer"}},[a._v("Python 3.9.13"),s("OutboundLink")],1)]),a._v(" "),s("li",[a._v("选择下载“Windows installer (64-bit)”版本")]),a._v(" "),s("li",[a._v("运行安装程序")]),a._v(" "),s("li",[s("strong",[a._v("重要")]),a._v("：在安装界面勾选“Add Python 3.9 to PATH”")]),a._v(" "),s("li",[a._v("选择“Install Now”进行安装")])]),a._v(" "),s("h2",{attrs:{id:"_5-验证安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-验证安装"}},[a._v("#")]),a._v(" 5. 验证安装")]),a._v(" "),s("ol",[s("li",[a._v("打开新的命令提示符（cmd）")]),a._v(" "),s("li",[a._v("输入以下命令验证："),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("python "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 应该显示 Python 3.9.13")]),a._v("\n\npip "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--version")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 应该显示对应的pip版本")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br")])])])]),a._v(" "),s("h2",{attrs:{id:"_6-重新安装项目依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-重新安装项目依赖"}},[a._v("#")]),a._v(" 6. 重新安装项目依赖")]),a._v(" "),s("ol",[s("li",[a._v("进入你的项目目录")]),a._v(" "),s("li",[a._v("重新安装所需的包："),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("scrapy")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("2.5")]),a._v(".1\npip "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" scrapy-splash"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0.8")]),a._v(".0\npip "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("urllib3")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1.26")]),a._v(".6\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])])])]),a._v(" "),s("h2",{attrs:{id:"_7-更新环境变量-如果需要"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-更新环境变量-如果需要"}},[a._v("#")]),a._v(" 7. 更新环境变量（如果需要）")]),a._v(" "),s("ol",[s("li",[a._v("打开“系统属性” -> “环境变量”")]),a._v(" "),s("li",[a._v("在“系统变量”中找到“Path”")]),a._v(" "),s("li",[a._v("确保以下路径已添加："),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("C:\\Users\\AUSU\\AppData\\Local\\Programs\\Python\\Python39\\\nC:\\Users\\AUSU\\AppData\\Local\\Programs\\Python\\Python39\\Scripts\\\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])])]),a._v(" "),s("h2",{attrs:{id:"_8-测试项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_8-测试项目"}},[a._v("#")]),a._v(" 8. 测试项目")]),a._v(" "),s("ul",[s("li",[a._v("重新运行你的项目，确保一切正常："),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("scrapy crawl http_spider\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])]),a._v(" "),s("h2",{attrs:{id:"注意事项"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[a._v("#")]),a._v(" 注意事项")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("如果你使用了虚拟环境，建议重新创建虚拟环境：")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("python "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-m")]),a._v(" venv venv\n."),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("venv"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("Scripts"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("activate\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br")])])]),a._v(" "),s("li",[s("p",[a._v("如果安装过程中遇到权限问题，请以管理员身份运行安装程序")])]),a._v(" "),s("li",[s("p",[a._v("如果之前安装了其他Python相关工具（如Anaconda），可能需要额外配置")])]),a._v(" "),s("li",[s("p",[a._v("建议在操作前备份重要的项目文件和配置")])])]),a._v(" "),s("h2",{attrs:{id:"出现问题1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出现问题1"}},[a._v("#")]),a._v(" 出现问题1")]),a._v(" "),s("p",[a._v("AttributeError: 'SelectReactor' object has no attribute '_handleSignals'")]),a._v(" "),s("h2",{attrs:{id:"解决1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决1"}},[a._v("#")]),a._v(" 解决1")]),a._v(" "),s("p",[s("code",[a._v("pip uninstall Twisted")])]),a._v(" "),s("p",[s("code",[a._v("pip install Twisted==22.10.0")])]),a._v(" "),s("h2",{attrs:{id:"出现问题2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出现问题2"}},[a._v("#")]),a._v(" 出现问题2")]),a._v(" "),s("p",[a._v("KeyError: 'Spider not found: http_spider'")]),a._v(" "),s("h2",{attrs:{id:"解决2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决2"}},[a._v("#")]),a._v(" 解决2")]),a._v(" "),s("p",[a._v("使用命令查看有哪些爬虫的名称")]),a._v(" "),s("p",[s("code",[a._v("scrapy list")])]),a._v(" "),s("p",[a._v("在根目录下运行")]),a._v(" "),s("p",[a._v("scrapy crawl 加上有的名称")]),a._v(" "),s("h2",{attrs:{id:"出现错误3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出现错误3"}},[a._v("#")]),a._v(" 出现错误3")]),a._v(" "),s("p",[a._v("builtins.AttributeError: module 'OpenSSL.SSL' has no attribute 'SSLv3_METHOD'")]),a._v(" "),s("h2",{attrs:{id:"解决3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决3"}},[a._v("#")]),a._v(" 解决3")]),a._v(" "),s("p",[a._v("卸载")]),a._v(" "),s("p",[s("code",[a._v("pip uninstall pyOpenSSL")])]),a._v(" "),s("p",[a._v("安装")]),a._v(" "),s("p",[s("code",[a._v("pip install pyOpenSSL==19.1.0")])]),a._v(" "),s("p",[a._v("查看特定爬虫的详细信息")]),a._v(" "),s("p",[a._v("scrapy genspider -l")]),a._v(" "),s("h2",{attrs:{id:"出现错误4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#出现错误4"}},[a._v("#")]),a._v(" 出现错误4")]),a._v(" "),s("p",[a._v("AttributeError: module 'lib' has no attribute 'X509_V_FLAG_NOTIFY_POLICY'")]),a._v(" "),s("h2",{attrs:{id:"解决4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决4"}},[a._v("#")]),a._v(" 解决4")]),a._v(" "),s("p",[a._v("包的兼容性问题")]),a._v(" "),s("p",[s("code",[a._v("pip uninstall pyOpenSSL cryptography scrapy twisted service_identity")])]),a._v(" "),s("p",[s("code",[a._v("pip uninstall pyopenssl")])]),a._v(" "),s("h3",{attrs:{id:"安装cryptography旧版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装cryptography旧版本"}},[a._v("#")]),a._v(" 安装cryptography旧版本")]),a._v(" "),s("p",[a._v("pip install cryptography==36.0.2")]),a._v(" "),s("h3",{attrs:{id:"安装pyopenssl特定版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装pyopenssl特定版本"}},[a._v("#")]),a._v(" 安装pyOpenSSL特定版本")]),a._v(" "),s("p",[a._v("pip install pyOpenSSL==22.0.0")]),a._v(" "),s("h3",{attrs:{id:"安装其他依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装其他依赖"}},[a._v("#")]),a._v(" 安装其他依赖")]),a._v(" "),s("p",[a._v("pip install service_identity==21.1.0\npip install twisted==22.4.0\npip install scrapy==2.6.2")]),a._v(" "),s("h1",{attrs:{id:"终于成功了。运行没有报错。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#终于成功了。运行没有报错。"}},[a._v("#")]),a._v(" 终于成功了。运行没有报错。")]),a._v(" "),s("p",[a._v("scrapy list")]),a._v(" "),s("p",[a._v("scrapy crawl http")])])}),[],!1,null,null,null);s.default=e.exports}}]);