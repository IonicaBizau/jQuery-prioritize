(function ( $ ) {
    $.fn.pOn = function (events, priority, callback) {
            
        var pEvents = this.data("pEvents") || [];
        
        pEvents.push([
            priority,
            callback
        ]);
        
        pEvents.sort(function (e1, e2) {
            return e1[0] - e2[0];
        });
        
        this.data("pEvents", pEvents);
        
        if (pEvents.length > 1) { return; }
        
        this.on(events, function () {
            var pEvs = $(this).data("pEvents") || [];
            for (var i = 0; i < pEvs.length; ++i) {
                pEvs[i][1].call(this);
            }
        });
    }
})($);
