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
  function activeLinkTo(id) {
    // actualizar estilos de links del menú
    $('#menu')
      .find('a.active').removeClass('active').end()
      .find('a[href*="' + id + '"]').addClass('active');
  }

  /**
   * Comportamiento de los enlaces del menú
   */  
  $('a.scrollto').click(function(e) {
    e.preventDefault();
    var id = $(this).attr('href').replace(/#/, '');
    var top = Math.floor( $('#' + id).offset().top );
    $.address.value(id);
    $('html, body').stop().animate({
      scrollTop: top
    });
    return false;
  });

  /**
   * Crea un array con info de las páginas
   */
  var pages = [];
  function initPages() {
    var windowHeight = $(window).height();
    $('.page').each(function(i, el) {
      var top = Math.floor($(el).offset().top);
      var id = $(el).attr('id');
      pages[i] = {'id': id, 'top': top};
      $(this).css({'min-height': windowHeight});
    });
    //console.log(pages);
  }
  initPages();
  
  /**
   * Devuelve el mayor pages[] cuyo pages[].top
   * sea menor al especificado.
   */
  function getPageForTop(top) {
    var result = pages[0];
    for (i in pages) {
      if (pages[i].top > top) {
        break;
      } else {
        result = pages[i];
      }
    }
    return result;
  }

  /**
   * Comportamiento de la ventana
   */
  var headerHeight = $('#header').height();console.log($(window).height());
  $(window).scroll(function(){ // responde al scroll
    var top = $(window).scrollTop() + headerHeight;// compensa #header offset
    var id = getPageForTop(top).id; //console.log('top:' + top + ' scroll: ' + id);
    $.address.value(id);
  }).resize(function() { // responde al resize
    initPages();
  });

});