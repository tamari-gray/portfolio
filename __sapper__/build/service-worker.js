!function(){"use strict";const e=["client/index.b13a7e81.js","client/index.89234994.js","client/[slug].2e0cbb76.js","client/index.0f16ebb8.js","client/client.3bd25ea5.js","client/index.995c5cd1.js"].concat(["service-worker-index.html","cleaner-fin.png","cleaner-full.png","cleaner.png","global.css","manifest.json","sonar.PNG"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1579827868761").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1579827868761"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const n=new URL(e.request.url);n.protocol.startsWith("http")&&(n.hostname===self.location.hostname&&n.port!==self.location.port||(n.host===self.location.host&&t.has(n.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1579827868761").then(async t=>{try{const n=await fetch(e.request);return t.put(e.request,n.clone()),n}catch(n){const s=await t.match(e.request);if(s)return s;throw n}}))))})}();
