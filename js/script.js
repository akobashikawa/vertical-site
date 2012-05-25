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

});