(self.webpackChunkhackatalk_website=self.webpackChunkhackatalk_website||[]).push([[4252],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=c(r),m=o,g=f["".concat(s,".").concat(m)]||f[m]||l[m]||a;return r?n.createElement(g,p(p({ref:t},u),{},{components:r})):n.createElement(g,p({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},6067:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),p={slug:"setup-postgresql-prisma2",title:"Setup postgresql for prisma2",author:"hyochan",authorTitle:"dooboolab core team",authorURL:"https://github.com/hyochan",authorImageURL:"https://avatars1.githubusercontent.com/u/27461460?s=460&u=b5860875e26d33fd70fd210f4ea74f81cdf9d99b&v=4",authorTwitter:"dooboolab",tags:["prisma","setup"]},i={permalink:"/blog/setup-postgresql-prisma2",source:"@site/blog/2020-07-12-setup-postgresql-prisma2.md",title:"Setup postgresql for prisma2",description:"Here is how you can setup Postgresql in Prisma v2.",date:"2020-07-12T00:00:00.000Z",formattedDate:"July 12, 2020",tags:[{label:"prisma",permalink:"/blog/tags/prisma"},{label:"setup",permalink:"/blog/tags/setup"}],readingTime:.05,truncated:!1,nextItem:{title:"Integrate graphql client relay",permalink:"/blog/relay-integration"}},s=[],c={toc:s};function u(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://medium.com/dooboolab/setting-up-postgresql-for-prisma-v2-9d14586f3acc"},"Here")," is how you can setup ",(0,a.kt)("a",{parentName:"p",href:"https://www.postgresql.org"},"Postgresql")," in ",(0,a.kt)("a",{parentName:"p",href:"https://www.prisma.io"},"Prisma v2"),"."))}u.isMDXComponent=!0}}]);