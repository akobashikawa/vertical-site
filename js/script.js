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

  function linkToId(id) {
    var el = $('#menu')
      .find('a').removeClass('active').end()
      .find('a[href*="' + id + '"]').addClass('active');
  }

});