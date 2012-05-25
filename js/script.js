$(document).ready(function() {

  /**
   * Responde a cambio de url
   */
  $.address.change(function(e) {
    var id = e.value.replace(/^\//, '');
    if (id == '') {
      id = 'page-1';// default page
    }
    linkToId(id);
  });

  /**
   * Cuando se va a una página
   */
  function linkToId(id) {
    // actualizar estilos de links del menú
    $('#menu')
      .find('a').removeClass('active').end()
      .find('a[href*="' + id + '"]').addClass('active');
  }

  /**
   * Comportamiento de los enlaces del menú
   */  
  $('#menu a').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href').replace(/#/, '');
    var top = Math.floor( $('#' + id).offset().top );
    $.address.value(id);
    $('html, body').stop().animate({
      scrollTop: top
    });
    return false;
  });

});