(self.webpackChunkhackatalk_website=self.webpackChunkhackatalk_website||[]).push([[8703],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=u(r),m=a,b=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2018:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={slug:"relay-integration",title:"Integrate graphql client relay",author:"hyochan",authorTitle:"dooboolab core team",authorURL:"https://github.com/hyochan",authorImageURL:"https://avatars1.githubusercontent.com/u/27461460?s=460&u=b5860875e26d33fd70fd210f4ea74f81cdf9d99b&v=4",authorTwitter:"dooboolab",tags:["relay","integration"]},l={permalink:"/hackatalk/blog/relay-integration",source:"@site/blog/2020-06-24-integrate-relay.md",title:"Integrate graphql client relay",description:"Relay integration has been done. We are willing to provide more resolvers in our backend server for other contributors to enjoy same experience.",date:"2020-06-24T00:00:00.000Z",formattedDate:"June 24, 2020",tags:[{label:"relay",permalink:"/hackatalk/blog/tags/relay"},{label:"integration",permalink:"/hackatalk/blog/tags/integration"}],readingTime:.115,truncated:!1,prevItem:{title:"Setup postgresql for prisma2",permalink:"/hackatalk/blog/setup-postgresql-prisma2"},nextItem:{title:"Migrating server to Prisma2",permalink:"/hackatalk/blog/prisma2-migration"}},c=[],u={toc:c};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://medium.com/dooboolab/integrate-relay-hook-in-expo-app-bae12d50a130"},"Relay integration")," has been done. We are willing to provide more resolvers in our backend server for other contributors to enjoy same experience."))}p.isMDXComponent=!0}}]);