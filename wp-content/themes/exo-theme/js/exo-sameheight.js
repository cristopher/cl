(function ($) {
    "use strict";

    /* matchHeight example */

    $(function() {
        $('.exo-same-height .wpb_column').matchHeight();
        $('.exo-same-height .vc_column-inner').matchHeight();
        $('.magazine_posts-layout1 .same-height-column').matchHeight();

        // example of update callbacks (uncomment to test)
        $.fn.matchHeight._beforeUpdate = function(event, groups) {
            //var eventType = event ? event.type + ' event, ' : '';
            //console.log("beforeUpdate, " + eventType + groups.length + " groups");
        }

        $.fn.matchHeight._afterUpdate = function(event, groups) {
            //var eventType = event ? event.type + ' event, ' : '';
            //console.log("afterUpdate, " + eventType + groups.length + " groups");
        }
    });

})(jQuery);