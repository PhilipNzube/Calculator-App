let cacheData = "MyAppCache";
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/bundle.js',
                '/static/js/main.a0d5b7e7.js',
                '/static/css/main.635af66a.css',
                '/static/media/StandardCalc.f8b1fcf35419384d860a.png',
                '/static/media/ScientificCalc.651b6ddbea57841be7de.png',
                '/manifest.json',
                '/CalculatorIcon64.png',
                '/CalculatorIcon192.png',
                '/CalculatorIcon512.png',
                '/index.html',
                '/'
            ])
        })
    )
})
//var condition=navigator.onLine?'online':'offline';
    this.addEventListener("fetch", (event) => {
        if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((resp) => {
                if (resp) {
                    return resp
                }
            })


        )
    }
    })