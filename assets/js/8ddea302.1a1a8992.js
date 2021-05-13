(self.webpackChunkhackatalk_website=self.webpackChunkhackatalk_website||[]).push([[6546],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(t),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?o.createElement(h,i(i({ref:n},s),{},{components:t})):o.createElement(h,i({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},9081:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return s}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),i={id:"components",title:"Components",sidebar_label:"Components"},c={unversionedId:"client/components",id:"client/components",isDocsHomePage:!1,title:"Components",description:"Creating components",source:"@site/docs/client/components.md",sourceDirName:"client",slug:"/client/components",permalink:"/docs/client/components",editUrl:"https://github.com/dooboolab/hackatalk/tree/master/website/docs/client/components.md",version:"current",sidebar_label:"Components",frontMatter:{id:"components",title:"Components",sidebar_label:"Components"},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/client/installation"},next:{title:"Integrate with backend",permalink:"/docs/client/integrate-with-backend"}},l=[{value:"Creating components",id:"creating-components",children:[{value:"Using dooboo-cli",id:"using-dooboo-cli",children:[]}]},{value:"Types",id:"types",children:[{value:"Navigation",id:"navigation",children:[]},{value:"Screen",id:"screen",children:[]},{value:"Shared",id:"shared",children:[]}]}],p={toc:l};function s(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"creating-components"},"Creating components"),(0,a.kt)("p",null,"To create additional components to ",(0,a.kt)("inlineCode",{parentName:"p"},"HackaTalk"),", you can easily run ",(0,a.kt)("inlineCode",{parentName:"p"},"dooboo screen")," command. To do that you need to first install ",(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dooboo-cli"},"dooboo-cli"),"."),(0,a.kt)("h3",{id:"using-dooboo-cli"},"Using ",(0,a.kt)("a",{parentName:"h3",href:"https://www.npmjs.com/package/dooboo-cli"},"dooboo-cli")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dooboo-cli"},"dooboo-cli")," has been updated to ",(0,a.kt)("inlineCode",{parentName:"p"},"version 3")," in Dec 2019. You can read about it in the ",(0,a.kt)("a",{parentName:"p",href:"https://medium.com/dooboolab/announcing-dooboo-cli-v3-5c9fceeb2ac4"},"medium post"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://miro.medium.com/max/1260/1*Lc60i9R2zi7-xR0VZhESDg.png",alt:"dooboo-ui"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"You can see how easily you can create sample screens and tests files.")),(0,a.kt)("h2",{id:"types"},"Types"),(0,a.kt)("p",null,"We are organizing our main components into three different characteristcs which are ",(0,a.kt)("inlineCode",{parentName:"p"},"navigation"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"screen"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"shared"),"."),(0,a.kt)("h3",{id:"navigation"},"Navigation"),(0,a.kt)("p",null,"The navigation components are group of screen components."),(0,a.kt)("h3",{id:"screen"},"Screen"),(0,a.kt)("p",null,"The screen components are screen unit component which means that it fill up the device size."),(0,a.kt)("h3",{id:"shared"},"Shared"),(0,a.kt)("p",null,"The shared components are mostly reusable components that can be used everywhere. They are components like ",(0,a.kt)("inlineCode",{parentName:"p"},"Button"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"EditText"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Calendar")," and so on."))}s.isMDXComponent=!0}}]);