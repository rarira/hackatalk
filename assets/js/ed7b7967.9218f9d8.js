(self.webpackChunkhackatalk_website=self.webpackChunkhackatalk_website||[]).push([[7143],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return l},kt:function(){return d}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),f=u(t),d=a,v=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return t?n.createElement(v,o(o({ref:r},l),{},{components:t})):n.createElement(v,o({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=f;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},3919:function(e,r,t){"use strict";function n(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!n(e)}t.d(r,{b:function(){return n},Z:function(){return a}})},4996:function(e,r,t){"use strict";t.d(r,{C:function(){return i},Z:function(){return o}});var n=t(2263),a=t(3919);function i(){var e=(0,n.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,t=void 0===r?"/":r,i=e.url;return{withBaseUrl:function(e,r){return function(e,r,t,n){var i=void 0===n?{}:n,o=i.forcePrependBaseUrl,c=void 0!==o&&o,s=i.absolute,u=void 0!==s&&s;if(!t)return t;if(t.startsWith("#"))return t;if((0,a.b)(t))return t;if(c)return r+t;var l=t.startsWith(r)?t:r+t.replace(/^\//,"");return u?e+l:l}(i,t,e,r)}}}function o(e,r){return void 0===r&&(r={}),(0,i().withBaseUrl)(e,r)}},4121:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u},default:function(){return p}});var n=t(2122),a=t(9756),i=(t(7294),t(3905)),o=t(4996),c={id:"specification",title:"Specification",sidebar_label:"Specification"},s={unversionedId:"server/specification",id:"server/specification",isDocsHomePage:!1,title:"Specification",description:"Our development server is open for everyone in azure websites and we are mainly using graphql. You can checkout our graphql resolvers in playground. We opened our development server to share and improve HackaTalk publically.",source:"@site/docs/server/specification.md",sourceDirName:"server",slug:"/server/specification",permalink:"/docs/server/specification",editUrl:"https://github.com/dooboolab/hackatalk/tree/master/website/docs/server/specification.md",version:"current",sidebar_label:"Specification",frontMatter:{id:"specification",title:"Specification",sidebar_label:"Specification"},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/server/overview"},next:{title:"Channel",permalink:"/docs/server/channel"}},u=[{value:"Diagram",id:"diagram",children:[]}],l={toc:u};function p(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Our development server is open for everyone in ",(0,i.kt)("a",{parentName:"p",href:"https://hackatalk.azurewebsites.net"},"azure websites")," and we are mainly using graphql. You can checkout our graphql resolvers in ",(0,i.kt)("a",{parentName:"p",href:"https://hackatalk.azurewebsites.net/graphql"},"playground"),". We opened our development server to share and improve ",(0,i.kt)("inlineCode",{parentName:"p"},"HackaTalk")," publically."),(0,i.kt)("p",null,"We are using ",(0,i.kt)("a",{parentName:"p",href:"https://www.prisma.io"},"Prisma")," and ",(0,i.kt)("a",{parentName:"p",href:"https://nexus.js.org/docs/nexus-prisma"},"nexus")," to serve our resolvers."),(0,i.kt)("h3",{id:"diagram"},"Diagram"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"These diagrams are for those who want to understand this project's overall structure at a glance.")),(0,i.kt)("img",{src:(0,o.Z)("diagrams/server_specification.drawio.svg"),alt:"hacaktalk overall structure diagram"}))}p.isMDXComponent=!0}}]);