(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{393:function(s,n,a){"use strict";a.r(n);var e=a(7),r=Object(e.a)({},(function(){var s=this,n=s._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h2",{attrs:{id:"官方的包拉下来-主要需要修改的就是dockerfile文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#官方的包拉下来-主要需要修改的就是dockerfile文件"}},[s._v("#")]),s._v(" 官方的包拉下来,主要需要修改的就是dockerfile文件")]),s._v(" "),n("div",{staticClass:"language-dockerfile line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-dockerfile"}},[n("code",[s._v('version: \'3\'\nservices:\n  hyperf:\n    build:\n      dockerfile: Dockerfile\n      context: .\n    restart: always\n    environment:\n      - "TIMEZONE=Asia/Shanghai"\n      - "APP_NAME=MineAdmin"\n    working_dir: "/opt/www"\n    volumes:\n      - ./:/opt/www\n    entrypoint: ["php", "watch", "-c"]\n    ports:\n      - "9599:9501"\n  mysql:\n    image: mysql:5.7\n    restart: always\n    environment:\n      MYSQL_ROOT_PASSWORD: root\n      MYSQL_DATABASE: Work@Play7\n      MYSQL_ROOT_HOST: \'%\'  \n    ports:\n      - "3306:3306"\n  redis:\n    image: redis:alpine\n    restart: always\n    ports:\n      - "6379:6379"\n  frontend:\n    build:\n      context: ./web\n      args:\n        MINE_NODE_ENV: production\n        NPM_REGISTRY: https://registry.npmmirror.com\n        PNPM_REGISTRY: https://registry.npmmirror.com\n    restart: always\n    ports:\n      - "80:80"\n')])]),s._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[s._v("1")]),n("br"),n("span",{staticClass:"line-number"},[s._v("2")]),n("br"),n("span",{staticClass:"line-number"},[s._v("3")]),n("br"),n("span",{staticClass:"line-number"},[s._v("4")]),n("br"),n("span",{staticClass:"line-number"},[s._v("5")]),n("br"),n("span",{staticClass:"line-number"},[s._v("6")]),n("br"),n("span",{staticClass:"line-number"},[s._v("7")]),n("br"),n("span",{staticClass:"line-number"},[s._v("8")]),n("br"),n("span",{staticClass:"line-number"},[s._v("9")]),n("br"),n("span",{staticClass:"line-number"},[s._v("10")]),n("br"),n("span",{staticClass:"line-number"},[s._v("11")]),n("br"),n("span",{staticClass:"line-number"},[s._v("12")]),n("br"),n("span",{staticClass:"line-number"},[s._v("13")]),n("br"),n("span",{staticClass:"line-number"},[s._v("14")]),n("br"),n("span",{staticClass:"line-number"},[s._v("15")]),n("br"),n("span",{staticClass:"line-number"},[s._v("16")]),n("br"),n("span",{staticClass:"line-number"},[s._v("17")]),n("br"),n("span",{staticClass:"line-number"},[s._v("18")]),n("br"),n("span",{staticClass:"line-number"},[s._v("19")]),n("br"),n("span",{staticClass:"line-number"},[s._v("20")]),n("br"),n("span",{staticClass:"line-number"},[s._v("21")]),n("br"),n("span",{staticClass:"line-number"},[s._v("22")]),n("br"),n("span",{staticClass:"line-number"},[s._v("23")]),n("br"),n("span",{staticClass:"line-number"},[s._v("24")]),n("br"),n("span",{staticClass:"line-number"},[s._v("25")]),n("br"),n("span",{staticClass:"line-number"},[s._v("26")]),n("br"),n("span",{staticClass:"line-number"},[s._v("27")]),n("br"),n("span",{staticClass:"line-number"},[s._v("28")]),n("br"),n("span",{staticClass:"line-number"},[s._v("29")]),n("br"),n("span",{staticClass:"line-number"},[s._v("30")]),n("br"),n("span",{staticClass:"line-number"},[s._v("31")]),n("br"),n("span",{staticClass:"line-number"},[s._v("32")]),n("br"),n("span",{staticClass:"line-number"},[s._v("33")]),n("br"),n("span",{staticClass:"line-number"},[s._v("34")]),n("br"),n("span",{staticClass:"line-number"},[s._v("35")]),n("br"),n("span",{staticClass:"line-number"},[s._v("36")]),n("br"),n("span",{staticClass:"line-number"},[s._v("37")]),n("br"),n("span",{staticClass:"line-number"},[s._v("38")]),n("br"),n("span",{staticClass:"line-number"},[s._v("39")]),n("br"),n("span",{staticClass:"line-number"},[s._v("40")]),n("br")])]),n("h2",{attrs:{id:"启动命令"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#启动命令"}},[s._v("#")]),s._v(" 启动命令")]),s._v(" "),n("p",[n("code",[s._v("docker-compose up -d")])]),s._v(" "),n("p",[s._v("hyperf项目名称")]),s._v(" "),n("p",[s._v("jiuaiquishuiyin-hyperf-1")]),s._v(" "),n("h3",{attrs:{id:"重新安装vender"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#重新安装vender"}},[s._v("#")]),s._v(" 重新安装vender")]),s._v(" "),n("p",[n("code",[s._v("composer install -vvv")])]),s._v(" "),n("p",[s._v("数据表迁移")]),s._v(" "),n("p",[n("code",[s._v("php bin/hyperf.php migrate")])]),s._v(" "),n("p",[s._v("数据库填充")]),s._v(" "),n("p",[n("code",[s._v("php bin/hyperf.php db:seed")])]),s._v(" "),n("p",[s._v("启动前端后默认登陆密码是admin    123456")]),s._v(" "),n("p",[s._v("修改后的用户名为admin  密码为admin123456")])])}),[],!1,null,null,null);n.default=r.exports}}]);