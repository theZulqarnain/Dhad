/*A jQuery plugin which add loading indicators into buttons
* By Mohammed
*/
(function ($) {
    $('.has-spinner').attr("disabled", false);
    $.fn.buttonLoader = function (action) {
        var self = $(this);
        if (action == 'start') {
            if ($(self).attr("disabled") == "disabled") {
                return false;
            }
            $('.has-spinner').attr("disabled", true);
            $(self).attr('data-btn-text', $(self).text());
            var text = '';
            console.log($(self).attr('data-load-text'));
            if($(self).attr('data-load-text') != undefined && $(self).attr('data-load-text') != ""){
                var text = $(self).attr('data-load-text');
            }
            $(self).html('<div class="loader"></div> '+text);
            $(self).addClass('active');
        }
        if (action == 'stop') {
            $(self).html($(self).attr('data-btn-text'));
            $(self).removeClass('active');
            $('.has-spinner').attr("disabled", false);
        }
    }
})(jQuery);