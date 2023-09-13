const addToCache = [
  '/assets/translation/en.js',
  '/assets/translation/fr.js',
  '/assets/webfonts/fa-brands-400.woff2',
  '/assets/webfonts/fa-solid-900.woff2',
  '/assets/doc/loritz_plaquette_snir.pdf',
  '/assets/doc/loritz_plaquette_sin.pdf',
  '/assets/doc/iut_plaquette_lp_ciasie.pdf',
  '/assets/doc/ocr_plaquette_master.pdf',
  '/assets/img/back.png',
  '/assets/img/heart.png',
  '/assets/img/bitmoji_3.png',
  '/assets/img/bitmoji_2.png',
  '/assets/img/bitmoji_1.png',
  '/assets/img/logoMano.png',
  '/assets/img/loritz.jpg',
  '/assets/img/logo-ocr.jpg',
  '/assets/img/logo-iut.png',
  '/assets/img/bts-SNIR.png',
  '/assets/img/bac-SIN.png',
  '/assets/img/fcc-long-dark.png',
  '/assets/img/flower.png',
  '/assets/manifest.json',
  '/assets/img/icon/16x16.ico',
  '/assets/img/icon/32x32.ico',
  '/assets/img/icon/48x48.ico',
  '/assets/img/icon/64x64.ico',
  '/assets/img/icon/128x128.ico',
  'https://i.imgur.com/m67XYDX.png'
];
const cacheVersion = 'theopierne-cache-v1.0.7';

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(cacheVersion).then((cache) => {
      return cache.addAll(addToCache);
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

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request).then(function (cacheRes) {
      if (cacheRes) return cacheRes;
      return fetch(event.request).then(function (res) {
        return res;
      }).catch(function (err) {
        console.error(err);
      });
    }));
});