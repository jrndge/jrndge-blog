(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{388:function(s,t,n){"use strict";n.r(t);var a=n(7),e=Object(a.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"docker启动emqx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#docker启动emqx"}},[s._v("#")]),s._v(" docker启动emqx")]),s._v(" "),t("p",[s._v("各种端口及连接信息见")]),s._v(" "),t("p",[s._v("物联网iot搭建MQTT对接/01.基于EMQX平台自建MQTT服务器.md")]),s._v(" "),t("p",[s._v("使用python进行对接")]),s._v(" "),t("div",{staticClass:"language-python line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" paho"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("mqtt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("client "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" mqtt\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" time\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" json\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MQTT服务器的配置")]),s._v("\nMQTT_BROKER "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"localhost"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# EMQX服务器地址")]),s._v("\nMQTT_PORT "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1883")]),s._v("          "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# MQTT默认端口")]),s._v("\nMQTT_TOPIC "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testtopic/#"')]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 订阅的主题")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 连接回调函数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on_connect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" userdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" flags"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" rc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" rc "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"成功连接到MQTT服务器"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("subscribe"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MQTT_TOPIC"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 订阅主题")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-interpolation"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"连接失败，返回码：')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("rc"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 接收消息的回调函数")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("on_message")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" userdata"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-interpolation"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"收到消息 主题:')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("topic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v(" 消息:")]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("msg"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("payload"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 订阅消息的方法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("subscribe_message")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    client "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" mqtt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("on_connect "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" on_connect\n    client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("on_message "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" on_message\n    \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("connect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("MQTT_BROKER"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" MQTT_PORT"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loop_start"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 启动循环，保持订阅状态")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" client\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" Exception "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-interpolation"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"连接错误：')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("None")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布消息的方法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("publish_message")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" topic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布消息")]),s._v("\n        result "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("publish"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("topic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        status "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" result"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" status "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-interpolation"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"成功发送消息到主题 ')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("topic"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("else")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-interpolation"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"发送消息失败"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" Exception "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string-interpolation"}},[t("span",{pre:!0,attrs:{class:"token string"}},[s._v('f"发布消息错误：')]),t("span",{pre:!0,attrs:{class:"token interpolation"}},[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")])]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"')])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("main")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建并启动订阅客户端")]),s._v("\n    client "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" subscribe_message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 等待连接建立")]),s._v("\n            time"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sleep"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            \n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布几条测试消息")]),s._v("\n            test_message "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"timestamp"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" time"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("time"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"value"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"测试消息"')]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n            \n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 发布到不同的子主题")]),s._v("\n            publish_message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testtopic/1"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" json"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("dumps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("test_message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            publish_message"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"testtopic/2"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello EMQX!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            \n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 保持程序运行")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("while")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n                time"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("sleep"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n                \n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" KeyboardInterrupt"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("print")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"程序终止"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("loop_stop"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n            client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("disconnect"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" __name__ "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"__main__"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    main"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br"),t("span",{staticClass:"line-number"},[s._v("53")]),t("br"),t("span",{staticClass:"line-number"},[s._v("54")]),t("br"),t("span",{staticClass:"line-number"},[s._v("55")]),t("br"),t("span",{staticClass:"line-number"},[s._v("56")]),t("br"),t("span",{staticClass:"line-number"},[s._v("57")]),t("br"),t("span",{staticClass:"line-number"},[s._v("58")]),t("br"),t("span",{staticClass:"line-number"},[s._v("59")]),t("br"),t("span",{staticClass:"line-number"},[s._v("60")]),t("br"),t("span",{staticClass:"line-number"},[s._v("61")]),t("br"),t("span",{staticClass:"line-number"},[s._v("62")]),t("br"),t("span",{staticClass:"line-number"},[s._v("63")]),t("br"),t("span",{staticClass:"line-number"},[s._v("64")]),t("br"),t("span",{staticClass:"line-number"},[s._v("65")]),t("br"),t("span",{staticClass:"line-number"},[s._v("66")]),t("br"),t("span",{staticClass:"line-number"},[s._v("67")]),t("br"),t("span",{staticClass:"line-number"},[s._v("68")]),t("br"),t("span",{staticClass:"line-number"},[s._v("69")]),t("br"),t("span",{staticClass:"line-number"},[s._v("70")]),t("br"),t("span",{staticClass:"line-number"},[s._v("71")]),t("br"),t("span",{staticClass:"line-number"},[s._v("72")]),t("br"),t("span",{staticClass:"line-number"},[s._v("73")]),t("br"),t("span",{staticClass:"line-number"},[s._v("74")]),t("br"),t("span",{staticClass:"line-number"},[s._v("75")]),t("br"),t("span",{staticClass:"line-number"},[s._v("76")]),t("br"),t("span",{staticClass:"line-number"},[s._v("77")]),t("br"),t("span",{staticClass:"line-number"},[s._v("78")]),t("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);