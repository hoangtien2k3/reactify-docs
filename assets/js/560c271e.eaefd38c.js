"use strict";(self.webpackChunkactivejdocs=self.webpackChunkactivejdocs||[]).push([[9255],{925:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var t=i(5893),o=i(1151),a=i(7618),r=i(7815);const s={title:"ActiveJ | Config, efficiently manage application configuration and property values",description:"Efficiently manage your application configurations and properties values with ActiveJ Config",sidebar_label:"Config",keywords:["configs","application configs","save configs","application configuration","java","java framework","java for beginners"]},c="Config",l={id:"boot/config",title:"ActiveJ | Config, efficiently manage application configuration and property values",description:"Efficiently manage your application configurations and properties values with ActiveJ Config",source:"@site/docs/boot/config.mdx",sourceDirName:"boot",slug:"/boot/config",permalink:"/boot/config",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"ActiveJ | Config, efficiently manage application configuration and property values",description:"Efficiently manage your application configurations and properties values with ActiveJ Config",sidebar_label:"Config",keywords:["configs","application configs","save configs","application configuration","java","java framework","java for beginners"]},sidebar:"docs",previous:{title:"Workers",permalink:"/boot/workers"},next:{title:"Overview",permalink:"/http"}},d={},p=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"Example",id:"example",level:2}];function f(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"config",children:"Config"}),"\n",(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Config"})," is a useful tool for configuring application components. It can collect provided configuration from files, class path, system properties, etc.\nThe configuration can then be transformed, overwritten, logged in the runtime."]}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Using a set of standard data converters to/from a config"}),"\n",(0,t.jsx)(n.li,{children:"Ability to specify default values for properties"}),"\n",(0,t.jsx)(n.li,{children:"Ability to save all used properties into a file"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.admonition,{type:"note",children:[(0,t.jsx)(n.p,{children:"To run the examples, you need to clone ActiveJ from GitHub"}),(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/hoangtien2k3/reactify-core\n"})}),(0,t.jsxs)(n.p,{children:["And import it as a Maven project. Check out tag ",(0,t.jsx)(n.strong,{children:(0,t.jsx)(r.Z,{name:"currentVersion"})}),". Before running the examples, build the project.\nThese examples are located at ",(0,t.jsx)(n.code,{children:"activej/examples/core/boot"})]})]}),"\n",(0,t.jsxs)(n.p,{children:["An example of providing configs to your application with ",(0,t.jsx)(a.Z,{url:"/boot-config/src/main/java/io/activej/config/Config.java",children:(0,t.jsx)(n.code,{children:"Config"})})]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",metastring:"url=/examples/core/boot/src/main/java/ConfigModuleExample.java tag=EXAMPLE",children:'public final class ConfigModuleExample {\n  private static final String PROPERTIES_FILE = "example.properties";\n\n  public static void main(String[] args) {\n    Injector injector = Injector.of(ModuleBuilder.create()\n      .bind(Config.class).to(() -> Config.ofClassPathProperties(PROPERTIES_FILE))\n      .bind(String.class).to(c -> c.get("phrase"), Config.class)\n      .bind(Integer.class).to(c -> c.get(ofInteger(), "number"), Config.class)\n      .bind(InetAddress.class).to(c -> c.get(ofInetAddress(), "address"), Config.class)\n      .build());\n\n    System.out.println(injector.getInstance(String.class));\n    System.out.println(injector.getInstance(Integer.class));\n    System.out.println(injector.getInstance(InetAddress.class));\n  }\n}\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:(0,t.jsx)(a.Z,{url:"/examples/core/boot/src/main/java/ConfigModuleExample.java",children:"See full example on GitHub"})})})]})}function u(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},7618:(e,n,i)=>{i.d(n,{Z:()=>a});i(7294);var t=i(9962),o=i(5893);const a=e=>{let{url:n,text:i,isInline:a=!0,children:r}=e;const{siteConfig:s}=(0,t.Z)(),c=n.startsWith("/examples")?s.customFields.githubExamplesBranch:s.customFields.githubBranch;return(0,o.jsx)("a",{style:a?{}:{display:"block",marginBottom:"16px"},href:s.customFields.githubUrl+"/"+c+n,target:"_blank",children:i||r})}},7815:(e,n,i)=>{i.d(n,{Z:()=>o});i(7294);var t=i(9962);const o=e=>{let{name:n}=e;const{siteConfig:i}=(0,t.Z)();if(!n)throw new Error("Variable name is required");if(void 0===i.customFields[n])throw new Error(`Variable ${n} not exist`);return i.customFields[n]}},1151:(e,n,i)=>{i.d(n,{Z:()=>s,a:()=>r});var t=i(7294);const o={},a=t.createContext(o);function r(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);