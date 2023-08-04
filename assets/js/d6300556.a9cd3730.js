"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6331],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?a.createElement(h,l(l({ref:t},p),{},{components:n})):a.createElement(h,l({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},61045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={id:"build",title:"Build from source"},s=void 0,u={unversionedId:"development/build",id:"development/build",title:"Build from source",description:"\x3c!--",source:"@site/docs/27.0.0/development/build.md",sourceDirName:"development",slug:"/development/build",permalink:"/docs/27.0.0/development/build",draft:!1,tags:[],version:"current",frontMatter:{id:"build",title:"Build from source"},sidebar:"docs",previous:{title:"JavaScript functionality",permalink:"/docs/27.0.0/development/javascript"},next:{title:"Versioning",permalink:"/docs/27.0.0/development/versioning"}},p={},d=[{value:"Prerequisites",id:"prerequisites",level:4},{value:"Installing Java and Maven",id:"installing-java-and-maven",level:5},{value:"Other dependencies",id:"other-dependencies",level:5},{value:"Downloading the source",id:"downloading-the-source",level:5},{value:"Building from source",id:"building-from-source",level:4},{value:"Potential issues",id:"potential-issues",level:4},{value:"Missing <code>pyyaml</code>",id:"missing-pyyaml",level:5}],c={toc:d},m="wrapper";function h(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"You can build Apache Druid directly from source. Use the version of this page\nthat matches the version you want to build.\nFor building the latest code in master, follow the latest version of this page\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/blob/master/docs/development/build.md"},"here"),":\nmake sure it has ",(0,i.kt)("inlineCode",{parentName:"p"},"/master/")," in the URL."),(0,i.kt)("h4",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("h5",{id:"installing-java-and-maven"},"Installing Java and Maven"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"JDK 8, 8u92+ or JDK 11. See our ",(0,i.kt)("a",{parentName:"li",href:"/docs/27.0.0/operations/java"},"Java documentation")," for information about obtaining a JDK."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"http://maven.apache.org/download.cgi"},"Maven version 3.x"))),(0,i.kt)("h5",{id:"other-dependencies"},"Other dependencies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Distribution builds require Python 3.x and the ",(0,i.kt)("inlineCode",{parentName:"li"},"pyyaml")," module."),(0,i.kt)("li",{parentName:"ul"},"Integration tests require ",(0,i.kt)("inlineCode",{parentName:"li"},"pyyaml")," version 5.1 or later.")),(0,i.kt)("h5",{id:"downloading-the-source"},"Downloading the source"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"git clone git@github.com:apache/druid.git\ncd druid\n")),(0,i.kt)("h4",{id:"building-from-source"},"Building from source"),(0,i.kt)("p",null,"The basic command to build Druid from source is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn clean install\n")),(0,i.kt)("p",null,"This will run static analysis, unit tests, compile classes, and package the projects into JARs. It will ",(0,i.kt)("em",{parentName:"p"},"not")," generate the source or binary distribution tarball."),(0,i.kt)("p",null,"In addition to the basic stages, you may also want to add the following profiles and properties:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"-Pdist")," - Distribution profile: Generates the binary distribution tarball by pulling in core extensions and dependencies and packaging the files as ",(0,i.kt)("inlineCode",{parentName:"li"},"distribution/target/apache-druid-x.x.x-bin.tar.gz")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"-Papache-release")," - Apache release profile: Generates GPG signature and checksums, and builds the source distribution tarball as ",(0,i.kt)("inlineCode",{parentName:"li"},"distribution/target/apache-druid-x.x.x-src.tar.gz")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"-Prat")," - Apache Rat profile: Runs the Apache Rat license audit tool"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"-DskipTests")," - Skips unit tests (which reduces build time)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"-Dweb.console.skip=true")," - Skip front end project")),(0,i.kt)("p",null,"Putting these together, if you wish to build the source and binary distributions with signatures and checksums, audit licenses, and skip the unit tests, you would run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mvn clean install -Papache-release,dist,rat -DskipTests\n")),(0,i.kt)("h4",{id:"potential-issues"},"Potential issues"),(0,i.kt)("h5",{id:"missing-pyyaml"},"Missing ",(0,i.kt)("inlineCode",{parentName:"h5"},"pyyaml")),(0,i.kt)("p",null,"You are building Druid from source following the instructions on this page but you get"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[ERROR] Failed to execute goal org.codehaus.mojo:exec-maven-plugin:1.6.0:exec (generate-binary-license) on project distribution: Command execution failed.: Process exited with an error: 1 (Exit value: 1) -> [Help 1]\n")),(0,i.kt)("p",null,"Resolution: Make sure you have Python installed as well as the ",(0,i.kt)("inlineCode",{parentName:"p"},"yaml")," module:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pyyaml\n")),(0,i.kt)("p",null,"On some systems, ensure you use the Python 3.x version of ",(0,i.kt)("inlineCode",{parentName:"p"},"pip"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install pyyaml\n")))}h.isMDXComponent=!0}}]);