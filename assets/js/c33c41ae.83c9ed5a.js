"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[906],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),u=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(l.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=u(t),c=i,y=m["".concat(l,".").concat(c)]||m[c]||d[c]||r;return t?a.createElement(y,o(o({ref:n},p),{},{components:t})):a.createElement(y,o({ref:n},p))}));function y(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[m]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=t[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},79223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>y,frontMatter:()=>s,metadata:()=>u,toc:()=>m});var a=t(87462),i=t(63366),r=(t(67294),t(3905)),o=["components"],s={id:"sql-translation",title:"SQL query translation",sidebar_label:"SQL query translation"},l=void 0,u={unversionedId:"querying/sql-translation",id:"querying/sql-translation",title:"SQL query translation",description:"\x3c!--",source:"@site/docs/30.0.1/querying/sql-translation.md",sourceDirName:"querying",slug:"/querying/sql-translation",permalink:"/docs/30.0.1/querying/sql-translation",draft:!1,tags:[],version:"current",frontMatter:{id:"sql-translation",title:"SQL query translation",sidebar_label:"SQL query translation"},sidebar:"docs",previous:{title:"SQL metadata tables",permalink:"/docs/30.0.1/querying/sql-metadata-tables"},next:{title:"Native queries",permalink:"/docs/30.0.1/querying/"}},p={},m=[{value:"Best practices",id:"best-practices",level:2},{value:"Interpreting EXPLAIN PLAN output",id:"interpreting-explain-plan-output",level:2},{value:"Query types",id:"query-types",level:2},{value:"Time filters",id:"time-filters",level:2},{value:"Joins",id:"joins",level:2},{value:"Subqueries",id:"subqueries",level:2},{value:"Approximations",id:"approximations",level:2},{value:"Unsupported features",id:"unsupported-features",level:2}],d={toc:m},c="wrapper";function y(e){var n=e.components,t=(0,i.Z)(e,o);return(0,r.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," Apache Druid supports two query languages: Druid SQL and ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/"},"native queries"),".\nThis document describes the Druid SQL language.")),(0,r.kt)("p",null,"Druid uses ",(0,r.kt)("a",{parentName:"p",href:"https://calcite.apache.org/"},"Apache Calcite")," to parse and plan SQL queries.\nDruid translates SQL statements into its ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/"},"native JSON-based query language"),".\nIn general, the slight overhead of translating SQL on the Broker is the only minor performance penalty to using Druid SQL compared to native queries."),(0,r.kt)("p",null,"This topic includes best practices and tools to help you achieve good performance and minimize the impact of translation."),(0,r.kt)("h2",{id:"best-practices"},"Best practices"),(0,r.kt)("p",null,"Consider the following non-exhaustive list of best practices when looking into performance implications of\ntranslating Druid SQL queries to native queries."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you wrote a filter on the primary time column ",(0,r.kt)("inlineCode",{parentName:"p"},"__time"),", make sure it is being correctly translated to an\n",(0,r.kt)("inlineCode",{parentName:"p"},'"intervals"')," filter, as described in the ",(0,r.kt)("a",{parentName:"p",href:"#time-filters"},"Time filters")," section below. If not, you may need to change\nthe way you write the filter.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Try to avoid subqueries underneath joins: they affect both performance and scalability. This includes implicit\nsubqueries generated by conditions on mismatched types, and implicit subqueries generated by conditions that use\nexpressions to refer to the right-hand side.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Currently, Druid does not support pushing down predicates (condition and filter) past a Join (i.e. into\nJoin's children). Druid only supports pushing predicates into the join if they originated from\nabove the join. Hence, the location of predicates and filters in your Druid SQL is very important.\nAlso, as a result of this, comma joins should be avoided.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Read through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/query-execution"},"Query execution")," page to understand how various types of native queries\nwill be executed.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Be careful when interpreting EXPLAIN PLAN output, and use request logging if in doubt. Request logs will show the\nexact native query that was run. See the ",(0,r.kt)("a",{parentName:"p",href:"#interpreting-explain-plan-output"},"next section")," for more details.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you encounter a query that could be planned better, feel free to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/issues/new/choose"},"raise an issue on GitHub"),". A reproducible test case is always\nappreciated."))),(0,r.kt)("h2",{id:"interpreting-explain-plan-output"},"Interpreting EXPLAIN PLAN output"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/sql#explain-plan"},"EXPLAIN PLAN")," functionality can help you understand how a given SQL query will\nbe translated to native.\nEXPLAIN PLAN statements return:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"PLAN")," column that contains a JSON array of native queries that Druid will run"),(0,r.kt)("li",{parentName:"ul"},"a ",(0,r.kt)("inlineCode",{parentName:"li"},"RESOURCES")," column that describes the resources used in the query"),(0,r.kt)("li",{parentName:"ul"},"an ",(0,r.kt)("inlineCode",{parentName:"li"},"ATTRIBUTES")," column that describes the attributes of the query, including:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"statementType"),": the SQL statement type"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"targetDataSource"),": the target datasource in an INSERT or REPLACE statement"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"partitionedBy"),": the time-based partitioning granularity in an INSERT or REPLACE statement"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"clusteredBy"),": the clustering columns in an INSERT or REPLACE statement"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"replaceTimeChunks"),": the time chunks in a REPLACE statement")))),(0,r.kt)("p",null,"Example 1: EXPLAIN PLAN for a ",(0,r.kt)("inlineCode",{parentName:"p"},"SELECT")," query on the ",(0,r.kt)("inlineCode",{parentName:"p"},"wikipedia")," datasource:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},"EXPLAIN PLAN FOR\nSELECT\n  channel,\n  COUNT(*)\nFROM wikipedia\nWHERE channel IN (SELECT page FROM wikipedia GROUP BY page ORDER BY COUNT(*) DESC LIMIT 10)\nGROUP BY channel\n"))),(0,r.kt)("p",null,"The above EXPLAIN PLAN query returns the following result:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "query": {\n        "queryType": "topN",\n        "dataSource": {\n          "type": "join",\n          "left": {\n            "type": "table",\n            "name": "wikipedia"\n          },\n          "right": {\n            "type": "query",\n            "query": {\n              "queryType": "groupBy",\n              "dataSource": {\n                "type": "table",\n                "name": "wikipedia"\n              },\n              "intervals": {\n                "type": "intervals",\n                "intervals": [\n                  "-146136543-09-08T08:23:32.096Z/146140482-04-24T15:36:27.903Z"\n                ]\n              },\n              "granularity": {\n                "type": "all"\n              },\n              "dimensions": [\n                {\n                  "type": "default",\n                  "dimension": "page",\n                  "outputName": "d0",\n                  "outputType": "STRING"\n                }\n              ],\n              "aggregations": [\n                {\n                  "type": "count",\n                  "name": "a0"\n                }\n              ],\n              "limitSpec": {\n                "type": "default",\n                "columns": [\n                  {\n                    "dimension": "a0",\n                    "direction": "descending",\n                    "dimensionOrder": {\n                      "type": "numeric"\n                    }\n                  }\n                ],\n                "limit": 10\n              },\n              "context": {\n                "sqlOuterLimit": 101,\n                "sqlQueryId": "ee616a36-c30c-4eae-af00-245127956e42",\n                "useApproximateCountDistinct": false,\n                "useApproximateTopN": false\n              }\n            }\n          },\n          "rightPrefix": "j0.",\n          "condition": "(\\"channel\\" == \\"j0.d0\\")",\n          "joinType": "INNER"\n        },\n        "dimension": {\n          "type": "default",\n          "dimension": "channel",\n          "outputName": "d0",\n          "outputType": "STRING"\n        },\n        "metric": {\n          "type": "dimension",\n          "ordering": {\n            "type": "lexicographic"\n          }\n        },\n        "threshold": 101,\n        "intervals": {\n          "type": "intervals",\n          "intervals": [\n            "-146136543-09-08T08:23:32.096Z/146140482-04-24T15:36:27.903Z"\n          ]\n        },\n        "granularity": {\n          "type": "all"\n        },\n        "aggregations": [\n          {\n            "type": "count",\n            "name": "a0"\n          }\n        ],\n        "context": {\n          "sqlOuterLimit": 101,\n          "sqlQueryId": "ee616a36-c30c-4eae-af00-245127956e42",\n          "useApproximateCountDistinct": false,\n          "useApproximateTopN": false\n        }\n      },\n      "signature": [\n        {\n          "name": "d0",\n          "type": "STRING"\n        },\n        {\n          "name": "a0",\n          "type": "LONG"\n        }\n      ],\n      "columnMappings": [\n        {\n          "queryColumn": "d0",\n          "outputColumn": "channel"\n        },\n        {\n          "queryColumn": "a0",\n          "outputColumn": "EXPR$1"\n        }\n      ]\n    }\n  ],\n  [\n    {\n      "name": "wikipedia",\n      "type": "DATASOURCE"\n    }\n  ],\n  {\n    "statementType": "SELECT"\n  }\n]\n'))),(0,r.kt)("p",null,"Example 2: EXPLAIN PLAN for an ",(0,r.kt)("inlineCode",{parentName:"p"},"INSERT")," query that inserts data into the ",(0,r.kt)("inlineCode",{parentName:"p"},"wikipedia")," datasource:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPLAIN PLAN FOR\nINSERT INTO wikipedia2\nSELECT\n  TIME_PARSE("timestamp") AS __time,\n  namespace,\n  cityName,\n  countryName,\n  regionIsoCode,\n  metroCode,\n  countryIsoCode,\n  regionName\nFROM TABLE(\n    EXTERN(\n      \'{"type":"http","uris":["https://druid.apache.org/data/wikipedia.json.gz"]}\',\n      \'{"type":"json"}\',\n      \'[{"name":"timestamp","type":"string"},{"name":"namespace","type":"string"},{"name":"cityName","type":"string"},{"name":"countryName","type":"string"},{"name":"regionIsoCode","type":"string"},{"name":"metroCode","type":"long"},{"name":"countryIsoCode","type":"string"},{"name":"regionName","type":"string"}]\'\n    )\n  )\nPARTITIONED BY ALL\n'))),(0,r.kt)("p",null,"The above EXPLAIN PLAN returns the following result:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "query": {\n        "queryType": "scan",\n        "dataSource": {\n          "type": "external",\n          "inputSource": {\n            "type": "http",\n            "uris": [\n              "https://druid.apache.org/data/wikipedia.json.gz"\n            ]\n          },\n          "inputFormat": {\n            "type": "json",\n            "keepNullColumns": false,\n            "assumeNewlineDelimited": false,\n            "useJsonNodeReader": false\n          },\n          "signature": [\n            {\n              "name": "timestamp",\n              "type": "STRING"\n            },\n            {\n              "name": "namespace",\n              "type": "STRING"\n            },\n            {\n              "name": "cityName",\n              "type": "STRING"\n            },\n            {\n              "name": "countryName",\n              "type": "STRING"\n            },\n            {\n              "name": "regionIsoCode",\n              "type": "STRING"\n            },\n            {\n              "name": "metroCode",\n              "type": "LONG"\n            },\n            {\n              "name": "countryIsoCode",\n              "type": "STRING"\n            },\n            {\n              "name": "regionName",\n              "type": "STRING"\n            }\n          ]\n        },\n        "intervals": {\n          "type": "intervals",\n          "intervals": [\n            "-146136543-09-08T08:23:32.096Z/146140482-04-24T15:36:27.903Z"\n          ]\n        },\n        "virtualColumns": [\n          {\n            "type": "expression",\n            "name": "v0",\n            "expression": "timestamp_parse(\\"timestamp\\",null,\'UTC\')",\n            "outputType": "LONG"\n          }\n        ],\n        "resultFormat": "compactedList",\n        "columns": [\n          "cityName",\n          "countryIsoCode",\n          "countryName",\n          "metroCode",\n          "namespace",\n          "regionIsoCode",\n          "regionName",\n          "v0"\n        ],\n        "legacy": false,\n        "context": {\n          "finalizeAggregations": false,\n          "forceExpressionVirtualColumns": true,\n          "groupByEnableMultiValueUnnesting": false,\n          "maxNumTasks": 5,\n          "multiStageQuery": true,\n          "queryId": "42e3de2b-daaf-40f9-a0e7-2c6184529ea3",\n          "scanSignature": "[{\\"name\\":\\"cityName\\",\\"type\\":\\"STRING\\"},{\\"name\\":\\"countryIsoCode\\",\\"type\\":\\"STRING\\"},{\\"name\\":\\"countryName\\",\\"type\\":\\"STRING\\"},{\\"name\\":\\"metroCode\\",\\"type\\":\\"LONG\\"},{\\"name\\":\\"namespace\\",\\"type\\":\\"STRING\\"},{\\"name\\":\\"regionIsoCode\\",\\"type\\":\\"STRING\\"},{\\"name\\":\\"regionName\\",\\"type\\":\\"STRING\\"},{\\"name\\":\\"v0\\",\\"type\\":\\"LONG\\"}]",\n          "sqlInsertSegmentGranularity": "{\\"type\\":\\"all\\"}",\n          "sqlQueryId": "42e3de2b-daaf-40f9-a0e7-2c6184529ea3",\n          "useNativeQueryExplain": true\n        },\n        "granularity": {\n          "type": "all"\n        }\n      },\n      "signature": [\n        {\n          "name": "v0",\n          "type": "LONG"\n        },\n        {\n          "name": "namespace",\n          "type": "STRING"\n        },\n        {\n          "name": "cityName",\n          "type": "STRING"\n        },\n        {\n          "name": "countryName",\n          "type": "STRING"\n        },\n        {\n          "name": "regionIsoCode",\n          "type": "STRING"\n        },\n        {\n          "name": "metroCode",\n          "type": "LONG"\n        },\n        {\n          "name": "countryIsoCode",\n          "type": "STRING"\n        },\n        {\n          "name": "regionName",\n          "type": "STRING"\n        }\n      ],\n      "columnMappings": [\n        {\n          "queryColumn": "v0",\n          "outputColumn": "__time"\n        },\n        {\n          "queryColumn": "namespace",\n          "outputColumn": "namespace"\n        },\n        {\n          "queryColumn": "cityName",\n          "outputColumn": "cityName"\n        },\n        {\n          "queryColumn": "countryName",\n          "outputColumn": "countryName"\n        },\n        {\n          "queryColumn": "regionIsoCode",\n          "outputColumn": "regionIsoCode"\n        },\n        {\n          "queryColumn": "metroCode",\n          "outputColumn": "metroCode"\n        },\n        {\n          "queryColumn": "countryIsoCode",\n          "outputColumn": "countryIsoCode"\n        },\n        {\n          "queryColumn": "regionName",\n          "outputColumn": "regionName"\n        }\n      ]\n    }\n  ],\n  [\n    {\n      "name": "EXTERNAL",\n      "type": "EXTERNAL"\n    },\n    {\n      "name": "wikipedia",\n      "type": "DATASOURCE"\n    }\n  ],\n  {\n    "statementType": "INSERT",\n    "targetDataSource": "wikipedia",\n    "partitionedBy": {\n      "type": "all"\n    }\n  }\n]\n'))),(0,r.kt)("p",null,"Example 3: EXPLAIN PLAN for a ",(0,r.kt)("inlineCode",{parentName:"p"},"REPLACE")," query that replaces all the data in the ",(0,r.kt)("inlineCode",{parentName:"p"},"wikipedia")," datasource with a ",(0,r.kt)("inlineCode",{parentName:"p"},"DAY"),"\ntime partitioning, and ",(0,r.kt)("inlineCode",{parentName:"p"},"cityName")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"countryName")," as the clustering columns:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the query"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql"},'EXPLAIN PLAN FOR\nREPLACE INTO wikipedia\nOVERWRITE ALL\nSELECT\n  TIME_PARSE("timestamp") AS __time,\n  namespace,\n  cityName,\n  countryName,\n  regionIsoCode,\n  metroCode,\n  countryIsoCode,\n  regionName\nFROM TABLE(\n    EXTERN(\n      \'{"type":"http","uris":["https://druid.apache.org/data/wikipedia.json.gz"]}\',\n      \'{"type":"json"}\',\n      \'[{"name":"timestamp","type":"string"},{"name":"namespace","type":"string"},{"name":"cityName","type":"string"},{"name":"countryName","type":"string"},{"name":"regionIsoCode","type":"string"},{"name":"metroCode","type":"long"},{"name":"countryIsoCode","type":"string"},{"name":"regionName","type":"string"}]\'\n    )\n  )\nPARTITIONED BY DAY\nCLUSTERED BY cityName, countryName\n'))),(0,r.kt)("p",null,"The above EXPLAIN PLAN query returns the following result:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Show the result"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n  [\n    {\n      "query": {\n        "queryType": "scan",\n        "dataSource": {\n          "type": "external",\n          "inputSource": {\n            "type": "http",\n            "uris": [\n              "https://druid.apache.org/data/wikipedia.json.gz"\n            ]\n          },\n          "inputFormat": {\n            "type": "json",\n            "keepNullColumns": false,\n            "assumeNewlineDelimited": false,\n            "useJsonNodeReader": false\n          },\n          "signature": [\n            {\n              "name": "timestamp",\n              "type": "STRING"\n            },\n            {\n              "name": "namespace",\n              "type": "STRING"\n            },\n            {\n              "name": "cityName",\n              "type": "STRING"\n            },\n            {\n              "name": "countryName",\n              "type": "STRING"\n            },\n            {\n              "name": "regionIsoCode",\n              "type": "STRING"\n            },\n            {\n              "name": "metroCode",\n              "type": "LONG"\n            },\n            {\n              "name": "countryIsoCode",\n              "type": "STRING"\n            },\n            {\n              "name": "regionName",\n              "type": "STRING"\n            }\n          ]\n        },\n        "intervals": {\n          "type": "intervals",\n          "intervals": [\n            "-146136543-09-08T08:23:32.096Z/146140482-04-24T15:36:27.903Z"\n          ]\n        },\n        "virtualColumns": [\n          {\n            "type": "expression",\n            "name": "v0",\n            "expression": "timestamp_parse(\\"timestamp\\",null,\'UTC\')",\n            "outputType": "LONG"\n          }\n        ],\n        "resultFormat": "compactedList",\n        "columns": [\n          "cityName",\n          "countryIsoCode",\n          "countryName",\n          "metroCode",\n          "namespace",\n          "regionIsoCode",\n          "regionName",\n          "v0"\n        ],\n        "legacy": false,\n        "context": {\n          "finalizeAggregations": false,\n          "groupByEnableMultiValueUnnesting": false,\n          "maxNumTasks": 5,\n          "queryId": "d88e0823-76d4-40d9-a1a7-695c8577b79f",\n          "scanSignature": "[{\\"name\\":\\"cityName\\",\\"type\\":\\"STRING\\"},{\\"name\\":\\"countryIsoCode\\",\\"type\\":\\"STRING\\"},{\\"name\\":\\"countryName\\",\\"type\\":\\"STRING\\"},{\\"name\\":\\"metroCode\\",\\"type\\":\\"LONG\\"},{\\"name\\":\\"namespace\\",\\"type\\":\\"STRING\\"},{\\"name\\":\\"regionIsoCode\\",\\"type\\":\\"STRING\\"},{\\"name\\":\\"regionName\\",\\"type\\":\\"STRING\\"},{\\"name\\":\\"v0\\",\\"type\\":\\"LONG\\"}]",\n          "sqlInsertSegmentGranularity": "\\"DAY\\"",\n          "sqlQueryId": "d88e0823-76d4-40d9-a1a7-695c8577b79f",\n          "sqlReplaceTimeChunks": "all"\n        },\n        "granularity": {\n          "type": "all"\n        }\n      },\n      "signature": [\n        {\n          "name": "v0",\n          "type": "LONG"\n        },\n        {\n          "name": "namespace",\n          "type": "STRING"\n        },\n        {\n          "name": "cityName",\n          "type": "STRING"\n        },\n        {\n          "name": "countryName",\n          "type": "STRING"\n        },\n        {\n          "name": "regionIsoCode",\n          "type": "STRING"\n        },\n        {\n          "name": "metroCode",\n          "type": "LONG"\n        },\n        {\n          "name": "countryIsoCode",\n          "type": "STRING"\n        },\n        {\n          "name": "regionName",\n          "type": "STRING"\n        }\n      ],\n      "columnMappings": [\n        {\n          "queryColumn": "v0",\n          "outputColumn": "__time"\n        },\n        {\n          "queryColumn": "namespace",\n          "outputColumn": "namespace"\n        },\n        {\n          "queryColumn": "cityName",\n          "outputColumn": "cityName"\n        },\n        {\n          "queryColumn": "countryName",\n          "outputColumn": "countryName"\n        },\n        {\n          "queryColumn": "regionIsoCode",\n          "outputColumn": "regionIsoCode"\n        },\n        {\n          "queryColumn": "metroCode",\n          "outputColumn": "metroCode"\n        },\n        {\n          "queryColumn": "countryIsoCode",\n          "outputColumn": "countryIsoCode"\n        },\n        {\n          "queryColumn": "regionName",\n          "outputColumn": "regionName"\n        }\n      ]\n    }\n  ],\n  [\n    {\n      "name": "EXTERNAL",\n      "type": "EXTERNAL"\n    },\n    {\n      "name": "wikipedia",\n      "type": "DATASOURCE"\n    }\n  ],\n  {\n    "statementType": "REPLACE",\n    "targetDataSource": "wikipedia",\n    "partitionedBy": "DAY",\n    "clusteredBy": ["cityName","countryName"],\n    "replaceTimeChunks": "all"\n  }\n]\n'))),(0,r.kt)("p",null,"In this case the JOIN operator gets translated to a ",(0,r.kt)("inlineCode",{parentName:"p"},"join")," datasource. See the ",(0,r.kt)("a",{parentName:"p",href:"#joins"},"Join translation")," section\nfor more details about how this works."),(0,r.kt)("p",null,"We can see this for ourselves using Druid's ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/configuration/#request-logging"},"request logging")," feature. After\nenabling logging and running this query, we can see that it actually runs as the following native query."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "queryType": "groupBy",\n  "dataSource": {\n    "type": "join",\n    "left": "wikipedia",\n    "right": {\n      "type": "query",\n      "query": {\n        "queryType": "topN",\n        "dataSource": "wikipedia",\n        "dimension": {"type": "default", "dimension": "page", "outputName": "d0"},\n        "metric": {"type": "numeric", "metric": "a0"},\n        "threshold": 10,\n        "intervals": "-146136543-09-08T08:23:32.096Z/146140482-04-24T15:36:27.903Z",\n        "granularity": "all",\n        "aggregations": [\n          { "type": "count", "name": "a0"}\n        ]\n      }\n    },\n    "rightPrefix": "j0.",\n    "condition": "(\\"page\\" == \\"j0.d0\\")",\n    "joinType": "INNER"\n  },\n  "intervals": "-146136543-09-08T08:23:32.096Z/146140482-04-24T15:36:27.903Z",\n  "granularity": "all",\n  "dimensions": [\n    {"type": "default", "dimension": "channel", "outputName": "d0"}\n  ],\n  "aggregations": [\n    { "type": "count", "name": "a0"}\n  ]\n}\n')),(0,r.kt)("h2",{id:"query-types"},"Query types"),(0,r.kt)("p",null,"Druid SQL uses four different native query types."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/scan-query"},"Scan")," is used for queries that do not aggregate","\u2014","no GROUP BY, no DISTINCT.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/timeseriesquery"},"Timeseries")," is used for queries that GROUP BY ",(0,r.kt)("inlineCode",{parentName:"p"},"FLOOR(__time TO unit)")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"TIME_FLOOR(__time, period)"),', have no other grouping expressions, no HAVING clause, no nesting, and either no ORDER BY, or an\nORDER BY that orders by same expression as present in GROUP BY. It also uses Timeseries for "grand total" queries that\nhave aggregation functions but no GROUP BY. This query type takes advantage of the fact that Druid segments are sorted\nby time.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/topnquery"},"TopN"),' is used by default for queries that group by a single expression, do have ORDER BY and LIMIT\nclauses, do not have HAVING clauses, and are not nested. However, the TopN query type will deliver approximate ranking\nand results in some cases; if you want to avoid this, set "useApproximateTopN" to "false". TopN results are always\ncomputed in memory. See the TopN documentation for more details.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/groupbyquery"},"GroupBy")," is used for all other aggregations, including any nested aggregation queries. Druid's\nGroupBy is a traditional aggregation engine: it delivers exact results and rankings and supports a wide variety of\nfeatures. GroupBy aggregates in memory if it can, but it may spill to disk if it doesn't have enough memory to complete\nyour query. Results are streamed back from data processes through the Broker if you ORDER BY the same expressions in your\nGROUP BY clause, or if you don't have an ORDER BY at all. If your query has an ORDER BY referencing expressions that\ndon't appear in the GROUP BY clause (like aggregation functions) then the Broker will materialize a list of results in\nmemory, up to a max of your LIMIT, if any. See the GroupBy documentation for details about tuning performance and memory\nuse."))),(0,r.kt)("h2",{id:"time-filters"},"Time filters"),(0,r.kt)("p",null,"For all native query types, filters on the ",(0,r.kt)("inlineCode",{parentName:"p"},"__time"),' column will be translated into top-level query "intervals" whenever\npossible, which allows Druid to use its global time index to quickly prune the set of data that must be scanned.\nConsider this (non-exhaustive) list of time filters that will be recognized and translated to "intervals":'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__time >= TIMESTAMP '2000-01-01 00:00:00'")," (comparison to absolute time)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"__time >= CURRENT_TIMESTAMP - INTERVAL '8' HOUR")," (comparison to relative time)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FLOOR(__time TO DAY) = TIMESTAMP '2000-01-01 00:00:00'")," (specific day)")),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"#interpreting-explain-plan-output"},"Interpreting EXPLAIN PLAN output")," section for details on confirming\nthat time filters are being translated as you expect."),(0,r.kt)("h2",{id:"joins"},"Joins"),(0,r.kt)("p",null,"SQL join operators are translated to native join datasources as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Joins that the native layer can handle directly are translated literally, to a ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/datasource#join"},"join datasource"),"\nwhose ",(0,r.kt)("inlineCode",{parentName:"p"},"left"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"right"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"condition")," are faithful translations of the original SQL. This includes any SQL join where\nthe right-hand side is a lookup or subquery, and where the condition is an equality where one side is an expression based\non the left-hand table, the other side is a simple column reference to the right-hand table, and both sides of the\nequality are the same data type.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If a join cannot be handled directly by a native ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/datasource#join"},"join datasource")," as written, Druid SQL\nwill insert subqueries to make it runnable. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"foo INNER JOIN bar ON foo.abc = LOWER(bar.def)")," cannot be\ndirectly translated, because there is an expression on the right-hand side instead of a simple column access. A subquery\nwill be inserted that effectively transforms this clause to\n",(0,r.kt)("inlineCode",{parentName:"p"},"foo INNER JOIN (SELECT LOWER(def) AS def FROM bar) t ON foo.abc = t.def"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Druid SQL does not currently reorder joins to optimize queries."))),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"#interpreting-explain-plan-output"},"Interpreting EXPLAIN PLAN output")," section for details on confirming\nthat joins are being translated as you expect."),(0,r.kt)("p",null,"Refer to the ",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/query-execution#join"},"Query execution")," page for information about how joins are executed."),(0,r.kt)("h2",{id:"subqueries"},"Subqueries"),(0,r.kt)("p",null,"Subqueries in SQL are generally translated to native query datasources. Refer to the\n",(0,r.kt)("a",{parentName:"p",href:"/docs/30.0.1/querying/query-execution#query"},"Query execution")," page for information about how subqueries are executed."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"}," Note: Subqueries in the WHERE clause, like ",(0,r.kt)("inlineCode",{parentName:"p"},"WHERE col1 IN (SELECT foo FROM ...)")," are translated to inner joins.")),(0,r.kt)("h2",{id:"approximations"},"Approximations"),(0,r.kt)("p",null,"Druid SQL will use approximate algorithms in some situations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"COUNT(DISTINCT col)")," aggregation functions by default uses a variant of\n",(0,r.kt)("a",{parentName:"p",href:"http://algo.inria.fr/flajolet/Publications/FlFuGaMe07.pdf"},"HyperLogLog"),', a fast approximate distinct counting\nalgorithm. Druid SQL will switch to exact distinct counts if you set "useApproximateCountDistinct" to "false", either\nthrough query context or through Broker configuration.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},'GROUP BY queries over a single column with ORDER BY and LIMIT may be executed using the TopN engine, which uses an\napproximate algorithm. Druid SQL will switch to an exact grouping algorithm if you set "useApproximateTopN" to "false",\neither through query context or through Broker configuration.')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Aggregation functions that are labeled as using sketches or approximations, such as APPROX_COUNT_DISTINCT, are always\napproximate, regardless of configuration."))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"A known issue with approximate functions based on data sketches")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"APPROX_QUANTILE_DS")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"DS_QUANTILES_SKETCH")," functions can fail with an ",(0,r.kt)("inlineCode",{parentName:"p"},"IllegalStateException")," if one of the sketches for\nthe query hits ",(0,r.kt)("inlineCode",{parentName:"p"},"maxStreamLength"),": the maximum number of items to store in each sketch.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/druid/issues/11544"},"GitHub issue 11544")," for more details.\nTo workaround the issue, increase value of the maximum string length with the ",(0,r.kt)("inlineCode",{parentName:"p"},"approxQuantileDsMaxStreamLength")," parameter\nin the query context. Since it is set to 1,000,000,000 by default, you don't need to override it in most cases.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://datasketches.apache.org/docs/Quantiles/OrigQuantilesSketch"},"accuracy information")," in the DataSketches documentation for how many bytes are required per stream length.\nThis query context  parameter is a temporary solution to avoid the known issue. It may be removed in a future release after the bug is fixed."),(0,r.kt)("h2",{id:"unsupported-features"},"Unsupported features"),(0,r.kt)("p",null,"Druid does not support all SQL features. In particular, the following features are not supported."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JOIN between native datasources (table, lookup, subquery) and ",(0,r.kt)("a",{parentName:"li",href:"/docs/30.0.1/querying/sql-metadata-tables"},"system tables"),"."),(0,r.kt)("li",{parentName:"ul"},"JOIN conditions that are not an equality between expressions from the left- and right-hand sides."),(0,r.kt)("li",{parentName:"ul"},"JOIN conditions containing a constant value inside the condition."),(0,r.kt)("li",{parentName:"ul"},"JOIN conditions on a column which contains a multi-value dimension."),(0,r.kt)("li",{parentName:"ul"},"ORDER BY for a non-aggregating query, except for ",(0,r.kt)("inlineCode",{parentName:"li"},"ORDER BY __time")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"ORDER BY __time DESC"),", which are supported.\nThis restriction only applies to non-aggregating queries; you can ORDER BY any column in an aggregating query."),(0,r.kt)("li",{parentName:"ul"},"DDL and DML."),(0,r.kt)("li",{parentName:"ul"},"Using Druid-specific functions like ",(0,r.kt)("inlineCode",{parentName:"li"},"TIME_PARSE")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"APPROX_QUANTILE_DS")," on ",(0,r.kt)("a",{parentName:"li",href:"/docs/30.0.1/querying/sql-metadata-tables"},"system tables"),".")),(0,r.kt)("p",null,"Additionally, some Druid native query features are not supported by the SQL language. Some unsupported Druid features\ninclude:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/30.0.1/querying/datasource#inline"},"Inline datasources"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/30.0.1/querying/geo"},"Spatial filters"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/30.0.1/querying/sql-data-types#multi-value-strings"},"Multi-value dimensions")," are only partially implemented in Druid SQL. There are known\ninconsistencies between their behavior in SQL queries and in native queries due to how they are currently treated by\nthe SQL planner.")))}y.isMDXComponent=!0}}]);