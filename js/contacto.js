(function(){
$(document).ready(function () {
    $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
        $('#tel').css('right', '0');
        // alert('hola');
        }
    if ($(document).scrollTop() > 200) {
        $('#dir').css('right', '0');
        }     
    if ($(document).scrollTop() > 300) {
        $('#red').css('right', '0');
        }     
    });
    $('#titulocontacto').css('left', '0');
    $('#parrafos').css('left', '0');
    $('#textocontacto').css('left', '0');
    $('#textocontacto1').css('left', '0');
});
}())
