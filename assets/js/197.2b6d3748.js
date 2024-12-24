(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{562:function(e,n,t){"use strict";t.r(n);var s=t(7),_=Object(s.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h2",{attrs:{id:"需求分析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#需求分析"}},[e._v("#")]),e._v(" 需求分析")]),e._v(" "),n("p",[e._v("因为使用宝塔的Nginx创建网站,我创建一个网站使用的宝塔上安装的Nginx,那么我再 创建一个网站的时候,就会出现各种情况,那么我重启失败的话就会影响别的网站")]),e._v(" "),n("p",[e._v("所以我希望能使用docker进行隔离,每一个网站都有自己的Nginx")]),e._v(" "),n("p",[e._v("相互之间互不影响.")]),e._v(" "),n("h2",{attrs:{id:"首先创建第一个网站"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#首先创建第一个网站"}},[e._v("#")]),e._v(" 首先创建第一个网站")]),e._v(" "),n("h3",{attrs:{id:"一、创建项目目录结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、创建项目目录结构"}},[e._v("#")]),e._v(" 一、创建项目目录结构")]),e._v(" "),n("p",[e._v("为第一个网站创建专门的目录")]),e._v(" "),n("p",[n("code",[e._v("mkdir -p ~/qinglong-nginx/{conf.d,ssl,logs}")])]),e._v(" "),n("h3",{attrs:{id:"二、创建nginx配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、创建nginx配置文件"}},[e._v("#")]),e._v(" 二、创建Nginx配置文件")]),e._v(" "),n("p",[n("code",[e._v("vi ~/qinglong-nginx/conf.d/qinglong.conf")])]),e._v(" "),n("p",[e._v("写入以下配置：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("server {\n    listen 80;\n    server_name qinglong.cqzhz.com;\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    listen 443 ssl;\n    server_name qinglong.cqzhz.com;\n# SSL配置\nssl_certificate /etc/nginx/ssl/qinglong.cqzhz.com.pem;\nssl_certificate_key /etc/nginx/ssl/qinglong.cqzhz.com.key;\nssl_session_timeout 5m;\nssl_protocols TLSv1.2 TLSv1.3;\nssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;\nssl_prefer_server_ciphers on;\n\n# 反向代理配置\nlocation / {\n    proxy_pass http://127.0.0.1:5885;\n    proxy_set_header Host $host;\n    proxy_set_header X-Real-IP $remote_addr;\n    proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n    proxy_set_header X-Forwarded-Proto $scheme;\n}\n\n# 日志配置\naccess_log /var/log/nginx/qinglong.access.log;\nerror_log /var/log/nginx/qinglong.error.log;}\n")])])]),n("h3",{attrs:{id:"三、申请ssl证书"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、申请ssl证书"}},[e._v("#")]),e._v(" 三、申请SSL证书")]),e._v(" "),n("p",[e._v("我是contos系统,如果你们是别的系统,请自行变化命令")]),e._v(" "),n("ol",[n("li",[e._v("首先安装必要的依赖")])]),e._v(" "),n("p",[e._v("​\t"),n("code",[e._v("yum install python3-pip")])]),e._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[e._v("使用pip3安装certbot")])]),e._v(" "),n("p",[e._v("​\t"),n("code",[e._v("pip3 install certbot")])]),e._v(" "),n("p",[n("em",[e._v("# 暂时停止可能占用80端口的服务")]),e._v(" 安装之间的操作")]),e._v(" "),n("p",[e._v("docker stop $(docker ps -q)")]),e._v(" "),n("p",[e._v("3.开始安装证书")]),e._v(" "),n("p",[n("code",[e._v("certbot certonly --standalone")])]),e._v(" "),n("p",[e._v("然后依次输入自己的邮箱和域名")]),e._v(" "),n("p",[e._v("最后就会得到这个成功的提示")]),e._v(" "),n("p",[e._v("4.成功的结果")]),e._v(" "),n("p",[e._v("Successfully received certificate.\nCertificate is saved at: /etc/letsencrypt/live/qinglong.cqzhz.com/fullchain.pem\nKey is saved at:         /etc/letsencrypt/live/qinglong.cqzhz.com/privkey.pem")]),e._v(" "),n("p",[e._v("把得到的证书复制到对应的文件夹下面")]),e._v(" "),n("p",[e._v("5.复制证书到nginx ssl目录")]),e._v(" "),n("p",[e._v("cp /etc/letsencrypt/live/qinglong.cqzhz.com/fullchain.pem ~/qinglong-nginx/ssl/qinglong.cqzhz.com.pem")]),e._v(" "),n("p",[e._v("cp /etc/letsencrypt/live/qinglong.cqzhz.com/privkey.pem ~/qinglong-nginx/ssl/qinglong.cqzhz.com.key")]),e._v(" "),n("p",[e._v("6.重启之前停止的服务")]),e._v(" "),n("p",[e._v("docker start $(docker ps -a -q)")]),e._v(" "),n("h3",{attrs:{id:"四、创建并运行nginx容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、创建并运行nginx容器"}},[e._v("#")]),e._v(" 四、创建并运行Nginx容器")]),e._v(" "),n("p",[e._v("docker run -d --name nginx-qinglong --restart=always  --network host  -v ~/qinglong-nginx/conf.d:/etc/nginx/conf.d  -v ~/qinglong-nginx/ssl:/etc/nginx/ssl -v ~/qinglong-nginx/logs:/var/log/nginx nginx")]),e._v(" "),n("p",[e._v("至此访问域名就能得到一个https域名的网站了.")]),e._v(" "),n("h3",{attrs:{id:"五、检查和测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、检查和测试"}},[e._v("#")]),e._v(" 五、检查和测试")]),e._v(" "),n("p",[e._v("查看容器状态")]),e._v(" "),n("p",[n("code",[e._v("docker ps | grep nginx-qinglong")])]),e._v(" "),n("h3",{attrs:{id:"六、设置证书自动续期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、设置证书自动续期"}},[e._v("#")]),e._v(" 六、设置证书自动续期")]),e._v(" "),n("p",[n("code",[e._v("vi ~/qinglong-nginx/renew-cert.sh")])]),e._v(" "),n("p",[e._v("粘贴以下全部内容")]),e._v(" "),n("p",[e._v("`certbot renew")]),e._v(" "),n("p",[e._v("cp /etc/letsencrypt/live/qinglong.cqzhz.com/fullchain.pem ~/qinglong-nginx/ssl/qinglong.cqzhz.com.pem")]),e._v(" "),n("p",[e._v("cp /etc/letsencrypt/live/qinglong.cqzhz.com/privkey.pem ~/qinglong-nginx/ssl/qinglong.cqzhz.com.key")]),e._v(" "),n("p",[e._v("docker exec nginx-qinglong nginx -s reload`")]),e._v(" "),n("p",[e._v("添加执行权限：")]),e._v(" "),n("p",[n("code",[e._v("chmod +x ~/qinglong-nginx/renew-cert.sh")])]),e._v(" "),n("p",[e._v("添加到定时任务：")]),e._v(" "),n("p",[e._v("首先执行")]),e._v(" "),n("p",[n("code",[e._v("crontab -e")])]),e._v(" "),n("p",[e._v("然后粘贴内容:")]),e._v(" "),n("p",[e._v("`"),n("em",[e._v("# 添加以下行（每月1日凌晨2点执行）")])]),e._v(" "),n("p",[e._v("0 2 1 * * /root/qinglong-nginx/renew-cert.sh`")]),e._v(" "),n("h3",{attrs:{id:"七、新增网站配置"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#七、新增网站配置"}},[e._v("#")]),e._v(" 七、新增网站配置")]),e._v(" "),n("h4",{attrs:{id:"_1-创建项目目录结构"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-创建项目目录结构"}},[e._v("#")]),e._v(" 1. 创建项目目录结构")]),e._v(" "),n("p",[e._v("为gotify网站创建专门的目录：")]),e._v(" "),n("p",[n("code",[e._v("mkdir -p ~/gotify-nginx/{conf.d,ssl,logs}")])]),e._v(" "),n("h4",{attrs:{id:"_2-创建nginx配置文件"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建nginx配置文件"}},[e._v("#")]),e._v(" 2. 创建Nginx配置文件")]),e._v(" "),n("p",[n("code",[e._v("vi ~/gotify-nginx/conf.d/gotify.conf")])]),e._v(" "),n("p",[e._v("写入以下配置：")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",[n("code",[e._v("server {\n    listen 80;\n    server_name gotify.cqzhz.com;\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    listen 443 ssl;\n    server_name gotify.cqzhz.com;\n    \n    # SSL配置\n    ssl_certificate /etc/nginx/ssl/gotify.cqzhz.com.pem;\n    ssl_certificate_key /etc/nginx/ssl/gotify.cqzhz.com.key;\n    ssl_session_timeout 5m;\n    ssl_protocols TLSv1.2 TLSv1.3;\n    ssl_ciphers ECDHE-RSA-AES128-GCM-SHA256:HIGH:!aNULL:!MD5:!RC4:!DHE;\n    ssl_prefer_server_ciphers on;\n    \n    # 反向代理配置\n    location / {\n        proxy_pass http://127.0.0.1:8358;\n        proxy_set_header Host $host;\n        proxy_set_header X-Real-IP $remote_addr;\n        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto $scheme;\n    }\n    \n    # 日志配置\n    access_log /var/log/nginx/gotify.access.log;\n    error_log /var/log/nginx/gotify.error.log;\n}\n")])])]),n("h4",{attrs:{id:"_3-申请ssl证书"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_3-申请ssl证书"}},[e._v("#")]),e._v(" 3. 申请SSL证书")]),e._v(" "),n("p",[n("em",[e._v("# 暂时停止所有容器")])]),e._v(" "),n("p",[n("code",[e._v("docker stop $(docker ps -q)")])]),e._v(" "),n("p",[n("em",[e._v("# 申请证书")])]),e._v(" "),n("p",[n("code",[e._v("certbot certonly --standalone -d gotify.cqzhz.com")])]),e._v(" "),n("p",[n("em",[e._v("# 复制证书到nginx ssl目录")])]),e._v(" "),n("p",[n("code",[e._v("cp /etc/letsencrypt/live/gotify.cqzhz.com/fullchain.pem ~/gotify-nginx/ssl/gotify.cqzhz.com.pem")])]),e._v(" "),n("p",[n("code",[e._v("cp /etc/letsencrypt/live/gotify.cqzhz.com/privkey.pem ~/gotify-nginx/ssl/gotify.cqzhz.com.key")])]),e._v(" "),n("p",[n("em",[e._v("# 重启之前的容器")])]),e._v(" "),n("p",[n("code",[e._v("docker start $(docker ps -a -q)")])]),e._v(" "),n("h4",{attrs:{id:"_4-创建并运行nginx容器"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建并运行nginx容器"}},[e._v("#")]),e._v(" 4. 创建并运行Nginx容器")]),e._v(" "),n("p",[n("code",[e._v("docker run -d --name nginx-gotify --restart=always --network host -v ~/gotify-nginx/conf.d:/etc/nginx/conf.d -v ~/gotify-nginx/ssl:/etc/nginx/ssl -v ~/gotify-nginx/logs:/var/log/nginx nginx")])]),e._v(" "),n("h4",{attrs:{id:"_5-检查和测试"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_5-检查和测试"}},[e._v("#")]),e._v(" 5. 检查和测试")]),e._v(" "),n("p",[e._v("查看容器状态：")]),e._v(" "),n("p",[n("code",[e._v("docker ps | grep nginx-gotify")])]),e._v(" "),n("h4",{attrs:{id:"_6-设置证书自动续期"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_6-设置证书自动续期"}},[e._v("#")]),e._v(" 6. 设置证书自动续期")]),e._v(" "),n("p",[e._v("创建续期脚本：")]),e._v(" "),n("p",[n("code",[e._v("vi ~/gotify-nginx/renew-cert.sh")])]),e._v(" "),n("p",[e._v("粘贴以下内容：")]),e._v(" "),n("p",[n("code",[e._v("#!/bin/bash certbot renew cp /etc/letsencrypt/live/gotify.cqzhz.com/fullchain.pem ~/gotify-nginx/ssl/gotify.cqzhz.com.pem cp /etc/letsencrypt/live/gotify.cqzhz.com/privkey.pem ~/gotify-nginx/ssl/gotify.cqzhz.com.key docker exec nginx-gotify nginx -s reload")])]),e._v(" "),n("p",[e._v("添加执行权限：")]),e._v(" "),n("p",[n("code",[e._v("chmod +x ~/gotify-nginx/renew-cert.sh")])]),e._v(" "),n("p",[e._v("添加到定时任务：")]),e._v(" "),n("p",[n("code",[e._v("crontab -e")])]),e._v(" "),n("p",[e._v("然后粘贴内容：")]),e._v(" "),n("p",[n("code",[e._v("# 添加以下行（每月1日凌晨2点执行） 0 2 1 * * /root/gotify-nginx/renew-cert.sh")])]),e._v(" "),n("p",[e._v("至此，新网站 gotify.cqzhz.com 的配置就完成了。请确保：")]),e._v(" "),n("ol",[n("li",[e._v("域名已正确解析到服务器IP")]),e._v(" "),n("li",[e._v("gotify服务(8358端口)已经正常运行")]),e._v(" "),n("li",[e._v("80和443端口未被占用")]),e._v(" "),n("li",[e._v("证书申请成功并正确复制到指定目录")])])])}),[],!1,null,null,null);n.default=_.exports}}]);