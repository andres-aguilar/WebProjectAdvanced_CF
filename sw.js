const CACHE_NAME = 'YOSH_CACHE_PLACES_v1';

self.addEventListener('install', function() {
  // Save files
  caches.open(CACHE_NAME).then(function(cache) {
    cache.addAll(['./index.html']);
  });
} );


self.addEventListener('activate', function(e) {
  e.waitUntil(
    caches.keys().then(function(cache_names) {

      let promises = cache_names.map(name => {
        if(name !== CACHE_NAME) return caches.delete(name);
      });

      return Promise.all(promises);
    })
  )
});
