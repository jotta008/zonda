(function(){
$(document).ready(function () {
    $('#c5acentro').on('click', function(){
        $('#grande').css('display', 'block');
        $('.c5acentro').css('display', 'flex');
        $('#nav').hide();

    });
    $('#c5anorte').on('click', function(){
        $('#grande').css('display', 'block');
        $('.c5anorte').css('display', 'flex');
        $('#nav').hide();

    });
    $('#c5bcentro').on('click', function(){
        $('#grande').css('display', 'block');
        $('.c5bcentro').css('display', 'flex');
        $('#nav').hide();

    });
    $('#ctransversal').on('click', function(){
        $('#grande').css('display', 'block');
        $('.ctransversal').css('display', 'flex');
        $('#nav').hide();

    });
    $('#grande').on('click', function(){
        $(this).hide();
        $('.c5acentro').hide();
        $('.c5anorte').hide();
        $('.c5bcentro').hide();
        $('.ctransversal').hide();
        $('#nav').show();
        
    });
    $(window).scroll(function() {
    var windowWidth = $(window).width();
    if(windowWidth < 481){
        if ($(document).scrollTop() > 300) {
            $('.izquierda').css('left', '0');
            $('#dertexto').css('left', '0');
            $('#textouno').css('left', '0');
            $('#textodos').css('left', '0');
        }
        if ($(document).scrollTop() > 720) {
            $('.izquierdaubi').css('right', '0');
            $('#iztexto').css('right', '0');
            $('#texto1b').css('right', '0');
            $('#texto2b').css('right', '0');
        }    
    }
    if(windowWidth > 480 && windowWidth < 768){
        if ($(document).scrollTop() > 300) {
            $('.izquierda').css('left', '0');
            $('#dertexto').css('left', '0');
            $('#textouno').css('left', '0');
            $('#textodos').css('left', '0');
        }
        if ($(document).scrollTop() > 450) {
            $('.izquierdaubi').css('right', '0');
            $('#iztexto').css('right', '0');
            $('#texto1b').css('right', '0');
            $('#texto2b').css('right', '0');
        }   
    }
    if(windowWidth > 768){

    if ($(document).scrollTop() > 60) {
        $('.izquierda').css('left', '0');
        $('#dertexto').css('left', '0');
        $('#textouno').css('left', '0');
        $('#textodos').css('left', '0');
        }
    if ($(document).scrollTop() > 550) {
        $('.izquierdaubi').css('right', '0');
        $('#iztexto').css('right', '0');
        $('#texto1b').css('right', '0');
        $('#texto2b').css('right', '0');
        }     
    }
    });
    $('.tituloubi').css('left', '0');
    $('.textos').css('left', '0');
    $('#textotitulo1').css('left', '0');
    $('#textotitulo2').css('left', '0');
});
}())