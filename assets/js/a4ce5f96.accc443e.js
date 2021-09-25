"use strict";(self.webpackChunkdev_wiki=self.webpackChunkdev_wiki||[]).push([[150],{9973:function(t,i,e){e.r(i),e.d(i,{frontMatter:function(){return p},contentTitle:function(){return r},metadata:function(){return s},toc:function(){return g},default:function(){return d}});var o=e(7462),l=e(3366),n=(e(7294),e(3905)),a=["components"],p={sidebar_position:2},r="git \u5132\u5b58\u8cc7\u6599\u65b9\u5f0f\u548c\u5132\u5b58\u7a7a\u9593",s={unversionedId:"howToUseGit/gitStorage",id:"howToUseGit/gitStorage",isDocsHomePage:!1,title:"git \u5132\u5b58\u8cc7\u6599\u65b9\u5f0f\u548c\u5132\u5b58\u7a7a\u9593",description:"\u5728\u672c\u6587\u7ae0\u6703\u76f4\u63a5\u8ad6\u8ff0\u8457git\u662f\u5982\u4f55\u5132\u5b58\u6bcf\u4e00\u6b21\u7248\u672c\u7684\u8cc7\u6599\u4ee5\u53ca\u5b83\u6240\u64c1\u6709\u7684\u5132\u5b58\u7a7a\u9593\u6709\u90a3\u4e9b\uff0c\u524d\u8005\u6703\u5728\u7b2c\u4e00\u5c0f\u7bc0\u63cf\u8ff0\uff0c\u5f8c\u8005\u5247\u7531\u7b2c\u4e8c\u5c0f\u7bc0\u4f86\u63cf\u8ff0\u3002",source:"@site/docs/howToUseGit/gitStorage.md",sourceDirName:"howToUseGit",slug:"/howToUseGit/gitStorage",permalink:"/howToUseGit/gitStorage",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/docs/howToUseGit/gitStorage.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"docsSidebar",previous:{title:"\u5e38\u898b\u6307\u4ee4",permalink:"/howToUseGit/generalCMD"},next:{title:"git \u7cfb\u7d71\u4e2d\u7684\u6a94\u6848\u72c0\u614b",permalink:"/howToUseGit/gitFileStatus"}},g=[{value:"git \u5132\u5b58\u8cc7\u6599\u7684\u65b9\u5f0f",id:"git-\u5132\u5b58\u8cc7\u6599\u7684\u65b9\u5f0f",children:[{value:"File Snapshot",id:"file-snapshot",children:[]},{value:"git snapshot",id:"git-snapshot",children:[]}]},{value:"\u672c\u5730\u7aef\u7684git\u7cfb\u7d71",id:"\u672c\u5730\u7aef\u7684git\u7cfb\u7d71",children:[{value:"Working directory",id:"working-directory",children:[]},{value:"Staging area",id:"staging-area",children:[]},{value:"Repository",id:"repository",children:[]},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",children:[]}]}],u={toc:g};function d(t){var i=t.components,e=(0,l.Z)(t,a);return(0,n.kt)("wrapper",(0,o.Z)({},u,e,{components:i,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"git-\u5132\u5b58\u8cc7\u6599\u65b9\u5f0f\u548c\u5132\u5b58\u7a7a\u9593"},"git \u5132\u5b58\u8cc7\u6599\u65b9\u5f0f\u548c\u5132\u5b58\u7a7a\u9593"),(0,n.kt)("p",null,"\u5728\u672c\u6587\u7ae0\u6703\u76f4\u63a5\u8ad6\u8ff0\u8457git\u662f\u5982\u4f55\u5132\u5b58\u6bcf\u4e00\u6b21\u7248\u672c\u7684\u8cc7\u6599\u4ee5\u53ca\u5b83\u6240\u64c1\u6709\u7684\u5132\u5b58\u7a7a\u9593\u6709\u90a3\u4e9b\uff0c\u524d\u8005\u6703\u5728\u7b2c\u4e00\u5c0f\u7bc0\u63cf\u8ff0\uff0c\u5f8c\u8005\u5247\u7531\u7b2c\u4e8c\u5c0f\u7bc0\u4f86\u63cf\u8ff0\u3002"),(0,n.kt)("h2",{id:"git-\u5132\u5b58\u8cc7\u6599\u7684\u65b9\u5f0f"},"git \u5132\u5b58\u8cc7\u6599\u7684\u65b9\u5f0f"),(0,n.kt)("p",null,"git \u4e0d\u50cf\u5176\u4ed6\u7248\u672c\u63a7\u5236\u7cfb\u7d71\u90a3\u6a23\uff0c\u6bcf\u500b\u7248\u672c\u53ea\u55ae\u7d14\u5b58\u653e\u4fee\u6539\u5167\u5bb9\uff0c\u7576\u8981\u5230\u6307\u5b9a\u7248\u672c\u6642\u4fbf\u6703\u532f\u96c6\u4ee5\u53ca\u8655\u7406\u4f86\u9054\u6210\uff0cgit\u6703\u4f7f\u7528snapshot\u6280\u8853\u4f86\u5b58\u653e\u6bcf\u4e00\u6b21\u7248\u672c\u5167\u5bb9\uff0c\u800c\u9019\u500bsnapshot\u6280\u8853\u5247\u662f\u4ee5File snapshot\u4f5c\u70ba\u57fa\u790e\u4f86\u4fee\u6539\uff0c\u6240\u4ee5\u5728\u9019\u5c0f\u7bc0\u4e2d\u6703\u5148\u4ee5File snapshot\u4f86\u8aaa\u660e\uff0c\u4e26\u4e14\u518d\u6b63\u5f0f\u63cf\u8ff0git snapshot\u672c\u8eab\u662f\u4ec0\u9ebc\u3002"),(0,n.kt)("h3",{id:"file-snapshot"},"File Snapshot"),(0,n.kt)("p",null,"File snapshot\u662f\u91dd\u5c0d\u4e00\u500b\u6a94\u6848\u4f86\u7d00\u9304\u5b83\u5728\u4e0d\u540c\u6642\u9593\u9ede\u4e0b\u7684\u5167\u5bb9\u7d00\u9304\uff0c\u6bcf\u4e00\u500b\u6642\u9593\u9ede\u4e0b\u7684\u6a94\u6848\u5167\u5bb9\u90fd\u6703\u88ab\u7d00\u9304\uff0c\u800c\u9019\u4e9b\u5167\u5bb9\u53c8\u5982\u540c\u7d00\u9304\u67d0\u500b\u6642\u6bb5\u7684\u76f8\u7247(snapshot)\uff0c\u6545\u7a31\u4e4b\u70basnapshot\uff0c\u4f46\u7531\u65bc\u9019\u9805\u6280\u8853\u662f\u7d00\u9304\u7279\u5b9a\u6a94\u6848\u5728\u4e0d\u540c\u6642\u9593\u9ede\u7684\u5167\u5bb9\uff0c\u6240\u4ee5\u82e5\u53ea\u662f\u55ae\u7d14\u63a1\u7528\u8907\u88fd\u7684\u65b9\u6cd5\u4f86\u5be6\u73fe\uff0c\u6703\u9020\u6210\u7cfb\u7d71\u5f88\u591a\u8ca0\u64d4\uff0c\u800c\u4e14\u9019\u4e9b\u5167\u5bb9\u5927\u90e8\u5206\u90fd\u662f\u91cd\u8907\u7684\uff0c\u6240\u4ee5\u6703\u63a1\u53d6\u5167\u5bb9\u5171\u4eab\u7684\u624b\u6bb5\u4f86\u5927\u5e45\u5ea6\u6e1b\u5c11\u7cfb\u7d71\u8ca0\u64d4\uff0c\u6211\u5011\u4ee5\u4e00\u500b\u4f8b\u5b50\u4f86\u8aaa\u660e\uff0c\u5728\u9019\u88e1\u6211\u5011\u5efa\u7acb\u4e00\u500b\u540d\u70baFile 1\u7684\u6a94\u6848\u5167\u5bb9\uff0c\u5176\u5167\u5bb9\u6703\u76f4\u63a5\u4ee5\u985e\u4f3cby reference\u6216\u8005\u6307\u6a19\u7684\u5f62\u5f0f\u6307\u5411\n\u5728\u786c\u789f(Disk)\u7684\u5be6\u969b\u5167\u5bb9\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dqfxgtyoi/image/upload/v1632575615/blog/git/anExample_createFile1_l14ho0.png",alt:null})),(0,n.kt)("p",null,"\u800c\u7576\u6211\u5011\u5c0dFile 1\u9032\u884c\u6240\u8b02\u5171\u4eab\u4f86\u7372\u53d6snapshot\u6642\uff0c\u6703\u751f\u6210\u53e6\u4e00\u500b\u540d\u70baFile 2\u6a94\u6848(\u540d\u7a31\u53ef\u4ee5\u662f\u540c\u540d)\uff0c\u5176\u5167\u5bb9\u6703\u76f4\u63a5\u4ee5\u985e\u4f3c\u65bcby reference\u65b9\u5f0f\u6216\u8005\u4ee5\u6307\u6a19\u7684\u5f62\u5f0f\u4f86\u6307\u5411File 1\u6a94\u6848\u5167\u5bb9\u7684\u8a18\u61b6\u9ad4\u4f4d\u5740\u6240\u5728\uff0c"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dqfxgtyoi/image/upload/v1632575634/blog/git/anExample_snapshot_lm3qcm.png",alt:null})),(0,n.kt)("p",null,"\u8b93File 2\u4e0d\u7528\u518d\u5411\u7cfb\u7d71\u8981\u4e00\u584a\u786c\u789f\u7a7a\u9593\u53bb\u5b58\u653eFile1 \u5167\u5bb9\uff0c\u800c\u662f\u76f4\u63a5\u50cf\u4e0a\u5716\u90a3\u6a23\uff0c\u5169\u500b\u6a94\u6848\u90fd\u5171\u4eab\u8457\u540c\u500b\u5167\u5bb9\uff0c\u5c0d\u65bcFile 1\u800c\u8a00\uff0c File 2 \u662f\u4ee5File 1\u7684\u5167\u5bb9\u4f5c\u70basnapshot\u4f86\u9032\u884c\u76f8\u95dc\u7684\u4fee\u6539"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dqfxgtyoi/image/upload/v1632575959/blog/git/anExample_copyfile_iovmhc.png",alt:null})),(0,n.kt)("p",null,"\u7576File 2\u60f3\u8981\u5c0d\u5171\u4eab\u5167\u5bb9\u505a\u8b8a\u66f4\u6642\uff0c\u7cfb\u7d71\u6703\u4ee5copy on write\u7684\u5f62\u5f0f\u4f86\u5411\u7cfb\u7d71\u8981\u584a\u786c\u789f\u7a7a\u9593\u53bb\u5b58\u653e\u9019\u4e9b\u8b8a\u66f4\u5167\u5bb9\uff0c\u800c\u975e\u6574\u584a\u6a94\u6848\u5167\u5bb9\uff0c\u5728\u9019\u88e1File 2\u5167\u5bb9\u9084\u662f\u6703\u4ecd\u6307\u5411\u5b58\u653eFile 1\u5167\u5bb9\u7684\u786c\u789f\u4f4d\u5740\uff0c\u4f46\u6703\u589e\u52a0\u540d\u70baChanges\u7684\u6307\u6a19\u53bb\u6307\u5411\u5b58\u653e\u8b8a\u66f4\u5167\u5bb9\u7684\u786c\u789f\u5340\u584a\uff0c\u540c\u6a23\u5730\uff0cFile 1\u672c\u8eab\u4e5f\u80fd\u505a\u9019\u6a23\u5b50\u7684\u66f4\u6539\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dqfxgtyoi/image/upload/v1632576922/blog/git/anExample_copyonwrite_scoduu.png",alt:null})),(0,n.kt)("p",null,"\u82e5\u9084\u6709\u7b2c\u4e09\u500b\u6a94\u6848File 3\u7684\u8a71\uff0c\u90a3\u5c31\u8981\u8003\u616e\u5b83\u4ee5\u4ec0\u9ebc\u6a94\u6848\u5167\u5bb9\u4f86\u7576snapshot\uff0c\u82e5\u9084\u662f\u628aFile 1\u7684\u6a94\u6848\u5167\u5bb9\u7576\u4f5csnapshot\u7684\u8a71\uff0c\u539f\u5247\u4e0a\u6703\u5982\u540cFile 2\u90a3\u6a23\u5171\u4eabFile 1\u5167\u5bb9\u4e26\u5b58\u653e\u8b8a\u66f4\u5167\u5bb9\uff0c\u4f46\u82e5\u662f\u4ee5File 2\u70ba\u4e3b\u7684\u8a71\uff0cFile 3\u7684\u5167\u5bb9\u6703\u6307\u5411File 2\u6240\u6307\u5411\u7684\u5167\u5bb9\u4ee5\u53ca\u5b83\u6240\u4fee\u6539\u7684\u5167\u5bb9\uff0c\u800cFile 3\u7684\u8b8a\u66f4\u5167\u5bb9\u5247\u662f\u6307\u5411\u5b58\u653e\u5c0dFile 2\u9032\u884c\u8b8a\u66f4\u7684\u5167\u5bb9\u4e4b\u786c\u789f\u5340\u584a\u3002\u82e5\u9084\u6709\u5176\u4ed6\u6a94\u6848\u5982\u540cFile 3\u90a3\u6a23\u5ef6\u7e8c\u8457\u4ee5\u524d\u4e00\u500b\u6a94\u6848\u4f86\u7576\u4f5csnapshot\u4f86\u4fee\u6539\u7684\u8a71\uff0c\u6703\u5982\u540cFile 3\u4f86\u6307\u5411\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dqfxgtyoi/image/upload/v1632578989/blog/git/anotherExample_copyonwrite_uexl15.png",alt:null})),(0,n.kt)("h3",{id:"git-snapshot"},"git snapshot"),(0,n.kt)("p",null,"git\u5728repo\u5b58\u653e\u7684\u6bcf\u4e00\u500b\u7248\u672c\u7684\u8cc7\u6599\u5f62\u5f0f\u6703\u662f\u4ee5\u985e\u4f3c\u65bcfile snapshot\u7684\u5f62\u5f0f\u4f86\u9032\u884c\uff0c\u6bcf\u4e00\u500b\u7248\u672c\u6703\u662f\u4ee5\u524d\u4e00\u500b\u7248\u672c\u4f5c\u70basnapshot\u4f86\u4fee\u6539\uff0c\u6211\u5011\u4ee5\u4e00\u500b\u4f8b\u5b50\u4f86\u8aaa\u660e\uff0c\u9996\u5148\u6211\u5011\u5148\u5efa\u7acb\u4e00\u500brepo\u4e26\u653e\u5165\u4e09\u500b\u6a94\u6848\uff0c\u5206\u5225\u70baFile 1\u3001File 2\u3001File 3\uff0c\u63a5\u8457\u5c0d\u4ed6\u5011\u9032\u884cadd\u548ccommit\u4f86\u63d0\u4ea4\u7b2c\u4e00\u6b21\u7684\u7248\u672c\uff0c\u5132\u5b58\u5f62\u5f0f\u6703\u662f\u4ee5\u5b8c\u6574\u6a94\u6848\u4f86\u5b58\u653e\uff0c\u63a5\u8457\u7576\u6211\u5011\u5c0d\u8457\u4e09\u500b\u6a94\u6848\u505a\u4e86\u4e00\u4e9b\u5c0f\u4fee\u6539\u6642\uff0c\u4e26\u4e14add\u4ee5\u53cacommit\u4f86\u63d0\u4ea4\u7b2c\u4e8c\u6b21\u7684\u7248\u672c\uff0c\u9019\u6642\u7b2c\u4e8c\u6b21\u7684\u7248\u672c\u5167\u5bb9\u5c07\u4e0d\u6703\u662f\u4ee5\u5b8c\u6574\u5167\u5bb9\u4f86\u5b58\u653e\uff0c\u6bcf\u500b\u6a94\u6848\u6709\u5206\u70basnapshot\u4ee5\u53caChanges((snapshot \u548c Changes \u4e26\u975egit\u771f\u4ee5\u9019\u540d\u7a31\u4f86\u8aaa\u660e\uff0c\u5728\u9019\u88e1\u662f\u65b9\u4fbf\u89e3\u91cb\uff0c\u4f46\u6982\u5ff5\u4e0a\u662f\u4e00\u6a23\u7684)\uff0c\u800csnapshot\u6703\u76f4\u63a5\u6307\u5411\u524d\u4e00\u500b\u7248\u672c\u5167\u5bb9\u7684\u4f4d\u7f6e\uff0c\u4e5f\u5c31\u662f\u6307\u5411\u7b2c\u4e00\u500b\u7248\u672c\u7684\u5167\u5bb9\uff0c\u800c\u6bcf\u500b\u6a94\u6848\u90fd\u6703\u6307\u5411\u7b2c\u4e00\u500b\u7248\u672c\u7684\u5c0d\u61c9\u6a94\u6848\uff0c\u800cChanges\u5247\u662f\u5b58\u653e\u8457\u9019\u6b21\u7248\u672c\u4fee\u6539\u7684\u5167\u5bb9\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dqfxgtyoi/image/upload/v1632579687/blog/git/anExampleOfGitsnapshot_pjz1z2.png",alt:null})),(0,n.kt)("p",null,"\u82e5\u6709\u6a94\u6848\u6c92\u5728\u7b2c\u4e8c\u6b21\u7248\u672c\u505a\u4efb\u4f55\u4fee\u6539\u7684\u8a71\uff0c\u6703\u5982\u540c\u4e0b\u5716\u4e2d\u7684\u7b2c\u4e8c\u500b\u6a94\u6848\u90a3\u6a23\uff0c\u53ea\u6703\u6709\u6307\u5411\u524d\u4e00\u500b\u7248\u672c\u5167\u5bb9\u7684snapshot\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dqfxgtyoi/image/upload/v1632580141/blog/git/Gitsnapshot_file2nochange_y1ixl8.png",alt:null})),(0,n.kt)("p",null,"\u63a5\u8457\u82e5\u6211\u5011\u7e7c\u7e8c\u5c0d\u4e09\u500b\u6a94\u6848\u9032\u884c\u4fee\u6539\u7684\u8a71\uff0c\u4e26\u4e14\u63d0\u4ea4\u7b2c\u4e09\u6b21\u7684\u7248\u672c\uff0c\u9019\u6642\u7684\u7248\u672c\u5167\u5bb9\u5c07\u6703\u4ee5\u7b2c\u4e8c\u500b\u7248\u672c\u5167\u5bb9\u70ba\u4e3b\uff0c\u7b2c\u4e09\u500b\u7248\u672c\u4e0b\u6bcf\u500b\u6a94\u6848\u7684snapshot\u6703\u662f\u4ee5\u7b2c\u4e8c\u500b\u7248\u672c\u6240\u6307\u5411\u7684snapshot\u4ee5\u53ca\u7b2c\u4e8c\u500b\u7248\u672c\u7684\u4fee\u6539\u5167\u5bb9\uff0c\u800c\u7b2c\u4e09\u500b\u7248\u672c\u7684\u4fee\u6539\u5167\u5bb9\u6703\u4ee5Changes\u4f86\u5b58\u653e\uff0c\u62ffFile 1\u4f86\u8aaa\u7684\u8a71\uff0cFile 1\u7684snapshot\u6703\u4ee5\u7b2c\u4e8c\u7248\u672c\u7684File 1\u4f5c\u70basnapshot\u4f86\u4fee\u6539\u3002\n",(0,n.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dqfxgtyoi/image/upload/v1632580274/blog/git/Gitsnapshot_threeVersions_yg2es2.png",alt:null})),(0,n.kt)("h2",{id:"\u672c\u5730\u7aef\u7684git\u7cfb\u7d71"},"\u672c\u5730\u7aef\u7684git\u7cfb\u7d71"),(0,n.kt)("p",null,"\u7576\u5728\u672c\u5730\u7aef\u900f\u904egit init\u6216\u8005\u5229\u7528git clone\u4f86\u7522\u751f\u4e00\u500b\u65b0repo\u6642\uff0c\u6703\u4ee5\u5b58\u653e.git\u76ee\u9304\u4f5c\u70barepo\u7684\u6839\u76ee\u9304\uff0c\u800c\u9019\u500b\u6839\u76ee\u9304\u548c\u5176\u4e0b\u6a94\u6848/\u76ee\u9304\u7686\u7a31\u70ba\u5de5\u4f5c\u76ee\u9304(working directory/working tree)\uff0c\u6bcf\u7576\u5728\u76ee\u9304\u4e0b\u5c0d\u67d0\u4e9b\u5167\u5bb9\u4e0b\u9054git add\u6642\uff0c\u6703\u5c07\u5167\u5bb9\u5b58\u653e\u66ab\u5b58\u5340(Staging area)\uff0c\u63a5\u8457\u7576\u4e0b\u9054git commit\u6642\uff0c\u4fbf\u6703\u5c07\u66ab\u5b58\u5340\u7684\u5167\u5bb9\u4ee5\u4e00\u500b\u7248\u672c\u7684\u5f62\u5f0f\u53bb\u63d0\u4ea4/\u4e0a\u50b3\u81f3\u5009\u5eab(Repository, repo)\u3002 \u800c\u5de5\u4f5c\u76ee\u9304\u3001\u66ab\u5b58\u5340\u3001\u5009\u5eab\u6703\u662f\u672c\u5730\u7aef\u7684git \u7cfb\u7d71\u6240\u6703\u64c1\u6709\u7684\u5132\u5b58\u7a7a\u9593\uff0c\u5728\u9019\u5c0f\u7bc0\u4e2d\uff0c\u6703\u4ee5\u4e0a\u9762\u7684\u63cf\u8ff0\u70ba\u57fa\u790e\u4f86\u7a0d\u5fae\u8a73\u7d30\u8aaa\u660e\u6bcf\u7a2e\u7684\u7528\u9014\u4ee5\u53ca\u4ed6\u5011\u662f\u4ec0\u9ebc\u3002"),(0,n.kt)("h3",{id:"working-directory"},"Working directory"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u7576\u6211\u5011\u4e0b\u9054git init \u4f86\u5efa\u7acbrepo\u6216\u8005\u5229\u7528git clone\u4f86\u7372\u53d6repo\u6642\uff0c\u4e0d\u8ad6\u662f\u54ea\u4e00\u7a2e\u90fd\u6703\u6709.git\u9019\u96b1\u85cf\u76ee\u9304\uff0c\u800cgit\u7cfb\u7d71\u6703\u4ee5\u9019\u500b\u96b1\u85cf\u76ee\u9304\u6240\u5728\u7684\u76ee\u9304\u4f5c\u70ba\u5b83\u7684\u5de5\u4f5c\u76ee\u9304"),(0,n.kt)("li",{parentName:"ol"},"\u5728\u9019\u500b\u5de5\u4f5c\u76ee\u9304\u4e0b\uff0c\u53ef\u4ee5\u5141\u8a31\u5b58\u653e\u672a\u88abgit\u8ffd\u8e64\u7684\u6a94\u6848\uff0c\u63db\u8a00\u4e4b\uff0c\u5373\u4f7f\u6c92\u4e0b\u9054git add\uff0c\u4efb\u610f\u7684\u6a94\u6848\u90fd\u80fd\u5b58\u653e\u5728\u9019\u500b\u76ee\u9304\u4e0b")),(0,n.kt)("h3",{id:"staging-area"},"Staging area"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u82f1\u6587\u610f\u601d\u70ba(\u8ecd\u4eba\u7684)\u96c6\u7d50\u5340\u57df\uff0c\u5728\u9019\u88e1\u540c\u6a23\u5730\uff0c\u9019\u5340\u584a\u4e5f\u662f\u96c6\u7d50\u8457\u4e00\u4e9b\u8981\u6e96\u5099\u63d0\u4ea4/\u4e0a\u50b3\u7684\u5167\u5bb9\uff0c\u63d0\u4ea4/\u4e0a\u50b3\u7684\u76ee\u7684\u6703\u662f\u672c\u5730\u7aef\u7684repo\uff0c\u800c\u9019\u500b\u5340\u57df\u4e5f\u53ef\u5df2\u88ab\u7a31\u4e4b\u70ba\u66ab\u5b58\u5340"),(0,n.kt)("li",{parentName:"ol"},"\u6bcf\u4e00\u500b\u5de5\u4f5c\u76ee\u9304\u4e0b\u90fd\u64c1\u6709\u5404\u81ea\u7684\u66ab\u5b58\u5340\u3001\u5009\u5eab\uff0c\u63db\u8a00\u4e4b\uff0cn\u500b\u5de5\u4f5c\u76ee\u9304\u4e0b\u7684\u66ab\u5b58\u5340\u548c\u5009\u5eab\u90fd\u662f\u5f7c\u6b64\u7368\u7acb\u7684\uff0c\u4e0d\u6703\u662f\u4e00\u6a23\u7684\u5167\u5bb9\uff0c\u66f4\u5225\u8aaa\u5f7c\u6b64\u6703\u76f8\u4e92\u5f71\u97ff\u3002"),(0,n.kt)("li",{parentName:"ol"},"\u7576\u5728\u5de5\u4f5c\u76ee\u9304\u5c0d\u67d0\u4e9b\u5167\u5bb9\u4e0b\u9054git add\u6642\uff0c\u7cfb\u7d71\u6703\u5148\u6aa2\u67e5\u9019\u4e9b\u5167\u5bb9\u662f\u4e0d\u662f\u76ee\u524d\u6700\u65b0\u7248\u672c\u7684\u5167\u5bb9\uff0c\u82e5\u4e0d\u662f\u7684\u8a71\uff0c\u624d\u6703\u88ab\u8907\u88fd\u4e26\u5b58\u653e\u81f3\u66ab\u5b58\u5340\uff0c\u5426\u5247\u5c31\u4e0d\u6703\u653e\u5165\u8a72\u66ab\u5b58\u5340\u3002")),(0,n.kt)("h3",{id:"repository"},"Repository"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u82f1\u6587\u610f\u601d\u70ba\u5009\u5eab\uff0c\u6703\u5b58\u653e\u4e0d\u540c\u6642\u671f\u4e0b\u7684\u7248\u672c\u5167\u5bb9\u6216\u8005\u63d0\u4ea4\u5167\u5bb9"),(0,n.kt)("li",{parentName:"ol"},"\u6bcf\u4e00\u500b\u5de5\u4f5c\u76ee\u9304\u4e0b\u90fd\u64c1\u6709\u5404\u81ea\u7684\u66ab\u5b58\u5340\u3001\u5009\u5eab"),(0,n.kt)("li",{parentName:"ol"},"\u7576\u5c0d\u5de5\u4f5c\u76ee\u9304\u4e0b\u9054git commit\u6642\uff0c\u4fbf\u6703\u628a\u8a72\u76ee\u9304\u4e0b\u6240\u64c1\u6709\u7684\u66ab\u5b58\u5340\u4ee5\u7248\u672c\u7684\u5f62\u5f0f\u4f86\u63d0\u4ea4/\u4e0a\u50b3\u81f3\u5009\u5eab\uff0c\u800c\u9019\u500b\u5009\u5eab\u6703\u662f\u9019\u500b\u5de5\u4f5c\u76ee\u9304\u6240\u64c1\u6709\u7684\u5009\u5eab\u3002\u6b64\u6642\u7684\u66ab\u5b58\u5340\u6703\u88ab\u6e05\u7a7a\u3002")),(0,n.kt)("h3",{id:"\u4f8b\u5b50"},"\u4f8b\u5b50"),(0,n.kt)("p",null,"\u5728\u9019\u88e1\u6211\u5011\u4ee5\u4e00\u500b\u5c0f\u4f8b\u5b50\u4f86\u63cf\u8ff0\u9019\u4e09\u7a2e\u4e3b\u8981\u5132\u5b58\u7a7a\u9593\uff0c\u540c\u6a23\u5730\uff0c\u7576\u6211\u5011\u4e0b\u9054git init \u4f86\u5efa\u7acbrepo\u6216\u8005\u5229\u7528git clone\u4f86\u7372\u53d6repo\u6642\uff0c\u6b64\u6642repo\u6703\u662f\u4ee5\u76ee\u9304\u4f86\u8868\u793a\uff0c\u9019\u6642\u6211\u5011\u53ea\u9700\u8981\u9032\u53bb\u8a72\u76ee\u9304\uff0c\u800c\u9019\u500b\u76ee\u9304\u6703\u662f\u4e00\u500b\u5de5\u4f5c\u76ee\u9304\uff0c\u88e1\u982d\u653e\u4e86.git\u96b1\u85cf\u76ee\u9304\u4ee5\u53ca\u4e00\u4e9b\u5167\u5bb9\b(\u5982\u4e0b\u5716\u6240\u793a)\n",(0,n.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dqfxgtyoi/image/upload/v1632562546/blog/git/anExample1OfGitStorage_nqnzun.png",alt:null})),(0,n.kt)("p",null,"\u82e5\u6211\u5011\u5c0d\u8457\u9019\u4e9b\u6a94\u6848\u4e0b\u9054git add\u6642\uff0c\u7cfb\u7d71\u6703\u5148\u53bb\u62ff\u5009\u5eab\u7684\u6700\u65b0\u7248\u672c\u5167\u5bb9\u4f86\u6bd4\u5c0d\u9019\u4e9b\u8981\u52a0\u5165\u81f3\u66ab\u5b58\u5340\u7684\u5167\u5bb9\uff0c\u6bd4\u5c0d\u7d50\u679c\u662f\u4e0d\u4e00\u81f4\u7684\u8a71\uff0c\u624d\u6703\u8907\u88fd\u5176\u5167\u5bb9\u4e26\u653e\u5165\u66ab\u5b58\u5340\uff0c\u82e5\u4e00\u81f4\u5247\u4e0d\u6703\u8907\u88fd\u4ee5\u53ca\u4e0d\u6703\u505a\u653e\u5165\u66ab\u5b58\u5340\u7684\u52d5\u4f5c\u3002\u5728\u9019\u88e1\uff0c\u6211\u5011\u5c31\u5148\u4ee5\u4e0d\u4e00\u81f4\u7684\u60c5\u6cc1\u4e0b\u4f86\u8aaa\u660e\n",(0,n.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dqfxgtyoi/image/upload/v1632562545/blog/git/anExample2OfGitStorage_s1tpcw.png",alt:null})),(0,n.kt)("p",null,"\u7576\u5c0d\u9019\u500b\u5de5\u4f5c\u76ee\u9304\u4e0b\u9054git commit\u6642\uff0c\u7cfb\u7d71\u6703\u4ee5\u4e00\u500b\u7248\u672c\u7684\u5f62\u5f0f\u4f86\u5c07\u66ab\u5b58\u5340\u7684\u5167\u5bb9\u642c\u79fb\u81f3repo\uff0c\u800c\u6b64\u6642\u7684\u66ab\u5b58\u5340\u6703\u88ab\u6e05\u7a7a\u3002\n",(0,n.kt)("img",{parentName:"p",src:"https://res.cloudinary.com/dqfxgtyoi/image/upload/v1632562545/blog/git/anExample3OfGitStorage_gqcrun.png",alt:null})))}d.isMDXComponent=!0}}]);