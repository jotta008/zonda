(function(){
  $(window).on('load', function () {
    var cont = $('.contenedor');
    var footer = $('footer');
    var contenedorubi = $('.contenedorubi')
    var contenedorvial = $('.contenedorvial')

    setTimeout(function () {
  $(".loader-page").css({visibility:"hidden",opacity:"0"})
  cont.css('display', 'block')
  footer.css('display', 'block')
  contenedorubi.css('display', 'block')
  contenedorvial.css('display', 'block')
}, 1500);
});
}())
