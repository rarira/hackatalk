(self.webpackChunkhackatalk_website=self.webpackChunkhackatalk_website||[]).push([[5525],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return m},kt:function(){return u}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),h=p(n),u=a,b=h["".concat(s,".").concat(u)]||h[u]||c[u]||i;return n?r.createElement(b,o(o({ref:t},m),{},{components:n})):r.createElement(b,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9162:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return l},toc:function(){return s},default:function(){return m}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o={id:"membership",title:"Membership",sidebar_label:"Membership"},l={unversionedId:"server/membership",id:"server/membership",isDocsHomePage:!1,title:"Membership",description:"As described in Channel, Membership model is a single table inheritance. Only one member(user) in the channel will have the authorization to grant other user's permission to the Channel. This member will be referred to as the owner.",source:"@site/docs/server/membership.md",sourceDirName:"server",slug:"/server/membership",permalink:"/hackatalk/docs/server/membership",editUrl:"https://github.com/dooboolab/hackatalk/tree/master/website/docs/server/membership.md",version:"current",sidebar_label:"Membership",frontMatter:{id:"membership",title:"Membership",sidebar_label:"Membership"},sidebar:"docs",previous:{title:"Channel",permalink:"/hackatalk/docs/server/channel"},next:{title:"Message",permalink:"/hackatalk/docs/server/message"}},s=[{value:"Types of membership",id:"types-of-membership",children:[]}],p={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"As described in ",(0,i.kt)("a",{parentName:"p",href:"docs/server/channel"},"Channel"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Membership")," model is a ",(0,i.kt)("a",{parentName:"p",href:"https://medium.com/@User3141592/when-to-use-single-table-inheritance-vs-multiple-table-inheritance-db7e9733ae2e"},"single table inheritance"),". Only one member(user) in the channel will have the authorization to grant other user's permission to the ",(0,i.kt)("inlineCode",{parentName:"p"},"Channel"),". This member will be referred to as the ",(0,i.kt)("inlineCode",{parentName:"p"},"owner"),"."),(0,i.kt)("h2",{id:"types-of-membership"},"Types of membership"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Types of membership are defined in ",(0,i.kt)("inlineCode",{parentName:"p"},"MembershipType"),". Note that the ",(0,i.kt)("inlineCode",{parentName:"p"},"MembershipType")," is only considered when the channel is ",(0,i.kt)("strong",{parentName:"p"},"public"),". All users will have the same ",(0,i.kt)("inlineCode",{parentName:"p"},"membershipType")," when the channel is ",(0,i.kt)("strong",{parentName:"p"},"private"),".")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"owner",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"owner")," of the ",(0,i.kt)("strong",{parentName:"li"},"channel")," can add or remove ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," users in the ",(0,i.kt)("strong",{parentName:"li"},"channel"),"."),(0,i.kt)("li",{parentName:"ul"},"If ",(0,i.kt)("inlineCode",{parentName:"li"},"owner")," wants to leave the ",(0,i.kt)("strong",{parentName:"li"},"public")," channel, he or she needs to transfer ownership to other users if the users are in the channel."),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"owner")," of the ",(0,i.kt)("strong",{parentName:"li"},"public")," channel can change the ",(0,i.kt)("strong",{parentName:"li"},"channel")," name."))),(0,i.kt)("li",{parentName:"ol"},"admin",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"admin")," user can add more users to the channel."))),(0,i.kt)("li",{parentName:"ol"},"member",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The only thing member can do in the ",(0,i.kt)("strong",{parentName:"li"},"public")," channel is sending messages or leave the channel.")))))}m.isMDXComponent=!0}}]);