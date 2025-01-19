"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[491],{8420:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(5893),i=n(1151);const o={title:"ActiveJ 4.3 - Small improvements for multiple modules",hide_table_of_contents:!1},r=void 0,s={permalink:"/blog/2021/05/28/v4.3",source:"@site/blog/2021-05-28-v4.3.md",title:"ActiveJ 4.3 - Small improvements for multiple modules",description:"ActiveJ v4.3 was released May 28,",date:"2021-05-28T00:00:00.000Z",formattedDate:"May 28, 2021",tags:[],readingTime:.535,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ActiveJ 4.3 - Small improvements for multiple modules",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"ActiveJ 5.0 - New major release",permalink:"/blog/2021/10/29/v5.0"},nextItem:{title:"ActiveJ 4.2 - Expanded functionality",permalink:"/blog/2021/04/13/v4.2"}},c={authorsImageUrls:[]},l=[];function d(e){const t={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["ActiveJ v4.3 was released May 28,\n2021 (",(0,a.jsx)(t.a,{href:"https://mvnrepository.com/artifact/io.activej/activej/4.3",children:"see on Maven"}),"). This release introduced\nsmall improvements for multiple modules."]}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:["Added new method ",(0,a.jsx)(t.code,{children:"onConnecting"})," to ",(0,a.jsx)(t.a,{href:"https://github.com/hoangtien2k3/reactify-core/blob/v4.3/core-http/src/main/java/io/activej/http/AsyncHttpClient.java",children:"AsyncHttpClient"}),"\n's ",(0,a.jsx)(t.code,{children:"Inspector"}),". Now, the number of connection that are being\nestablished can be monitored via ",(0,a.jsx)(t.code,{children:"JmxInspector#getConnecting"})," attribute"]}),"\n",(0,a.jsx)(t.li,{children:"When HTTP connection closes, the proper exception is propagated to HTTP request and response body suppliers"}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/hoangtien2k3/reactify-core/blob/v4.3/core-eventloop/src/main/java/io/activej/eventloop/inspector/ThrottlingController.java",children:"ThrottlingController"}),"\nnow throttles all the processing if tasks consecutively execute for abnormally long time"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/hoangtien2k3/reactify-core/blob/v4.3/core-datastream/src/main/java/io/activej/datastream/ForwardingStreamSupplier.java",children:"ForwardingStreamSupplier"}),"\nnow correctly binds peer ",(0,a.jsx)(t.code,{children:"StreamSupplier"})," to ",(0,a.jsx)(t.code,{children:"StreamConsumer"})]}),"\n",(0,a.jsxs)(t.li,{children:["Fixed asynchronous recursion in ",(0,a.jsx)(t.a,{href:"https://github.com/hoangtien2k3/reactify-core/blob/v4.3/core-datastream/src/main/java/io/activej/datastream/csp/ChannelSerializer.java",children:"ChannelSerializer"})]}),"\n",(0,a.jsxs)(t.li,{children:["Missing measures in ",(0,a.jsx)(t.a,{href:"https://github.com/hoangtien2k3/reactify-core/blob/v4.3/extra/cloud-lsmt-aggregation/src/main/java/io/activej/aggregation/Aggregation.java",children:"Aggregation"}),"\nare initialized with default 'zero' values"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"https://github.com/hoangtien2k3/reactify-core/blob/v4.3/extra/cloud-lsmt-aggregation/src/main/java/io/activej/aggregation/measure/HyperLogLog.java",children:"HyperLogLog"}),"\nnow correctly adds ",(0,a.jsx)(t.code,{children:"int"})," values"]}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var a=n(7294);const i={},o=a.createContext(i);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);