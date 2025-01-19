"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[3462],{5135:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=n(5893),c=n(1151);const a={title:"ActiveJ 5.1 - Boot and ActiveJ FS improvements",hide_table_of_contents:!1},o=void 0,s={permalink:"/blog/2022/01/04/v5.1",source:"@site/blog/2022-01-04-v5.1.md",title:"ActiveJ 5.1 - Boot and ActiveJ FS improvements",description:"ActiveJ v5.1 was released Jan 4,",date:"2022-01-04T00:00:00.000Z",formattedDate:"January 4, 2022",tags:[],readingTime:.535,hasTruncateMarker:!1,authors:[],frontMatter:{title:"ActiveJ 5.1 - Boot and ActiveJ FS improvements",hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"ActiveJ 5.2 - Minor improvements",permalink:"/blog/2022/04/19/v5.2"},nextItem:{title:"ActiveJ 5.0 - New major release",permalink:"/blog/2021/10/29/v5.0"}},r={authorsImageUrls:[]},l=[];function d(e){const t={a:"a",code:"code",li:"li",p:"p",ul:"ul",...(0,c.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["ActiveJ v5.1 was released Jan 4,\n2022 (",(0,i.jsx)(t.a,{href:"https://mvnrepository.com/artifact/io.activej/activej/5.1",children:"see on Maven"}),"). This release includes\nimprovements to ",(0,i.jsx)(t.a,{href:"/fs",children:"ActiveJ FS"}),", ",(0,i.jsx)(t.a,{href:"/inject",children:"ActiveJ Inject"})," and ",(0,i.jsx)(t.a,{href:"/boot/launcher",children:"boot"})," modules in general."]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/inject",children:"ActiveJ Inject"})," and ",(0,i.jsx)(t.a,{href:"/boot/launcher",children:"boot"})," modules","\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://github.com/hoangtien2k3/reactify-core/blob/v5.1/boot-triggers/src/main/java/io/activej/trigger/TriggersModule.java",children:"TriggersModule"}),"\nnow properly handles ",(0,i.jsx)(t.a,{href:"/inject/optional-dependencies",children:"optional dependencies"})]}),"\n",(0,i.jsxs)(t.li,{children:["Nested optional dependencies (e.g. ",(0,i.jsx)(t.code,{children:"OptionalDependency<OptionalDependency<?>>"}),") are prohibited"]}),"\n",(0,i.jsx)(t.li,{children:"Services (as well as those obtained from an optional dependencies) are guaranteed to start/stop exactly once"}),"\n",(0,i.jsxs)(t.li,{children:["Added shortcuts for obtaining optional dependencies from ",(0,i.jsx)(t.a,{href:"https://github.com/hoangtien2k3/reactify-core/blob/v5.1/core-inject/src/main/java/io/activej/inject/Injector.java",children:"Injector"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"/fs",children:"ActiveJ FS"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Added a new ",(0,i.jsx)(t.a,{href:"https://github.com/hoangtien2k3/reactify-core/blob/v5.1/cloud-fs/src/main/java/io/activej/fs/exception/ActiveFsStructureException.java",children:"exception"})," to\nindicate errors in a structure of a file system."]}),"\n",(0,i.jsxs)(t.li,{children:["Added a precondition that checks whether local file systems (",(0,i.jsx)(t.a,{href:"https://github.com/hoangtien2k3/reactify-core/blob/v5.1/cloud-fs/src/main/java/io/activej/fs/LocalActiveFs.java",children:"LocalActiveFs"})," and\n",(0,i.jsx)(t.a,{href:"https://github.com/hoangtien2k3/reactify-core/blob/v5.1/cloud-fs/src/main/java/io/activej/fs/LocalBlockingFs.java",children:"LocalBlockingFs"}),") were started before being used."]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var i=n(7294);const c={},a=i.createContext(c);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);