(self.webpackChunkhackatalk_website=self.webpackChunkhackatalk_website||[]).push([[1895],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),l=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(o.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||a;return t?n.createElement(f,s(s({ref:r},u),{},{components:t})):n.createElement(f,s({ref:r},u))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=d;var c={};for(var o in r)hasOwnProperty.call(r,o)&&(c[o]=r[o]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var l=2;l<a;l++)s[l]=t[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6144:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return o},default:function(){return u}});var n=t(2122),i=t(9756),a=(t(7294),t(3905)),s={id:"search-users",title:"Search Users",sidebar_label:"Searching users"},c={unversionedId:"client/search-users",id:"client/search-users",isDocsHomePage:!1,title:"Search Users",description:"SearchUser screen",source:"@site/docs/client/search-users.md",sourceDirName:"client",slug:"/client/search-users",permalink:"/docs/client/search-users",editUrl:"https://github.com/dooboolab/hackatalk/tree/master/website/docs/client/search-users.md",version:"current",sidebar_label:"Searching users",frontMatter:{id:"search-users",title:"Search Users",sidebar_label:"Searching users"},sidebar:"docs",previous:{title:"Integrate with backend",permalink:"/docs/client/integrate-with-backend"},next:{title:"Start direct messaging",permalink:"/docs/client/start-direct-messaging"}},o=[{value:"SearchUser screen",id:"searchuser-screen",children:[{value:"Searching Users",id:"searching-users",children:[]}]}],l={toc:o};function u(e){var r=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"searchuser-screen"},"SearchUser screen"),(0,a.kt)("img",{src:"https://miro.medium.com/max/287/1*EOsuX75bI_fGjp93Gbm_5Q.gif",width:"200"}),(0,a.kt)("p",null,"Users will be fetched in infinite scrollview. Relay style cursor pagination is applied in this implementation as written in ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/@dooboolab/relay-experimental-cursor-pagination-6a9e448d3146"},"medium blog"),"."),(0,a.kt)("h3",{id:"searching-users"},"Searching Users"),(0,a.kt)("p",null,"When searching users, you can just send ",(0,a.kt)("inlineCode",{parentName:"p"},"searchText")," argument to grapqhl ",(0,a.kt)("inlineCode",{parentName:"p"},"query")," and it will likey return the list of users who might be related."))}u.isMDXComponent=!0}}]);