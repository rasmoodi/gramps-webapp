if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return r[e]||(c=new Promise(async c=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=c}else importScripts(e),c()})),c.then(()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]})},c=(c,r)=>{Promise.all(c.map(e)).then(e=>r(1===e.length?e[0]:e))},r={require:Promise.resolve(c)};self.define=(c,b,a)=>{r[c]||(r[c]=Promise.resolve().then(()=>{let r={};const d={uri:location.origin+c.slice(1)};return Promise.all(b.map(c=>{switch(c){case"exports":return r;case"module":return d;default:return e(c)}})).then(e=>{const c=a(...e);return r.default||(r.default=c),r})}))}}define("./sw.js",["./workbox-a1d34bd3"],(function(e){"use strict";e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"0968a52d.js",revision:"777ae90e9ca44c325c89c32d41a88c29"},{url:"0bdaebd7.js",revision:"77c672dc97b15549f1d9b4f454ec7b63"},{url:"0c41e918.js",revision:"34ad5ecf6bf4cf6ab31edb38d124dc5a"},{url:"0f9d81ec.js",revision:"1c79a7d3d3b31d7971aa7837aa1dd494"},{url:"16bcb23a.js",revision:"97a67c67895352df044b1b4c67c189b9"},{url:"19843c9a.js",revision:"8fa754168488934d98b23ea99822b3bf"},{url:"24356bde.js",revision:"0feea0321e08b25b5f630eede89aad9b"},{url:"2e93a744.js",revision:"785275c3ba72abb17aab43b1c97ca840"},{url:"3a97bbd6.js",revision:"6b5cbad7fd459d9b42228bd1fdb603ae"},{url:"5077d8ea.js",revision:"84926d21a2e35fc09a7fa852df463558"},{url:"51cd77db.js",revision:"34d4be0e867a94f6e824bea2716ef06d"},{url:"5434ffcb.js",revision:"f6bbd893aef60601efa401d7b876c6ce"},{url:"5522257c.js",revision:"e637f1a8299f9f7cc5b25fb411990df3"},{url:"63cad420.js",revision:"4360c2fdddd2d42357d69b31c66607e8"},{url:"788c3cce.js",revision:"a1115e321aa8c3f2bb9c9bed3f057e93"},{url:"80702454.js",revision:"a35b8f91e2e7a8b2127e5ba47dd1d7ef"},{url:"8bec0ded.js",revision:"acaf010ff1565790b708bcaea4b4ab25"},{url:"90905f74.js",revision:"56c61ce02c7b1fbf7b3ba4e676d7eb95"},{url:"96e9395f.js",revision:"9b4ca9dafe4f53501d39ede9dc36c6b5"},{url:"a1aade4e.js",revision:"a6364f72cd983fb2dc97443fa882c294"},{url:"a6e36716.js",revision:"9f7493e3c21b67aea77bce85279f5e50"},{url:"accafcb0.js",revision:"b0f1920cbc3387afe4b4c84d864f48b0"},{url:"b3af23d5.js",revision:"7b39838a18eb51c28c83551fe936c98d"},{url:"b4d29789.js",revision:"2da4b90b587bd2523faf03f6e76bc659"},{url:"c770a0d9.js",revision:"70dc28068067d675d5a864ce68230950"},{url:"ed9f9973.js",revision:"fbf645851838eb9dc2025091b4bba481"},{url:"index.html",revision:"8f46ebcff6e47fc58e584f3c3bca7038"},{url:"leaflet.css",revision:"6b7939304e1bc55fac601aabffcc528d"},{url:"login.html",revision:"e9bd78ca777ffc8a2a3d4b6c814efa14"}],{}),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("/index.html"))),e.registerRoute("polyfills/*.js",new e.CacheFirst,"GET")}));
//# sourceMappingURL=sw.js.map
