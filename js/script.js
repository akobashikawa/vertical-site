var global = {};

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
  function initPages() {
    var pages = [];
    var windowHeight = $(window).height();
    $('.page').each(function(i, el) {
      var top = Math.floor($(el).offset().top);
      var id = $(el).attr('id');
      pages[i] = {'id': id, 'top': top};
      $(this).css({'min-height': windowHeight});
    });
    global.pages = pages;
    global.maxtop = pages[pages.length-1].top;
    //console.log(pages);
  }
  initPages();
  
  /**
   * Devuelve el mayor pages[] cuyo pages[].top
   * sea menor al especificado.
   */
  function getPageForTop(top) {
    var pages = global.pages;
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
  global.headerHeight = $('#header').height();
  global.top = $(window).scrollTop();
  global.deltaFactor = 4;

  $(window).scroll(function(){ // responde al scroll
    var top = $(window).scrollTop();
    var id = getPageForTop(top).id;
    $.address.value(id);
    global.top = $(window).scrollTop();
  }).mousewheel(function(e, delta) {// responde al mousewheel
    e.preventDefault();// previene desplazamiento normal
    var top = global.top;
    top -= delta * global.deltaFactor;
    if (top < 0) {
      top = 0;
    } else if (top > global.maxtop) {
      top = global.maxtop;
    }
    $(window).scrollTop(top);
    global.top = top;
  }).resize(function() { // responde al resize
    initPages();
  });

});