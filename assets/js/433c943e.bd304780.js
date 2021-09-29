"use strict";(self.webpackChunkdev_wiki=self.webpackChunkdev_wiki||[]).push([[659],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return g}});var n=i(7294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function d(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),p=c(i),g=r,f=p["".concat(l,".").concat(g)]||p[g]||s[g]||o;return i?n.createElement(f,a(a({ref:t},u),{},{components:i})):n.createElement(f,a({ref:t},u))}));function g(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=i.length,a=new Array(o);a[0]=p;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d.mdxType="string"==typeof e?e:r,a[1]=d;for(var c=2;c<o;c++)a[c]=i[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"},5010:function(e,t,i){i.r(t),i.d(t,{frontMatter:function(){return d},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var n=i(7462),r=i(3366),o=(i(7294),i(3905)),a=["components"],d={sidebar_position:4},l="git \u7cfb\u7d71\u4e2d\u7684\u6a94\u6848\u72c0\u614b",c={unversionedId:"howToUseGit/gitFileStatus",id:"howToUseGit/gitFileStatus",isDocsHomePage:!1,title:"git \u7cfb\u7d71\u4e2d\u7684\u6a94\u6848\u72c0\u614b",description:"\u7576\u8a2d\u5b9agit\u7684repo\u4e4b\u5f8c\uff0c\u7cfb\u7d71\u4fbf\u4ee5repo\u7684\u6839\u76ee\u9304\u6240\u5728\u4f86\u6aa2\u6e2c\u7576\u4e0b\u76ee\u9304\u6240\u64c1\u6709\u7684\u6a94\u6848\u548c\u76ee\u9304\u662f\u5728\u54ea\u4e00\u500b\u6a94\u6848\u72c0\u614b\uff0c\u800c\u9019\u500b\u6a94\u6848\u72c0\u614b\u662f\u7531git\u7cfb\u7d71\u6240\u6c7a\u5b9a\uff0c\u57fa\u672c\u4e0a\u6703\u5206\u70ba\u4e94\u7a2e\uff1aUntracked\u3001Tracked\u3001Unmodified\u3001Modified\u3001Staged\uff0c\u5728\u672c\u6587\u7ae0\u6703\u5206\u5225\u63cf\u8ff0\u9019\u56db\u7a2e\u72c0\u614b\u4ee5\u53ca\u72c0\u614b\u4e4b\u9593\u7684\u8f49\u63db\u3002",source:"@site/docs/howToUseGit/gitFileStatus.md",sourceDirName:"howToUseGit",slug:"/howToUseGit/gitFileStatus",permalink:"/howToUseGit/gitFileStatus",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/howToUseGit/gitFileStatus.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"docsSidebar",previous:{title:"git \u5132\u5b58\u8cc7\u6599\u65b9\u5f0f\u548c\u5132\u5b58\u7a7a\u9593",permalink:"/howToUseGit/gitStorage"},next:{title:"\u63d0\u4ea4\u7248\u672c\u6e96\u5247",permalink:"/howToUseGit/howToCommit"}},u=[{value:"untracked",id:"untracked",children:[]},{value:"Tracked",id:"tracked",children:[]},{value:"Unmodified",id:"unmodified",children:[]},{value:"Modified",id:"modified",children:[]},{value:"Staged",id:"staged",children:[]},{value:"Relationship betweeen them",id:"relationship-betweeen-them",children:[]},{value:"\u82e5\u4f7f\u7528git status\u4f86\u8abf\u67e5",id:"\u82e5\u4f7f\u7528git-status\u4f86\u8abf\u67e5",children:[]}],s={toc:u};function p(e){var t=e.components,i=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"git-\u7cfb\u7d71\u4e2d\u7684\u6a94\u6848\u72c0\u614b"},"git \u7cfb\u7d71\u4e2d\u7684\u6a94\u6848\u72c0\u614b"),(0,o.kt)("p",null,"\u7576\u8a2d\u5b9agit\u7684repo\u4e4b\u5f8c\uff0c\u7cfb\u7d71\u4fbf\u4ee5repo\u7684\u6839\u76ee\u9304\u6240\u5728\u4f86\u6aa2\u6e2c\u7576\u4e0b\u76ee\u9304\u6240\u64c1\u6709\u7684\u6a94\u6848\u548c\u76ee\u9304\u662f\u5728\u54ea\u4e00\u500b\u6a94\u6848\u72c0\u614b\uff0c\u800c\u9019\u500b\u6a94\u6848\u72c0\u614b\u662f\u7531git\u7cfb\u7d71\u6240\u6c7a\u5b9a\uff0c\u57fa\u672c\u4e0a\u6703\u5206\u70ba\u4e94\u7a2e\uff1aUntracked\u3001Tracked\u3001Unmodified\u3001Modified\u3001Staged\uff0c\u5728\u672c\u6587\u7ae0\u6703\u5206\u5225\u63cf\u8ff0\u9019\u56db\u7a2e\u72c0\u614b\u4ee5\u53ca\u72c0\u614b\u4e4b\u9593\u7684\u8f49\u63db\u3002"),(0,o.kt)("h2",{id:"untracked"},"untracked"),(0,o.kt)("p",null,"\u672a\u88abgit\u8ffd\u8e64\u3001\u7248\u63a7(\u80fd\u5920\u900f\u904egit\u4f86\u63a7\u7ba1\u7248\u672c)\u7684\u72c0\u614b\uff0c\u901a\u5e38\u5728\u9019\u500b\u72c0\u614b\u4e0b\u662f\u4e0d\u6703\u51fa\u73fe\u5728repo\u7684\u6700\u65b0\u7248\u672c\u7d00\u9304\u4ee5\u53caStaging Area\u4e2d\u3002"),(0,o.kt)("h2",{id:"tracked"},"Tracked"),(0,o.kt)("p",null,"\u88abgit\u6240\u8ffd\u8e64\u3001\u80fd\u88ab\u7248\u63a7\u7684\u72c0\u614b\uff0c\u901a\u5e38\u6703\u662f\u80fd\u5728repo\u7684\u6700\u65b0\u7248\u672c\u7d00\u9304\u627e\u5230\u6216\u8005\u5df2\u7d93\u88ab\u653e\u5165Staging Area\u4e2d\u3002"),(0,o.kt)("h2",{id:"unmodified"},"Unmodified"),(0,o.kt)("p",null,"\u80fd\u88abgit\u6240\u8ffd\u8e64\u3001\u80fd\u88ab\u7248\u63a7\u7684\u72c0\u614b\uff0c\u53ea\u662f\u5167\u5bb9\u8207\u6700\u65b0\u7248\u672c\u7d00\u9304\u4e00\u6a23\u3002"),(0,o.kt)("h2",{id:"modified"},"Modified"),(0,o.kt)("p",null,"\u80fd\u88abgit\u6240\u8ffd\u8e64\u3001\u80fd\u88ab\u7248\u63a7\u7684\u72c0\u614b\uff0c\u5167\u5bb9\u8207\u6700\u65b0\u7248\u672c\u7d00\u9304\u4e0d\u4e00\u6a23\uff0c\u986f\u793a\u8b8a\u66f4\u3002"),(0,o.kt)("h2",{id:"staged"},"Staged"),(0,o.kt)("p",null,"\u88ab\u653e\u5165Staging Area\u4e14\u6e96\u5099\u63d0\u4ea4\u7684\u72c0\u614b\u3002"),(0,o.kt)("h2",{id:"relationship-betweeen-them"},"Relationship betweeen them"),(0,o.kt)("p",null,"\u5728\u9019\u88e1\u6211\u5011\u4ee5Untracked\u3001Unmodified\u3001Modified\u3001Staged\u9019\u56db\u7a2e\u72c0\u614b\u4f86\u8aaa\u660e\u56db\u7a2e\u9593\u662f\u5982\u4f55\u8f49\u63db\u72c0\u614b\uff0c\u7576\u76ee\u6a19\u7684\u72c0\u614b\u662funtracked\uff0c\u53ef\u4ee5\u900f\u904egit add\u6307\u4ee4\u5c07\u72c0\u614b\u8f49\u70bastaged\uff0c\u800cUnmodified\u548cModified\u53ea\u6709\u5728\u76ee\u6a19\u5df2\u5728\u6700\u65b0\u7248\u672c\u7d00\u9304\u4e2d\u624d\u6703\u6709\u7684\u72c0\u614b\uff0c\u524d\u8005\u53ea\u8981\u5167\u5bb9\u6709\u505a\u8b8a\u66f4\u5c31\u6703\u8f49\u79fb\u81f3Modified\uff0c\u800c\u82e5\u76ee\u6a19\u88ab\u79fb\u9664\u7684\u8a71\uff0c\u72c0\u614b\u5c31\u76f4\u63a5\u5f9e\u7248\u672c\u7d00\u9304\u4e2d\u79fb\u9664\uff0c\u672a\u4f86\u82e5\u4ee5\u76f8\u540c\u76ee\u6a19\u540d\u7a31\u986f\u793a\u7684\u8a71\uff0c\u5247\u6703\u4ee5Untracked\u4f86\u986f\u793a\uff0c\u800cModified\u72c0\u614b\u53ea\u6709\u5728git add\u6216\u8005\u88ab\u653e\u5165staging area\u4e2d\u624d\u6703\u8f49\u79fb\u81f3Staged\uff0c\u800cStaged\u72c0\u614b\u5247\u662f\u53ea\u6709git commit\u624d\u6703\u8f49\u79fb\u6210Unmodified\u72c0\u614b\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dqfxgtyoi/image/upload/v1632583252/blog/git/lifecycle_kxzc2i.png",alt:null})),(0,o.kt)("h2",{id:"\u82e5\u4f7f\u7528git-status\u4f86\u8abf\u67e5"},"\u82e5\u4f7f\u7528git status\u4f86\u8abf\u67e5"),(0,o.kt)("p",null,"\u5982\u984c\uff0c\u5176\u986f\u793a\u72c0\u614b\u6703\u6709\u56db\u7a2e\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Untracked file\uff1a\u6c92\u88abgit\u7248\u63a7\u3001\u8ffd\u8e64\u7684\u72c0\u614b"),(0,o.kt)("li",{parentName:"ol"},"Changes not staged for commit (modified)\uff1a\u6709\u88abgit\u8ffd\u8e64\u3001\u7248\u63a7\uff0c\u4f46\u5167\u5bb9\u8207\u6700\u65b0\u7684\u7248\u672c\u5167\u5bb9\u4e0d\u4e00\u81f4\u7684\u72c0\u614b"),(0,o.kt)("li",{parentName:"ol"},"Changes to be committed (staged) \uff1a\u88ab\u63d0\u4ea4\u81f3staging area\u4e26\u6e96\u5099\u88ab\u63d0\u4ea4\u81f3repo\u7684\u72c0\u614b "),(0,o.kt)("li",{parentName:"ol"},"Committed\uff1a\u88ab\u63d0\u4ea4\u81f3repo\u7684\u72c0\u614b")))}p.isMDXComponent=!0}}]);