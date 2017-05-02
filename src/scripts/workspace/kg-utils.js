(function(Realm) {

    var Utils = {
        isMobile: function() {
            var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            return width < 600;
        },
        toggleFullScreen: function() {
            var doc = window.document;
            var docEl = doc.documentElement;

            var requestFullScreen = docEl.requestFullscreen || docEl.mozRequestFullScreen || docEl.webkitRequestFullScreen || docEl.msRequestFullscreen;
            var cancelFullScreen = doc.exitFullscreen || doc.mozCancelFullScreen || doc.webkitExitFullscreen || doc.msExitFullscreen;

            if (!doc.fullscreenElement && !doc.mozFullScreenElement && !doc.webkitFullscreenElement && !doc.msFullscreenElement) {
                requestFullScreen.call(docEl);
            } else {
                cancelFullScreen.call(doc);
            }
        }

    }
    window.Realm.Game = window.Realm.Game || {};
    window.Realm.Game.Utils = Utils;

})(window.Realm = window.Realm || {});
