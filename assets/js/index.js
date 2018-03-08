$(document).ready(function() {
  /*
  * Inicialización biblioteca
  */
  $('#pagepiling').pagepiling({
    menu: '#menu',
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5'],
    sectionsColor: ['#FFFFFF', '#FFF', '#2C3E50', '#39C'],
    navigation: {
        'position': 'right',
    },
    afterRender: function() {
      $('#pp-nav').addClass('custom');
      $('#pp-nav span').addClass('navigation');
     
    },

    afterLoad: function(anchorLink, index) {
      if (index>1) {
        $('#pp-nav').removeClass('custom');
      } else {
        $('#pp-nav').addClass('custom');
      }
    }
  });
  
})