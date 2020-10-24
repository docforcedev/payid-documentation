(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(2),a=n(6),o=(n(0),n(96)),i={id:"nginx-ssl-deploy",title:"Set Up NGINX Reverse Proxy and SSL",sidebar_label:"Set Up NGINX Reverse Proxy and SSL"},p={unversionedId:"nginx-ssl-deploy",id:"nginx-ssl-deploy",isDocsHomePage:!1,title:"Set Up NGINX Reverse Proxy and SSL",description:"After you set up a PayID server using your preferred deployment option, you can set up NGINX Reverse Proxy + SSL for load balancing and security.",source:"@site/docs/nginx-ssl-deploy.md",permalink:"/payid-documentation/review-apps/landing-page/aca845/nginx-ssl-deploy",editUrl:"https://github.com/payid-org/payid-documentation/tree/master/docs/nginx-ssl-deploy.md",sidebar_label:"Set Up NGINX Reverse Proxy and SSL",sidebar:"docs",previous:{title:"Deploy on AWS",permalink:"/payid-documentation/review-apps/landing-page/aca845/remote-deployment"},next:{title:"API Reference",permalink:"/payid-documentation/review-apps/landing-page/aca845/api-reference"}},c=[{value:"NGINX Reverse Proxy + SSL setup",id:"nginx-reverse-proxy--ssl-setup",children:[]}],s={rightToc:c};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"After you set up a PayID server using your preferred ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"/payid-documentation/review-apps/landing-page/aca845/intro-deploy"}),"deployment option"),", you can set up NGINX Reverse Proxy + SSL for load balancing and security."),Object(o.b)("h2",{id:"nginx-reverse-proxy--ssl-setup"},"NGINX Reverse Proxy + SSL setup"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Change the PayID server to run on port 8080 (default)."),Object(o.b)("li",{parentName:"ol"},"Set up a Server Block on NGINX for your domain, following ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04"}),"these instructions"),"."),Object(o.b)("li",{parentName:"ol"},"Install Certbot, as follows.",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"apt-get update\napt-get install software-properties-common\nadd-apt-repository ppa:certbot/certbot\napt-get update\napt-get install python-certbot-nginx\n"))),Object(o.b)("li",{parentName:"ol"},"Generate a certificate (choose to redirect)\n",Object(o.b)("inlineCode",{parentName:"li"},"certbot --nginx")),Object(o.b)("li",{parentName:"ol"},"Change the location parameter in the NGINX conf file to reverse proxy to the PayID server (running on port 8080):\n",Object(o.b)("inlineCode",{parentName:"li"},"try_files $uri $uri/ =404;"),"\nto:",Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-nginx"}),"proxy_pass http://127.0.0.1:8080;\nproxy_set_header Host $http_host;\n")),Object(o.b)("strong",{parentName:"li"},"Note:")," The second line is required to preserve the original URL, which is used to find the user.\n",Object(o.b)("strong",{parentName:"li"},"Note:")," You can expand your certificate to cover any subdomain used in a PayID using:\n",Object(o.b)("inlineCode",{parentName:"li"},"sudo certbot -d zochow.ski,pay.michael.zochow.ski,www.zochow.ski --expand")),Object(o.b)("li",{parentName:"ol"},"Restart NGINX.\n",Object(o.b)("inlineCode",{parentName:"li"},"sudo systemctl restart nginx")),Object(o.b)("li",{parentName:"ol"},"[Optional]"," Update the NGINX configuration that catches PayID headers and forwards them to the PayID server; otherwise, send these headers to the web server.")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," You will need to add additional proxy passing statements for each additional network supported, or otherwise use a generic regex to identify all PayID headers."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"sudo nano /etc/nginx/sites-available/<your-site>\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-nginx"}),'location / {\n   proxy_set_header Host $http_host;\n   # needed for CORS\n   add_header Access-Control-Allow-Origin *;\n   add_header Access-Control-Allow-Headers *;\n\n   # proxy passing needed for all supported networks\n   # modify port to the one used by your PayID server\n   if ($http_accept ~ "application/payid*") {\n         proxy_pass http://localhost:8080;\n   }\n   if ($http_accept ~ "application/xrpl-*") {\n         proxy_pass http://localhost:8080;\n   }\n\n   try_files $uri $uri/ =404;\n}\n')))}l.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return y}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},d=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(n),b=r,y=d["".concat(i,".").concat(b)]||d[b]||u[b]||o;return n?a.a.createElement(y,p(p({ref:t},s),{},{components:n})):a.a.createElement(y,p({ref:t},s))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=b;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);