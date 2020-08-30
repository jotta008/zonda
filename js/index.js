(function(){
    var width = window.innerWidth;
    var height = window.innerHeight;
    var cont = $('.contenedor');
    var footer = $('footer');
    var promo = $('.promo');
  
$(document).ready(function () {
    $(window).scroll(function() {
    var windowWidth = $(window).width();
    if(windowWidth < 481){
        if ($(document).scrollTop() > 100) {
            $('#quienessomos').css('left', '0');
            $('#tituloquienes').css('left', '0');
            $('#textoquienes1').css('left', '0');
            $('#textoquienes2').css('left', '0');
        }
        if ($(document).scrollTop() > 700) {
            $('#tituloinfo1').css('left', '0');
            $('#textoinfo1').css('left', '0');
            $('#texto2info1').css('left', '0');
        } 
        if ($(document).scrollTop() > 900) {
            $('#tituloinfo2').css('left', '0');
            $('#textoinfo2').css('left', '0');
            $('#texto2info2').css('left', '0');
        }  
        if ($(document).scrollTop() > 1520) {
            $('#secondtitulo').css('right', '0');
            $('#secondtexto').css('right', '0');
        }     
        if ($(document).scrollTop() > 1620) {
            $('#secondtitulotwo').css('right', '0');
            $('#secondtextotwo').css('right', '0');
        } 
    }
    if(windowWidth > 480 && windowWidth < 768){
        if ($(document).scrollTop() > 200) {
            $('#quienessomos').css('left', '0');
            $('#tituloquienes').css('left', '0');
            $('#textoquienes1').css('left', '0');
            $('#textoquienes2').css('left', '0');
        }
        if ($(document).scrollTop() > 700) {
            $('#tituloinfo1').css('left', '0');
            $('#textoinfo1').css('left', '0');
            $('#texto2info1').css('left', '0');
        }     
        if ($(document).scrollTop() > 850) {
            $('#tituloinfo2').css('left', '0');
            $('#textoinfo2').css('left', '0');
            $('#texto2info2').css('left', '0');
        }     
        if ($(document).scrollTop() > 1500) {
            $('#secondtitulo').css('right', '0');
            $('#secondtexto').css('right', '0');
        }     
        if ($(document).scrollTop() > 1650) {
            $('#secondtitulotwo').css('right', '0');
            $('#secondtextotwo').css('right', '0');
        }     
    }
    if(windowWidth > 768){
    if ($(document).scrollTop() > 20) {
        $('#quienessomos').css('left', '0');
        $('#tituloquienes').css('left', '0');
        $('#textoquienes1').css('left', '0');
        $('#textoquienes2').css('left', '0');
        }
    if ($(document).scrollTop() > 350) {
        $('#tituloinfo1').css('left', '0');
        $('#textoinfo1').css('left', '0');
        $('#texto2info1').css('left', '0');
        }     
    if ($(document).scrollTop() > 400) {
        $('#tituloinfo2').css('left', '0');
        $('#textoinfo2').css('left', '0');
        $('#texto2info2').css('left', '0');
        }     
    if ($(document).scrollTop() > 750) {
        $('#secondtitulo').css('right', '0');
        $('#secondtexto').css('right', '0');
        }     
    if ($(document).scrollTop() > 850) {
        $('#secondtitulotwo').css('right', '0');
        $('#secondtextotwo').css('right', '0');
        }     
    }
});
$('.title').css('left', '0');
$('.title2').css('left', '0');
$('.title3').css('left', '0');
$('.title4').css('left', '0');
});
}())