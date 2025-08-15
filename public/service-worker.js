/* eslint-disable no-restricted-globals */

// Minimal service worker for PWA installability without caching

self.addEventListener("install", (event) => {
  console.log("Service worker installed");
  self.skipWaiting(); // activate immediately
});

self.addEventListener("activate", (event) => {
  console.log("Service worker activated");
  return self.clients.claim();
});

// No fetch event = no caching, browser always loads fresh files
