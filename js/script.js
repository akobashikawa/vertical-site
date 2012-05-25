$(document).ready(function() {

  /**
   * Responde a cambio de url
   */
  $.address.change(function(e) {
    var id = e.value.replace(/^\//, '');
    if (id == '') {
      id = 'page-0';// default page
    }
    activeLinkTo(id);
  });

  /**
   * Activa el link a la página indicada
   */
  function activeLinkTo(id) {//console.log('activeLinkTo: ' + id);
    // actualizar estilos de links del menú
    $('#menu')
      .find('a.active').removeClass('active').end()
      .find('a[href*="' + id + '"]').addClass('active');
  }

  /**
   * Crea un array con info de las páginas
   */
  var _pages = [];
  $('.page').each(function(i, el) {
    var top = Math.floor($(el).offset().top);
    var id = $(el).attr('id');
    _pages[i] = {'id': id, 'top': top};
  });

  /**
   * Devuelve el mayor _pages[] cuyo _pages[].top
   * sea menor al especificado.
   */
  function getPageForTop(top) {
    var result = _pages[0];
    for (i in _pages) {
      if (_pages[i].top > top) {
        break;
      } else {
        result = _pages[i];
      }
    }
    return result;
  }

  /**
   * Responde al scroll
   */
  var headerHeight = $('#header').height();
  $(window).scroll(function(){
    var top = $(window).scrollTop() + headerHeight;// compensa #header offset
    var id = getPageForTop(top).id;//console.log('scroll: ' + id);
    $.address.value(id);
  });  

});