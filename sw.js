// Service worker mínimo de Koro Team.
// Su único propósito es habilitar que Chrome/Android reconozca la app como
// instalable ("Agregar a pantalla de inicio" / "Instalar app") y la abra en
// modo standalone (pantalla completa, sin barra del navegador).
// No cachea nada: los datos siempre se leen en vivo desde Firebase.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Dejamos pasar todas las peticiones directo a la red, sin cachear.
  event.respondWith(fetch(event.request));
});
