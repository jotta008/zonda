(function(){
$(document).ready(function () {
    $('.titulov').css('left', '0');
    $('.texto').css('left', '0');
    $('.texto1').css('left', '0');
    $('.title').css('left', '0');
    $('.title1').css('left', '0');
    $('#ley').hide();
    $('#sen').hide();
    $('#title2').hide();
    var senales = $('#senales').offset().top;
    $('#senales').on('click', function(e){
		e.preventDefault();
        $('html, body').animate({
			scrollTop: senales - 10
		}, 500);
        $('#sen').toggle();
        $('#ley').hide(500);
        $('#title2').toggle(function () {
            $(this).css({'left': "1500px"});
        }, function () {
        });
    });
    $('#title1').on('click', function(e){
        e.preventDefault();
        $('html, body').animate({
			scrollTop: senales - 10
		}, 500);
        $('#ley').slideToggle(1000);
        $('#title2').hide();
        $('#sen').hide();
    });
    $('#reglamentaria').addClass('select');
    $('#preventiva').on('click', function(){
        $('#sen').css('left', '0%');
        $(this).toggleClass('select');
        $(this).each(function(){
            var select = $(this).attr('class');
            if (select == 'select'){
                $('#reglamentaria').removeClass('select');
                $('#informativa').removeClass('select');
            }
        });
    });
    $('#reglamentaria').on('click', function(){
        $('#sen').css('left', '-100%');
        $(this).toggleClass('select');
        $(this).each(function(){
            var select = $(this).attr('class');
            if (select == 'select'){
                $('#preventiva').removeClass('select');
                $('#informativa').removeClass('select');
            }
        });
    });
    $('#informativa').on('click', function(){
        $('#sen').css('left', '-200%');
        // $('#informativas > p').addClass('.zoomIn');
        $(this).toggleClass('select');
        $(this).each(function(){
            var select = $(this).attr('class');
            if (select == 'select'){
                $('#preventiva').removeClass('select');
                $('#reglamentaria').removeClass('select');
            }
        });
    });
   
});
}())