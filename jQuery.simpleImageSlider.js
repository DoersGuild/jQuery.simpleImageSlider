(function ($) {
    "use strict";
    $.fn.simpleImageSlider = function(options) {
        options = $.extend(true, {
            imageDir: './img/',
            delayInSeconds: 5,
            images: [],
        }, options);
        return this.each(function () {
            var $this = $(this);
            var len = options.images.length;
            var index = 0;
            var nextImage = function () {
                index++;
                index = index >= len ? 0 : index;
                $this.attr('src', options.imageDir + options.images[index]);
            };
            setInterval(nextImage, options.delayInSeconds * 1000);
        });
    };
})(jQuery);
