(function(){
    $(document).ready(function () {
        $(window).scroll(function() {
        var windowWidth = $(window).width();
        if(windowWidth < 481){
            if ($(document).scrollTop() > 0) {
                $('#completo1').css('left', '0');
                $('#completo2').css('left', '0');
                $('#completo3').css('left', '0');
                $('#completo4').css('left', '0');
                }
            if ($(document).scrollTop() > 200) {
                $('#avanzado1').css('left', '0');
                $('#avanzado2').css('left', '0');
                $('#avanzado3').css('left', '0');
                $('#avanzado4').css('left', '0');
                }     
            if ($(document).scrollTop() > 500) {
                $('#estacionamiento1').css('left', '0');
                $('#estacionamiento2').css('left', '0');
                $('#estacionamiento3').css('left', '0');
                $('#estacionamiento4').css('left', '0');
                }     
            if ($(document).scrollTop() > 800) {
                $('#transito1').css('left', '0');
                $('#transito2').css('left', '0');
                $('#transito3').css('left', '0');
                $('#transito4').css('left', '0');
                }   
        }
        if(windowWidth > 480 && windowWidth < 768){
            if ($(document).scrollTop() > 0) {
                $('#completo1').css('left', '0');
                $('#completo2').css('left', '0');
                $('#completo3').css('left', '0');
                $('#completo4').css('left', '0');
                }
            if ($(document).scrollTop() > 100) {
                $('#avanzado1').css('left', '0');
                $('#avanzado2').css('left', '0');
                $('#avanzado3').css('left', '0');
                $('#avanzado4').css('left', '0');
                }     
            if ($(document).scrollTop() > 300) {
                $('#estacionamiento1').css('left', '0');
                $('#estacionamiento2').css('left', '0');
                $('#estacionamiento3').css('left', '0');
                $('#estacionamiento4').css('left', '0');
                }     
            if ($(document).scrollTop() > 500) {
                $('#transito1').css('left', '0');
                $('#transito2').css('left', '0');
                $('#transito3').css('left', '0');
                $('#transito4').css('left', '0');
                }   
        }
        if(windowWidth > 768){
          if ($(document).scrollTop() > 20) {
            $('#completo1').css('left', '0');
            $('#completo2').css('left', '0');
            $('#completo3').css('left', '0');
            $('#completo4').css('left', '0');
            }
        if ($(document).scrollTop() > 200) {
            $('#avanzado1').css('left', '0');
            $('#avanzado2').css('left', '0');
            $('#avanzado3').css('left', '0');
            $('#avanzado4').css('left', '0');
            }     
        if ($(document).scrollTop() > 400) {
            $('#estacionamiento1').css('left', '0');
            $('#estacionamiento2').css('left', '0');
            $('#estacionamiento3').css('left', '0');
            $('#estacionamiento4').css('left', '0');
            }     
        if ($(document).scrollTop() > 600) {
            $('#transito1').css('left', '0');
            $('#transito2').css('left', '0');
            $('#transito3').css('left', '0');
            $('#transito4').css('left', '0');
            }  
        }
        });
        $('.titulocur').css('left', '0');
        $('.textouno').css('left', '0');
        $('.textodos').css('left', '0');
    });
    }())