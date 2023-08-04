"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3770],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>g});var i=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),u=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return i.createElement(s.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(t),c=a,g=m["".concat(s,".").concat(c)]||m[c]||d[c]||r;return t?i.createElement(g,l(l({ref:n},p),{},{components:t})):i.createElement(g,l({ref:n},p))}));function g(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=c;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[m]="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},20519:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>s,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>m});var i=t(87462),a=t(63366),r=(t(67294),t(3905)),l=["components"],o={id:"multi-value-dimensions",title:"Multi-value dimensions"},s=void 0,u={unversionedId:"querying/multi-value-dimensions",id:"querying/multi-value-dimensions",title:"Multi-value dimensions",description:"\x3c!--",source:"@site/docs/latest/querying/multi-value-dimensions.md",sourceDirName:"querying",slug:"/querying/multi-value-dimensions",permalink:"/docs/latest/querying/multi-value-dimensions",draft:!1,tags:[],version:"current",frontMatter:{id:"multi-value-dimensions",title:"Multi-value dimensions"},sidebar:"docs",previous:{title:"Lookups",permalink:"/docs/latest/querying/lookups"},next:{title:"Nested columns",permalink:"/docs/latest/querying/nested-columns"}},p={},m=[{value:"Overview",id:"overview",level:2},{value:"Querying multi-value dimensions",id:"querying-multi-value-dimensions",level:2},{value:"Filtering",id:"filtering",level:3},{value:"Grouping",id:"grouping",level:3},{value:"Example: GroupBy query with no filtering",id:"example-groupby-query-with-no-filtering",level:2},{value:"Example: GroupBy query with a selector query filter",id:"example-groupby-query-with-a-selector-query-filter",level:2},{value:"Example: GroupBy query with selector query and dimension filters",id:"example-groupby-query-with-selector-query-and-dimension-filters",level:2},{value:"Disable GroupBy on multi-value columns",id:"disable-groupby-on-multi-value-columns",level:2}],d={toc:m},c="wrapper";function g(e){var n=e.components,t=(0,a.Z)(e,l);return(0,r.kt)(c,(0,i.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,'Apache Druid supports "multi-value" string dimensions. Multi-value string dimensions result from input fields that contain an\narray of values instead of a single value, such as the ',(0,r.kt)("inlineCode",{parentName:"p"},"tags")," values in the following JSON array example: "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"timestamp": "2011-01-12T00:00:00.000Z", "tags": ["t1","t2","t3"]} \n')),(0,r.kt)("p",null,"This document describes filtering and grouping behavior for multi-value dimensions. For information about the internal representation of multi-value dimensions, see\n",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/design/segments#multi-value-columns"},"segments documentation"),". Examples in this document\nare in the form of ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/"},"native Druid queries"),". Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/sql-multivalue-string-functions"},"Druid SQL documentation")," for details\nabout using multi-value string dimensions in SQL."),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"At ingestion time, Druid can detect multi-value dimensions and configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"dimensionsSpec")," accordingly. It detects JSON arrays or CSV/TSV fields as multi-value dimensions."),(0,r.kt)("p",null,"For TSV or CSV data, you can specify the multi-value delimiters using the ",(0,r.kt)("inlineCode",{parentName:"p"},"listDelimiter")," field in the ",(0,r.kt)("inlineCode",{parentName:"p"},"parseSpec"),". JSON data must be formatted as a JSON array to be ingested as a multi-value dimension. JSON data does not require ",(0,r.kt)("inlineCode",{parentName:"p"},"parseSpec")," configuration."),(0,r.kt)("p",null,"The following shows an example multi-value dimension named ",(0,r.kt)("inlineCode",{parentName:"p"},"tags")," in a ",(0,r.kt)("inlineCode",{parentName:"p"},"dimensionsSpec"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'"dimensions": [\n  {\n    "type": "string",\n    "name": "tags",\n    "multiValueHandling": "SORTED_ARRAY",\n    "createBitmapIndex": true\n  }\n],\n')),(0,r.kt)("p",null,"By default, Druid sorts values in multi-value dimensions. This behavior is controlled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"SORTED_ARRAY")," value of the ",(0,r.kt)("inlineCode",{parentName:"p"},"multiValueHandling")," field. Alternatively, you can specify multi-value handling as:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SORTED_SET"),": results in the removal of duplicate values"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ARRAY"),": retains the original order of the values")),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/ingestion/ingestion-spec#dimension-objects"},"Dimension Objects")," for information on configuring multi-value handling."),(0,r.kt)("h2",{id:"querying-multi-value-dimensions"},"Querying multi-value dimensions"),(0,r.kt)("p",null,"The following sections describe filtering and grouping behavior based on the following example data, which includes a multi-value dimension, ",(0,r.kt)("inlineCode",{parentName:"p"},"tags"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{"timestamp": "2011-01-12T00:00:00.000Z", "tags": ["t1","t2","t3"]}  #row1\n{"timestamp": "2011-01-13T00:00:00.000Z", "tags": ["t3","t4","t5"]}  #row2\n{"timestamp": "2011-01-14T00:00:00.000Z", "tags": ["t5","t6","t7"]}  #row3\n{"timestamp": "2011-01-14T00:00:00.000Z", "tags": []}                #row4\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," Be sure to remove the comments before trying out the sample data.")),(0,r.kt)("h3",{id:"filtering"},"Filtering"),(0,r.kt)("p",null,"All query types, as well as ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/aggregations#filtered-aggregator"},"filtered aggregators"),", can filter on multi-value\ndimensions. Filters follow these rules on multi-value dimensions:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'Value filters (like "selector", "bound", and "in") match a row if any of the values of a multi-value dimension match\nthe filter.'),(0,r.kt)("li",{parentName:"ul"},"The Column Comparison filter will match a row if the dimensions have any overlap."),(0,r.kt)("li",{parentName:"ul"},"Value filters that match ",(0,r.kt)("inlineCode",{parentName:"li"},"null")," or ",(0,r.kt)("inlineCode",{parentName:"li"},'""')," (empty string) will match empty cells in a multi-value dimension."),(0,r.kt)("li",{parentName:"ul"},'Logical expression filters behave the same way they do on single-value dimensions: "and" matches a row if all\nunderlying filters match that row; "or" matches a row if any underlying filters match that row; "not" matches a row\nif the underlying filter does not match the row.')),(0,r.kt)("p",null,'The following example illustrates these rules. This query applies an "or" filter to match row1 and row2 of the dataset above, but not row3:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "type": "or",\n  "fields": [\n    {\n      "type": "selector",\n      "dimension": "tags",\n      "value": "t1"\n    },\n    {\n      "type": "selector",\n      "dimension": "tags",\n      "value": "t3"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,'This "and" filter would match only row1 of the dataset above:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "type": "and",\n  "fields": [\n    {\n      "type": "selector",\n      "dimension": "tags",\n      "value": "t1"\n    },\n    {\n      "type": "selector",\n      "dimension": "tags",\n      "value": "t3"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,'This "selector" filter would match row4 of the dataset above:'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{\n  "type": "selector",\n  "dimension": "tags",\n  "value": null\n}\n')),(0,r.kt)("h3",{id:"grouping"},"Grouping"),(0,r.kt)("p",null,"topN and groupBy queries can group on multi-value dimensions. When grouping on a multi-value dimension, ",(0,r.kt)("em",{parentName:"p"},"all")," values\nfrom matching rows will be used to generate one group per value. This behaves similarly to an implicit SQL ",(0,r.kt)("inlineCode",{parentName:"p"},"UNNEST"),"\noperation. This means it's possible for a query to return more groups than there are rows. For example, a topN on the\ndimension ",(0,r.kt)("inlineCode",{parentName:"p"},"tags")," with filter ",(0,r.kt)("inlineCode",{parentName:"p"},'"t1" AND "t3"')," would match only row1, and generate a result with three groups:\n",(0,r.kt)("inlineCode",{parentName:"p"},"t1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"t2"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"t3"),". If you only need to include values that match your filter, you can use a\n",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/dimensionspecs#filtered-dimensionspecs"},"filtered dimensionSpec"),". This can also improve performance."),(0,r.kt)("h2",{id:"example-groupby-query-with-no-filtering"},"Example: GroupBy query with no filtering"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/groupbyquery"},"GroupBy querying")," for details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "groupBy",\n  "dataSource": "test",\n  "intervals": [\n    "1970-01-01T00:00:00.000Z/3000-01-01T00:00:00.000Z"\n  ],\n  "granularity": {\n    "type": "all"\n  },\n  "dimensions": [\n    {\n      "type": "default",\n      "dimension": "tags",\n      "outputName": "tags"\n    }\n  ],\n  "aggregations": [\n    {\n      "type": "count",\n      "name": "count"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"This query returns the following result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t1"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t2"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 2,\n      "tags": "t3"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t4"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 2,\n      "tags": "t5"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t6"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t7"\n    }\n  }\n]\n')),(0,r.kt)("p",null,'Notice that original rows are "exploded" into multiple rows and merged.'),(0,r.kt)("h2",{id:"example-groupby-query-with-a-selector-query-filter"},"Example: GroupBy query with a selector query filter"),(0,r.kt)("p",null,"See ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/filters"},"query filters")," for details of selector query filter."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "groupBy",\n  "dataSource": "test",\n  "intervals": [\n    "1970-01-01T00:00:00.000Z/3000-01-01T00:00:00.000Z"\n  ],\n  "filter": {\n    "type": "selector",\n    "dimension": "tags",\n    "value": "t3"\n  },\n  "granularity": {\n    "type": "all"\n  },\n  "dimensions": [\n    {\n      "type": "default",\n      "dimension": "tags",\n      "outputName": "tags"\n    }\n  ],\n  "aggregations": [\n    {\n      "type": "count",\n      "name": "count"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"This query returns the following result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t1"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t2"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 2,\n      "tags": "t3"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t4"\n    }\n  },\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 1,\n      "tags": "t5"\n    }\n  }\n]\n')),(0,r.kt)("p",null,'You might be surprised to see "t1", "t2", "t4" and "t5" included in the results. This is because the query filter is\napplied on the row before explosion. For multi-value dimensions, a selector filter for "t3" would match row1 and row2,\nafter which exploding is done. For multi-value dimensions, a query filter matches a row if any individual value inside\nthe multiple values matches the query filter.'),(0,r.kt)("h2",{id:"example-groupby-query-with-selector-query-and-dimension-filters"},"Example: GroupBy query with selector query and dimension filters"),(0,r.kt)("p",null,'To solve the problem above and to get only rows for "t3", use a "filtered dimension spec", as in the query below.'),(0,r.kt)("p",null,"See filtered ",(0,r.kt)("inlineCode",{parentName:"p"},"dimensionSpecs")," in ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/dimensionspecs#filtered-dimensionspecs"},"dimensionSpecs")," for details."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "groupBy",\n  "dataSource": "test",\n  "intervals": [\n    "1970-01-01T00:00:00.000Z/3000-01-01T00:00:00.000Z"\n  ],\n  "filter": {\n    "type": "selector",\n    "dimension": "tags",\n    "value": "t3"\n  },\n  "granularity": {\n    "type": "all"\n  },\n  "dimensions": [\n    {\n      "type": "listFiltered",\n      "delegate": {\n        "type": "default",\n        "dimension": "tags",\n        "outputName": "tags"\n      },\n      "values": ["t3"]\n    }\n  ],\n  "aggregations": [\n    {\n      "type": "count",\n      "name": "count"\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"This query returns the following result:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "timestamp": "1970-01-01T00:00:00.000Z",\n    "event": {\n      "count": 2,\n      "tags": "t3"\n    }\n  }\n]\n')),(0,r.kt)("p",null,"Note that, for groupBy queries, you could get similar result with a ",(0,r.kt)("a",{parentName:"p",href:"/docs/latest/querying/having"},"having spec")," but using a filtered\n",(0,r.kt)("inlineCode",{parentName:"p"},"dimensionSpec")," is much more efficient because that gets applied at the lowest level in the query processing pipeline.\nHaving specs are applied at the outermost level of groupBy query processing."),(0,r.kt)("h2",{id:"disable-groupby-on-multi-value-columns"},"Disable GroupBy on multi-value columns"),(0,r.kt)("p",null,"You can disable the implicit unnesting behavior for groupBy by setting groupByEnableMultiValueUnnesting: false in your\nquery context. In this mode, the groupBy engine will return an error instead of completing the query. This is a safety\nfeature for situations where you believe that all dimensions are singly-valued and want the engine to reject any\nmulti-valued dimensions that were inadvertently included."))}g.isMDXComponent=!0}}]);