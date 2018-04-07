const CACHE_NAME = 'YOSH_CACHE_PLACES_v1';

self.addEventListener('install', function() {
  // Save files
  caches.open(CACHE_NAME).then(function(cache) {
    cache.addAll(['./index.html', '/dist/scripts/bundle.js']);
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

function searchInCacheOrMakeRequest(request) {
  const cachePromise = caches.open(CACHE_NAME);
  const matchPromise = cachePromise.then(function(cache) {return cache.match(request);});

  return Promise.all([cachePromise, matchPromise]).then(function([cache, cacheResponse]) {
    const fetchPromise = fetch(request).then(function(fetchResponse) {
      // Update local cache with new resources
      cache.put(request, fetchResponse.clone()); // Save resource in cache
      return fetchResponse;
    })
    return cacheResponse || fetchPromise;
  });
}


self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return searchInCacheOrMakeRequest(e.request);
    }).catch(function(err) {
      if(e.request.mode == 'navigate')
        return caches.match(e.request);
    })
  );
});
