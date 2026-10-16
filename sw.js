self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (e) => {
  // On laisse passer toutes les requêtes normalement
  return;
});
