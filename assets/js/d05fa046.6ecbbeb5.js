"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3827],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>f});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=l(a),u=r,f=d["".concat(c,".").concat(u)]||d[u]||p[u]||o;return a?n.createElement(f,i(i({ref:t},m),{},{components:a})):n.createElement(f,i({ref:t},m))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},26701:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),i=["components"],s={id:"schema-changes",title:"Schema changes"},c=void 0,l={unversionedId:"data-management/schema-changes",id:"data-management/schema-changes",title:"Schema changes",description:"\x3c!--",source:"@site/docs/latest/data-management/schema-changes.md",sourceDirName:"data-management",slug:"/data-management/schema-changes",permalink:"/docs/latest/data-management/schema-changes",draft:!1,tags:[],version:"current",frontMatter:{id:"schema-changes",title:"Schema changes"},sidebar:"docs",previous:{title:"Data deletion",permalink:"/docs/latest/data-management/delete"},next:{title:"Compaction",permalink:"/docs/latest/data-management/compaction"}},m={},d=[{value:"For new data",id:"for-new-data",level:2},{value:"For existing data",id:"for-existing-data",level:2}],p={toc:d},u="wrapper";function f(e){var t=e.components,a=(0,r.Z)(e,i);return(0,o.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"for-new-data"},"For new data"),(0,o.kt)("p",null,"Apache Druid allows you to provide a new schema for new data without the need to update the schema of any existing data.\nIt is sufficient to update your supervisor spec, if using ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/#streaming"},"streaming ingestion"),", or to\nprovide the new schema the next time you do a ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/#batch"},"batch ingestion"),". This is made possible by\nthe fact that each ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/design/segments"},"segment"),", at the time it is created, stores a\ncopy of its own schema. Druid reconciles all of these individual segment schemas automatically at query time."),(0,o.kt)("h2",{id:"for-existing-data"},"For existing data"),(0,o.kt)("p",null,"Schema changes are sometimes necessary for existing data. For example, you may want to change the type of a column in\npreviously-ingested data, or drop a column entirely. Druid handles this using ",(0,o.kt)("a",{parentName:"p",href:"/docs/latest/data-management/update"},"reindexing"),", the same method\nit uses to handle updates of existing data. Reindexing involves rewriting all affected segments and can be a\ntime-consuming operation."))}f.isMDXComponent=!0}}]);