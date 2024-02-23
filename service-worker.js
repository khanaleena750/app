var cacheName = 'petstore-v1';
var cacheFiles = [
    'index.html',
    'products.js',
    'petstore.webmanifest',
    's1.png',
    's2.png',
    's5.png',
    's6.png',
    's7.png',
    's8.png',
    's9.png',
    's10.png',
    's11.png',
    's12.png',
    'icon-store-512.png',
    'lesson.png'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil(
        caches.open(cacheName).then((cache) => {
            console.log('[Service Worker] Caching all the files');
            return cache.addAll(cacheFiles);
        })
    );
});
self.addEventListener('fetch', function (e) {
    e.respondWith(
        //check if the cache has the file
        caches.match(e.request).then(function (r) {
            console.log('[Service Worker] Fetching resource: '
            + e.request.url);
            // 'r' is matching file if it exists in the cache
            return r
        })
    );
});
