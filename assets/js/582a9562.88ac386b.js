(self.webpackChunkhackatalk_website=self.webpackChunkhackatalk_website||[]).push([[8905],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),h=a,f=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4376:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={id:"integrate-with-backend",title:"Integrate with backend",sidebar_label:"Integrate with backend"},c={unversionedId:"client/integrate-with-backend",id:"client/integrate-with-backend",isDocsHomePage:!1,title:"Integrate with backend",description:"Our server is hosted on azure websites and we are mainly using graphql. You can checkout our graphql resolver in playground. Our development server is opened for everyone who wants to understand how HackaTalk works.",source:"@site/docs/client/integrate-with-backend.md",sourceDirName:"client",slug:"/client/integrate-with-backend",permalink:"/docs/client/integrate-with-backend",editUrl:"https://github.com/dooboolab/hackatalk/tree/master/website/docs/client/integrate-with-backend.md",version:"current",sidebar_label:"Integrate with backend",frontMatter:{id:"integrate-with-backend",title:"Integrate with backend",sidebar_label:"Integrate with backend"},sidebar:"docs",previous:{title:"Components",permalink:"/docs/client/components"},next:{title:"Search Users",permalink:"/docs/client/search-users"}},l=[{value:"Graphql Client",id:"graphql-client",children:[]}],s={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Our server is hosted on ",(0,o.kt)("a",{parentName:"p",href:"https://hackatalk.azurewebsites.net"},"azure websites")," and we are mainly using graphql. You can checkout our graphql resolver in ",(0,o.kt)("a",{parentName:"p",href:"https://hackatalk.azurewebsites.net/graphql"},"playground"),". Our development server is opened for everyone who wants to understand how ",(0,o.kt)("inlineCode",{parentName:"p"},"HackaTalk")," works."),(0,o.kt)("h2",{id:"graphql-client"},"Graphql Client"),(0,o.kt)("p",null,"We are using ",(0,o.kt)("a",{parentName:"p",href:"https://relay.dev"},"Relay")," as our graphql client. Since we are only trying to use ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-intro.html"},"react-hook")," in our project, we're only considering using ",(0,o.kt)("inlineCode",{parentName:"p"},"relay-hook")," either which is current in ",(0,o.kt)("a",{parentName:"p",href:"https://relay.dev/docs/en/experimental/a-guided-tour-of-relay"},"relay experimental"),". Please do not get confused with ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/relay-tools/relay-hooks"},"relay-hooks")," which is different library."))}p.isMDXComponent=!0}}]);