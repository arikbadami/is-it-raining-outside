self.addEventListener('install', ()=>{console.log("SERVICE WORKER INSTALLED")})
self.addEventListener('fetch', ()=>{console.log("SERVICE WORKER FETCH FUNCTION")})
self.addEventListener('activate', ()=>{console.log("SERVICE WORKER ACTIVATE")})