if(!self.define){let e,a={};const s=(s,c)=>(s=new URL(s+".js",c).href,a[s]||new Promise((a=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=a,document.head.appendChild(e)}else e=s,importScripts(s),a()})).then((()=>{let e=a[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(a[t])return;let n={};const r=e=>s(e,t),d={module:{uri:t},exports:n,require:r};a[t]=Promise.all(c.map((e=>d[e]||r(e)))).then((e=>(i(...e),n)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/EPJcUkEH8jZ-9oaPa2g8Z/_buildManifest.js",revision:"a1b7599199e2e8c82f2c6bcf8d8aca61"},{url:"/_next/static/EPJcUkEH8jZ-9oaPa2g8Z/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/00cbbcb7-f8570cabf42562f7.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/282-b4457256c03bacdf.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/3-7d1c15df667f8a56.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/31-db29a675ff8c4bef.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/322-af153e4e6eed1203.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/39209d7c-921bed732d35bc5d.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/529-d3f7c4f0c3aeed42.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/647-29a94d652c5b03e8.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/722-66ff5cce94f6e540.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/849-993e9feae2e4655c.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/928-ed79da30d30986a2.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/93854f56-ae99f80e76ab83e3.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/98916abf-832ab5d42a4b1c3d.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/app/_not-found-a66ed4004521aa04.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/app/album/page-d3dae1e29ddd9a8d.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/app/historia/page-e39a112943c56c44.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/app/layout-61fe594a804f9165.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/app/page-28599877ff4dd96c.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/app/pedido/page-623995137c0e71d7.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/app/questionario/page-547b82c421b3dc3d.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/fd9d1056-1d9e369a2b6a005e.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/framework-8883d1e9be70c3da.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/main-48bccdd0a35fc9b7.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/main-app-3f8316f13513078c.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/pages/_app-98cb51ec6f9f135f.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/pages/_error-e87e5963ec1b8011.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-a4e99f0935ce83a9.js",revision:"EPJcUkEH8jZ-9oaPa2g8Z"},{url:"/_next/static/css/03db7e475dcb6d96.css",revision:"03db7e475dcb6d96"},{url:"/_next/static/css/40ba77c746649dc8.css",revision:"40ba77c746649dc8"},{url:"/_next/static/css/427955cd4ed4d907.css",revision:"427955cd4ed4d907"},{url:"/_next/static/css/6230132dc3d318e4.css",revision:"6230132dc3d318e4"},{url:"/_next/static/css/6daa52d748f95cf6.css",revision:"6daa52d748f95cf6"},{url:"/_next/static/css/ceb4d14db7444180.css",revision:"ceb4d14db7444180"},{url:"/_next/static/media/01.3114286e.jpeg",revision:"a06191fb8c4f2cb7ae809de3dae64414"},{url:"/_next/static/media/02.92002cb9.jpeg",revision:"306444d4ff166ee25600cdb8c9e50b1a"},{url:"/_next/static/media/03.410fecf1.jpeg",revision:"0bf316be2df06c938d155eb0e4a09761"},{url:"/_next/static/media/04.8174f351.jpeg",revision:"a8f77d1708831a433bf494f6552f1c50"},{url:"/_next/static/media/05.bce5b981.jpeg",revision:"cc78885affbddf294b4b9aed7de77995"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/06.7307b197.jpeg",revision:"00dda08a56627af8cec49ca066d5e46f"},{url:"/_next/static/media/07.5ea9d5ae.jpeg",revision:"eeb620eae835ab1d06573c549a7adf4f"},{url:"/_next/static/media/08.0c4f2fd0.jpeg",revision:"4d0e83816d21a9974bd3621d31756c59"},{url:"/_next/static/media/09.fc1a278f.jpeg",revision:"b77aa9d0b6d46d7e81a9037e0bb614e1"},{url:"/_next/static/media/10.c8d12312.jpeg",revision:"17b00c3e95ab1d74e7b8ccee3046936c"},{url:"/_next/static/media/11.8bd1195f.jpeg",revision:"31ac506572abc99913248dc2d663a48a"},{url:"/_next/static/media/12.e01033ce.jpeg",revision:"04f6ca9f338dd4a4a9d5e34a345aaea7"},{url:"/_next/static/media/13.19e7cbfc.jpeg",revision:"d3bc337e452664c0f67b29e29a8ae58c"},{url:"/_next/static/media/14.457dbed9.jpeg",revision:"577212120de324578dc061fbf2a693f6"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:a}})=>!(!e||a.startsWith("/api/auth/callback")||!a.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:a},sameOrigin:s})=>"1"===e.headers.get("RSC")&&s&&!a.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:a})=>a&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
