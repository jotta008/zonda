(function(){
$(document).ready(function () {
    if ($(window).width() <= 767 ){
        $('#menu').hide();
    }
    $('.trident').on('click', function() {  
        var men = $('html, body').prop('style')['height']
        $('#menu').fadeToggle(function () {  
            if(men == '100%'){
                $('html, body').css({
                    'overflow': 'visible',
                    'height': 'auto'
                });
            }else{
                $('html, body').css({
                    'overflow': 'hidden',
                    'height': '100%'
                });
            }
        });
    });
});
}())