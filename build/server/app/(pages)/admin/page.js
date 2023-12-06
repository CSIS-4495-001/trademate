(()=>{var e={};e.id=952,e.ids=[952],e.modules={2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},4300:e=>{"use strict";e.exports=require("buffer")},6113:e=>{"use strict";e.exports=require("crypto")},9523:e=>{"use strict";e.exports=require("dns")},2361:e=>{"use strict";e.exports=require("events")},7147:e=>{"use strict";e.exports=require("fs")},3685:e=>{"use strict";e.exports=require("http")},5158:e=>{"use strict";e.exports=require("http2")},5687:e=>{"use strict";e.exports=require("https")},1808:e=>{"use strict";e.exports=require("net")},2037:e=>{"use strict";e.exports=require("os")},1017:e=>{"use strict";e.exports=require("path")},5477:e=>{"use strict";e.exports=require("punycode")},2781:e=>{"use strict";e.exports=require("stream")},1576:e=>{"use strict";e.exports=require("string_decoder")},4404:e=>{"use strict";e.exports=require("tls")},7310:e=>{"use strict";e.exports=require("url")},3837:e=>{"use strict";e.exports=require("util")},9796:e=>{"use strict";e.exports=require("zlib")},9186:(e,t,s)=>{"use strict";s.r(t),s.d(t,{GlobalError:()=>i.a,__next_app__:()=>m,originalPathname:()=>u,pages:()=>p,routeModule:()=>x,tree:()=>d});var r=s(3137),a=s(4647),o=s(4183),i=s.n(o),n=s(1775),l={};for(let e in n)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>n[e]);s.d(t,l);let c=r.AppPageRouteModule,d=["",{children:["(pages)",{children:["admin",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(s.bind(s,1728)),"/Users/gauravmehla/Documents/code/4495/the-final-one/src/app/(pages)/admin/page.tsx"]}]},{}]},{"not-found":[()=>Promise.resolve().then(s.t.bind(s,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(s.bind(s,9197)),"/Users/gauravmehla/Documents/code/4495/the-final-one/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(s.t.bind(s,1918,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(s.bind(s,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],p=["/Users/gauravmehla/Documents/code/4495/the-final-one/src/app/(pages)/admin/page.tsx"],u="/(pages)/admin/page",m={require:s,loadChunk:()=>Promise.resolve()},x=new c({definition:{kind:a.x.APP_PAGE,page:"/(pages)/admin/page",pathname:"/admin",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},821:(e,t,s)=>{Promise.resolve().then(s.bind(s,5691))},5691:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>page});var r=s(80),a=s(9885),o=s(6748),i=s(1522),n=s(6876);let components_InfoBanner=()=>r.jsx("div",{className:"bg-blue-500 text-white py-4 text-center",children:(0,r.jsxs)("div",{className:"flex items-center justify-center",children:[r.jsx("img",{src:"https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png",alt:"Firebase Logo",className:"w-8 h-8 mr-2"}),(0,r.jsxs)("p",{className:"font-semibold text-lg",children:["Need more information? Visit our"," ",r.jsx("a",{href:"https://firebase.com",target:"_blank",rel:"noopener noreferrer",className:"underline",children:"Firebase account"})]})]})}),page=()=>{let{user:e}=(0,o._)(),[t,s]=(0,a.useState)(0),[l,c]=(0,a.useState)(0),[d,p]=(0,a.useState)(0),[u,m]=(0,a.useState)(0);return(0,a.useEffect)(()=>{let fetchTotalUsers=async()=>{if(e)try{let e=(0,i.hJ)(n.db,"users"),t=await (0,i.PL)(e);s(t.size)}catch(e){console.error("Error fetching total users: ",e)}},fetchTotalPosts=async()=>{if(e)try{let e=(0,i.hJ)(n.db,"posts"),t=await (0,i.PL)(e);c(t.size)}catch(e){console.error("Error fetching total posts: ",e)}},fetchTotalDeletedPosts=async()=>{if(e)try{let e=(0,i.hJ)(n.db,"deletedPosts"),t=await (0,i.PL)(e);p(t.size)}catch(e){console.error("Error fetching total deleted posts: ",e)}},fetchTotalReportedPosts=async()=>{if(e)try{let e=(0,i.hJ)(n.db,"reportedPosts"),t=await (0,i.PL)(e);m(t.size)}catch(e){console.error("Error fetching total reported posts: ",e)}};fetchTotalUsers(),fetchTotalPosts(),fetchTotalDeletedPosts(),fetchTotalReportedPosts()},[e]),r.jsx("div",{className:"flex flex-1 items-center justify-center p-6",children:r.jsx("div",{className:"w-full",children:(0,r.jsxs)("div",{className:"p-4",children:[r.jsx("h2",{className:"text-2xl font-semibold mb-4",children:"Admin Dashboard"}),(0,r.jsxs)("div",{className:"flex flex-col gap-4",children:[(0,r.jsxs)("div",{className:"bg-gray-200 p-4 rounded-md",children:[r.jsx("h3",{className:"text-lg font-semibold",children:"Total Users"}),r.jsx("p",{children:t})]}),(0,r.jsxs)("div",{className:"bg-gray-200 p-4 rounded-md",children:[r.jsx("h3",{className:"text-lg font-semibold",children:"Total Posts"}),r.jsx("p",{children:l})]}),(0,r.jsxs)("div",{className:"bg-gray-200 p-4 rounded-md",children:[r.jsx("h3",{className:"text-lg font-semibold",children:"Total Deleted Posts"}),r.jsx("p",{children:d})]}),(0,r.jsxs)("div",{className:"bg-gray-200 p-4 rounded-md",children:[r.jsx("h3",{className:"text-lg font-semibold",children:"Total Reported Posts"}),r.jsx("p",{children:u})]}),r.jsx(components_InfoBanner,{})]})]})})})}},1728:(e,t,s)=>{"use strict";s.r(t),s.d(t,{$$typeof:()=>i,__esModule:()=>o,default:()=>l});var r=s(7536);let a=(0,r.createProxy)(String.raw`/Users/gauravmehla/Documents/code/4495/the-final-one/src/app/(pages)/admin/page.tsx`),{__esModule:o,$$typeof:i}=a,n=a.default,l=n},3881:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var r=s(6885);let __WEBPACK_DEFAULT_EXPORT__=e=>{let t=(0,r.fillMetadataSegment)(".",e.params,"favicon.ico");return[{type:"image/x-icon",sizes:"16x16",url:t+""}]}}};var t=require("../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),s=t.X(0,[997,885,373],()=>__webpack_exec__(9186));module.exports=s})();