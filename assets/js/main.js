$(document).ready(function(){ 

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
