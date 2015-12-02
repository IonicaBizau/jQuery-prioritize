(function ($) {
    $.fn.oldOn = $.fn.on;
    $.fn.on = function(events, selector, options, handler) {
        var $self = this;

        // events, handler
        if (typeof selector == "function") {
            handler = selector;
            selector = undefined;
            options = {
                priority: getPriorityFor($self, events)[events] || 1
            };
        // events, options, handler
        } else if (typeof selector == "object" || typeof selector == "number") {
            handler = options;
            options = JSON.parse(JSON.stringify(selector));
            selector = undefined;
        }
        // events, selector, options, handler
        // nothing to do

        // some checks
        if (options && options.constructor == Object) {
            if (!options.hasOwnProperty("priority")) {
                options.priority = getPriorityFor($self, events)[events] || 1
            }
        } else if (options.constructor == Number) {
            options = {
                priority: options
            };
        } else {
            throw new Error("options must be an object.");
        }

        this.oldOn(events, selector, options, handler);

        // sort again by priority
        var selfEvents = $._data($self[0]).events;
        for (var ev in selfEvents) {
            var cEvent = selfEvents[ev];
            cEvent.sort(function (e1, e2) {
                return e1.data.priority - e2.data.priority;
            });
        }
    }

    /*
     *  Get a good priority
     * */
    function getPriorityFor ($el, evs) {

        if (typeof evs === "string") {
            evs = evs.split(" ");
        }

        var priorities = {};

        for (var i = 0; i < evs.length; ++i) {
            var cEv = evs[i];
            var elEvs = $._data($el[0]).events;

            if (!elEvs) {
                priorities[cEv] = 0;
                continue;
            }

            var cEvEvs = $._data($el[0]).events[cEv];
            priorities[cEv] = cEvEvs[cEvEvs.length - 1].data.priority + 1;
        }

        return priorities;
    }
})($);
