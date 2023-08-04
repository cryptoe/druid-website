"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4057],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),g=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=g(e.components);return a.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=g(n),m=r,d=p["".concat(o,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var g=2;g<l;g++)i[g]=n[g];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},10354:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>g,toc:()=>p});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],s={id:"tdigestsketch-quantiles",title:"T-Digest Quantiles Sketch module"},o=void 0,g={unversionedId:"development/extensions-contrib/tdigestsketch-quantiles",id:"development/extensions-contrib/tdigestsketch-quantiles",title:"T-Digest Quantiles Sketch module",description:"\x3c!--",source:"@site/docs/latest/development/extensions-contrib/tdigestsketch-quantiles.md",sourceDirName:"development/extensions-contrib",slug:"/development/extensions-contrib/tdigestsketch-quantiles",permalink:"/docs/latest/development/extensions-contrib/tdigestsketch-quantiles",draft:!1,tags:[],version:"current",frontMatter:{id:"tdigestsketch-quantiles",title:"T-Digest Quantiles Sketch module"}},u={},p=[{value:"Aggregator",id:"aggregator",level:3},{value:"Post Aggregators",id:"post-aggregators",level:3},{value:"Quantiles",id:"quantiles",level:4}],c={toc:p},m="wrapper";function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,l.kt)(m,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This module provides Apache Druid approximate sketch aggregators based on T-Digest.\nT-Digest (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/tdunning/t-digest"},"https://github.com/tdunning/t-digest"),") is a popular data structure for accurate on-line accumulation of\nrank-based statistics such as quantiles and trimmed means.\nThe data structure is also designed for parallel programming use cases like distributed aggregations or map reduce jobs by making combining two intermediate t-digests easy and efficient."),(0,l.kt)("p",null,"The tDigestSketch aggregator is capable of generating sketches from raw numeric values as well as\naggregating/combining pre-generated T-Digest sketches generated using the tDigestSketch aggregator itself.\nWhile one can generate sketches on the fly during the query time itself, it generally is more performant\nto generate sketches during ingestion time itself and then combining them during query time.\nThe module also provides a postAggregator, quantilesFromTDigestSketch, that can be used to compute approximate\nquantiles from T-Digest sketches generated by the tDigestSketch aggregator."),(0,l.kt)("p",null,"To use this aggregator, make sure you ",(0,l.kt)("a",{parentName:"p",href:"/docs/latest/configuration/extensions#loading-extensions"},"include")," the extension in your config file:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},'druid.extensions.loadList=["druid-tdigestsketch"]\n')),(0,l.kt)("h3",{id:"aggregator"},"Aggregator"),(0,l.kt)("p",null,"The result of the aggregation is a T-Digest sketch that is built ingesting numeric values from the raw data or from\ncombining pre-generated T-Digest sketches."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type" : "tDigestSketch",\n  "name" : <output_name>,\n  "fieldName" : <metric_name>,\n  "compression": <parameter that controls size and accuracy>\n }\n')),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "tDigestSketch",\n    "name": "sketch",\n    "fieldName": "session_duration",\n    "compression": 200\n}\n')),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "tDigestSketch",\n    "name": "combined_sketch",\n    "fieldName": <input-column>,\n    "compression": 200\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"property"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},'This String should always be "tDigestSketch"'),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"A String for the output (result) name of the calculation."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fieldName"),(0,l.kt)("td",{parentName:"tr",align:null},"A String for the name of the input field containing raw numeric values or pre-generated T-Digest sketches."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"compression"),(0,l.kt)("td",{parentName:"tr",align:null},"Parameter that determines the accuracy and size of the sketch. Higher compression means higher accuracy but more space to store sketches."),(0,l.kt)("td",{parentName:"tr",align:null},"no, defaults to 100")))),(0,l.kt)("h3",{id:"post-aggregators"},"Post Aggregators"),(0,l.kt)("h4",{id:"quantiles"},"Quantiles"),(0,l.kt)("p",null,"This returns an array of quantiles corresponding to a given array of fractions."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "quantilesFromTDigestSketch",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to a TDigestSketch (fieldAccess or another post aggregator)>,\n  "fractions" : <array of fractions>\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"property"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},'This String should always be "quantilesFromTDigestSketch"'),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"A String for the output (result) name of the calculation."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"field"),(0,l.kt)("td",{parentName:"tr",align:null},"A field reference pointing to the field aggregated/combined T-Digest sketch."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fractions"),(0,l.kt)("td",{parentName:"tr",align:null},"Non-empty array of fractions between 0 and 1"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")))),(0,l.kt)("p",null,"Example:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "queryType": "groupBy",\n    "dataSource": "test_datasource",\n    "granularity": "ALL",\n    "dimensions": [],\n    "aggregations": [{\n        "type": "tDigestSketch",\n        "name": "merged_sketch",\n        "fieldName": "ingested_sketch",\n        "compression": 200\n    }],\n    "postAggregations": [{\n        "type": "quantilesFromTDigestSketch",\n        "name": "quantiles",\n        "fractions": [0, 0.5, 1],\n        "field": {\n            "type": "fieldAccess",\n            "fieldName": "merged_sketch"\n        }\n    }],\n    "intervals": ["2016-01-01T00:00:00.000Z/2016-01-31T00:00:00.000Z"]\n}\n')),(0,l.kt)("p",null,"Similar to quantilesFromTDigestSketch except it takes in a single fraction for computing quantile."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "type"  : "quantileFromTDigestSketch",\n  "name": <output name>,\n  "field"  : <post aggregator that refers to a TDigestSketch (fieldAccess or another post aggregator)>,\n  "fraction" : <value>\n}\n')),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"property"),(0,l.kt)("th",{parentName:"tr",align:null},"description"),(0,l.kt)("th",{parentName:"tr",align:null},"required?"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},'This String should always be "quantileFromTDigestSketch"'),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"name"),(0,l.kt)("td",{parentName:"tr",align:null},"A String for the output (result) name of the calculation."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"field"),(0,l.kt)("td",{parentName:"tr",align:null},"A field reference pointing to the field aggregated/combined T-Digest sketch."),(0,l.kt)("td",{parentName:"tr",align:null},"yes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"fraction"),(0,l.kt)("td",{parentName:"tr",align:null},"Decimal value between 0 and 1"),(0,l.kt)("td",{parentName:"tr",align:null},"yes")))))}d.isMDXComponent=!0}}]);