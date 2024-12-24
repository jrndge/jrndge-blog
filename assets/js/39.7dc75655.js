(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{404:function(s,t,a){"use strict";a.r(t);var n=a(7),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"创建文件夹"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建文件夹"}},[s._v("#")]),s._v(" 创建文件夹")]),s._v(" "),t("p",[s._v("mqtt")]),s._v(" "),t("p",[s._v("在mqtt下面再继续创建三个文件夹")]),s._v(" "),t("p",[s._v("config")]),s._v(" "),t("p",[s._v("data")]),s._v(" "),t("p",[s._v("log")]),s._v(" "),t("h2",{attrs:{id:"在config文件夹下面创建一个文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#在config文件夹下面创建一个文件"}},[s._v("#")]),s._v(" 在config文件夹下面创建一个文件")]),s._v(" "),t("p",[s._v("mosquitto.conf")]),s._v(" "),t("p",[s._v("文件内容为;")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("persistence true\npersistence_location /mosquitto/data\nlog_dest file /mosquitto/log/mosquitto.log\nlog_type all\nlog_timestamp true\n\n# MQTT 默认端口\nlistener 1883\nallow_anonymous false\n\n# WebSocket 支持（可选）\nlistener 9001\nprotocol websockets\n\n# 密码文件\npassword_file /mosquitto/config/pwfile\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h2",{attrs:{id:"开始创建容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#开始创建容器"}},[s._v("#")]),s._v(" 开始创建容器")]),s._v(" "),t("p",[s._v("docker run -d --name mqtt-broker --restart always -p 1883:1883 -p 9001:9001 -v F:/mqtt/config:/mosquitto/config -v F:/mqtt/data:/mosquitto/data -v F:/mqtt/log:/mosquitto/log eclipse-mosquitto")]),s._v(" "),t("h2",{attrs:{id:"创建-mqtt-用户和密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-mqtt-用户和密码"}},[s._v("#")]),s._v(" 创建 MQTT 用户和密码：")]),s._v(" "),t("div",{staticClass:"language-dockerfile line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入容器")]),s._v("\ndocker exec -it mqtt-broker sh\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建密码文件")]),s._v("\nmosquitto_passwd -c /mosquitto/config/pwfile iot_user\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 按提示输入密码（比如：iot123456  Dream&Big5）")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 退出容器")]),s._v("\nexit\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启容器")]),s._v("\ndocker restart mqtt-broker\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);