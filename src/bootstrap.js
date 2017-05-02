(function() {
    'use strict';
    var webComponentsSupported = ('registerElement' in document && 'import' in document.createElement('link') && 'content' in document.createElement('template')),
        fetchSupported = 'fetch' in window,
        pathPrefix = './';

    var onload = function() {
        // For native Imports, manually fire WebComponentsReady so user code
        // can use the same code path for native and polyfill'd imports.
        loadApp(function() {
            if (!window.HTMLImports) {
            document.dispatchEvent(
                new CustomEvent('WebComponentsReady', {
                    bubbles: true
                })
            );
        }
        });
    };

    if (!webComponentsSupported) {
        var script = document.createElement('script');
        script.async = true;
        script.src = '/bower_components/webcomponentsjs/webcomponents-lite.min.js';
        script.onload = onload;
        document.head.appendChild(script);
    }

    if (!fetchSupported) {
        var script = document.createElement('script');
        script.async = true;
        script.src = '/bower_components/fetch/fetch.js';
        script.onload = onload;
        document.head.appendChild(script);
    } 

    if (webComponentsSupported && fetchSupported){
        onload();
    }

    function loadApp(cb) {
        var link = document.createElement('link');

        link.rel = 'import';
        link.href = pathPrefix + 'kg-app.html';
        link.onload = cb;

        document.head.appendChild(link);
    }

    function loadScript(src, cb) {
        var script = document.createElement('script');
        script.onload = cb;
        script.src = src;
        document.body.appendChild(script);
    }


})();

// Load pre-caching Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/service-worker.js');
    });

}
