(self.webpackChunkhackatalk_website=self.webpackChunkhackatalk_website||[]).push([[737],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,g=f["".concat(c,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(g,p(p({ref:t},l),{},{components:r})):n.createElement(g,p({ref:t},l))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,p=new Array(o);p[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<o;s++)p[s]=r[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1462:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return c},default:function(){return l}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),p={slug:"setup-postgresql-prisma2",title:"Setup postgresql for prisma2",author:"hyochan",authorTitle:"dooboolab core team",authorURL:"https://github.com/hyochan",authorImageURL:"https://avatars1.githubusercontent.com/u/27461460?s=460&u=b5860875e26d33fd70fd210f4ea74f81cdf9d99b&v=4",authorTwitter:"dooboolab",tags:["prisma","setup"]},i={permalink:"/hackatalk/blog/setup-postgresql-prisma2",source:"@site/blog/2020-07-12-setup-postgresql-prisma2.md",title:"Setup postgresql for prisma2",description:"Here is how you can setup Postgresql in Prisma v2.",date:"2020-07-12T00:00:00.000Z",formattedDate:"July 12, 2020",tags:[{label:"prisma",permalink:"/hackatalk/blog/tags/prisma"},{label:"setup",permalink:"/hackatalk/blog/tags/setup"}],readingTime:.05,truncated:!1,nextItem:{title:"Integrate graphql client relay",permalink:"/hackatalk/blog/relay-integration"}},c=[],s={toc:c};function l(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://medium.com/dooboolab/setting-up-postgresql-for-prisma-v2-9d14586f3acc"},"Here")," is how you can setup ",(0,o.kt)("a",{parentName:"p",href:"https://www.postgresql.org"},"Postgresql")," in ",(0,o.kt)("a",{parentName:"p",href:"https://www.prisma.io"},"Prisma v2"),"."))}l.isMDXComponent=!0}}]);