$(document).ready(function(){ 
  $('#pagepiling').pagepiling({
      menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 700,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['section1', 'section2', 'section3', 'section4']
        },
        normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

    //events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){},
  });
});

// desplazamiento animado entre secciones
$('a').on('click', function(event) {
  if (this.hash !== '') {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 500, function(){
      window.location.hash = hash;
    });
  }
});

// botón para subir
var btn = $('#top');
  btn.on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  });

// Animación de svg de skills
var svg = new Walkway({
  selector: '#Capa_1',
  duration: 5000
}).draw();

/*
$('.me, .skills, #Capa_1, .contactTitle').smoove({
  offset  : '20%',
  moveY   : '100px',
});

$('.projects, .contactIcons, .textAbout').smoove({
  offset  : '20%',  
  moveX   : '100px',
});

$('.description').smoove({
  offset  : '20%',  
  moveX   : '-100px',
});

$('#bigTriangleColor, .aboutTitle').smoove({
  offset  : '10%',
  moveY   : '-100px',

})
*/