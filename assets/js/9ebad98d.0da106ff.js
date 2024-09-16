"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2836],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=d(n),m=r,h=u["".concat(p,".").concat(m)]||u[m]||s[m]||i;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:r,o[1]=l;for(var d=2;d<i;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},25830:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>p,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>u});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),o=["components"],l={id:"druid-pac4j",title:"Druid pac4j based Security extension"},p=void 0,d={unversionedId:"development/extensions-core/druid-pac4j",id:"development/extensions-core/druid-pac4j",title:"Druid pac4j based Security extension",description:"\x3c!--",source:"@site/docs/30.0.1/development/extensions-core/druid-pac4j.md",sourceDirName:"development/extensions-core",slug:"/development/extensions-core/druid-pac4j",permalink:"/docs/30.0.1/development/extensions-core/druid-pac4j",draft:!1,tags:[],version:"current",frontMatter:{id:"druid-pac4j",title:"Druid pac4j based Security extension"}},c={},u=[{value:"Configuration",id:"configuration",level:2},{value:"Creating an Authenticator",id:"creating-an-authenticator",level:3},{value:"Properties",id:"properties",level:3}],s={toc:u},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)(m,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Apache Druid Extension to enable ",(0,i.kt)("a",{parentName:"p",href:"https://openid.net/connect/"},"OpenID Connect")," based Authentication for Druid Processes using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/pac4j/pac4j"},"pac4j")," as the underlying client library.\nThis can be used  with any authentication server that supports same e.g. ",(0,i.kt)("a",{parentName:"p",href:"https://developer.okta.com/"},"Okta"),".\nThe pac4j authenticator should only be used at the router node to enable a group of users in existing authentication server to interact with Druid cluster, using the ",(0,i.kt)("a",{parentName:"p",href:"/docs/30.0.1/operations/web-console"},"web console"),". "),(0,i.kt)("p",null,"This extension also provides a JWT authenticator that validates ",(0,i.kt)("a",{parentName:"p",href:"https://openid.net/specs/openid-connect-core-1_0.html#CodeIDToken"},"ID Tokens")," associated with a request. ID Tokens are attached to the request under the ",(0,i.kt)("inlineCode",{parentName:"p"},"Authorization")," header with the bearer token prefix - ",(0,i.kt)("inlineCode",{parentName:"p"},"Bearer "),". This authenticator is intended for services to talk to Druid by initially authenticating with an OIDC server to retrieve the ID Token which is then attached to every Druid request."),(0,i.kt)("p",null,"This extension does not support JDBC client authentication."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("h3",{id:"creating-an-authenticator"},"Creating an Authenticator"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'#Create a pac4j web user authenticator\ndruid.auth.authenticatorChain=["pac4j"]\ndruid.auth.authenticator.pac4j.type=pac4j\n\n#Create a JWT token authenticator\ndruid.auth.authenticatorChain=["jwt"]\ndruid.auth.authenticator.jwt.type=jwt\n')),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Property"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"),(0,i.kt)("th",{parentName:"tr",align:null},"required"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.pac4j.cookiePassphrase")),(0,i.kt)("td",{parentName:"tr",align:null},"passphrase for encrypting the cookies used to manage authentication session with browser. It can be provided as plaintext string or The ",(0,i.kt)("a",{parentName:"td",href:"/docs/30.0.1/operations/password-provider"},"Password Provider"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.pac4j.readTimeout")),(0,i.kt)("td",{parentName:"tr",align:null},"Socket connect and read timeout duration used when communicating with authentication server"),(0,i.kt)("td",{parentName:"tr",align:null},"PT5S"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.pac4j.enableCustomSslContext")),(0,i.kt)("td",{parentName:"tr",align:null},"Whether to use custom SSLContext setup via ",(0,i.kt)("a",{parentName:"td",href:"/docs/30.0.1/development/extensions-core/simple-client-sslcontext"},"simple-client-sslcontext")," extension which must be added to extensions list when this property is set to true."),(0,i.kt)("td",{parentName:"tr",align:null},"false"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.pac4j.oidc.clientID")),(0,i.kt)("td",{parentName:"tr",align:null},"OAuth Client Application id."),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.pac4j.oidc.clientSecret")),(0,i.kt)("td",{parentName:"tr",align:null},"OAuth Client Application secret. It can be provided as plaintext string or The ",(0,i.kt)("a",{parentName:"td",href:"/docs/30.0.1/operations/password-provider"},"Password Provider"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.pac4j.oidc.discoveryURI")),(0,i.kt)("td",{parentName:"tr",align:null},"discovery URI for fetching OP metadata ",(0,i.kt)("a",{parentName:"td",href:"http://openid.net/specs/openid-connect-discovery-1_0.html"},"see this"),"."),(0,i.kt)("td",{parentName:"tr",align:null},"none"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.pac4j.oidc.oidcClaim")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://openid.net/specs/openid-connect-core-1_0.html#Claims"},"claim")," that will be extracted from the ID Token after validation."),(0,i.kt)("td",{parentName:"tr",align:null},"name"),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"druid.auth.pac4j.oidc.scope")),(0,i.kt)("td",{parentName:"tr",align:null},"scope is used by an application during authentication to authorize access to a user's details"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"openid profile email")),(0,i.kt)("td",{parentName:"tr",align:null},"No")))))}h.isMDXComponent=!0}}]);