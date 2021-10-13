const addToCache = [
'/assets/webfonts/fa-brands-400.woff2',
'/assets/webfonts/fa-solid-900.woff2',
'/assets/doc/loritz_plaquette_snir.pdf',
'/assets/doc/loritz_plaquette_sin.pdf',
'/assets/img/back.png',
'/assets/img/heart.png',
'/assets/img/bitmoji_3.png',
'/assets/img/bitmoji_2.png',
'/assets/img/bitmoji_1.png',
'/assets/img/logoMano.png',
'/assets/img/loritz.jpg',
'/assets/img/bts-SNIR.png',
'/assets/img/bac-SIN.png',
'/assets/img/fcc-long-dark.png',
'/assets/img/flower.png',
'https://i.imgur.com/m67XYDX.png'
];
const cacheVersion = 'theopierne-cache-v1';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(cacheVersion).then((cache) => {
            return Promise.all(addToCache.map((url) => {
                return fetch(url).then(res => {
                    if (res.status >= 400) throw Error('request failed');
                    return cache.put(url, res);
                });
            }));
        }).catch((err) => {
            console.error(err);
        })
    )
});

self.addEventListener('activate', evt => {
  evt.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(keys
        .filter(key => key !== cacheVersion)
        .map(key => caches.delete(key))
        );
    })
    );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(res) {
      if (res) return res;
      return fetch(event.request).then(function(res) {
        return res;
      }).catch(function(err) {
        console.error(err);
      });
    }));
});