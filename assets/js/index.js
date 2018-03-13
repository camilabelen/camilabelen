$(document).ready(function() {  
  /*
  * Inicialización biblioteca
  */
  $('#pagepiling').pagepiling({
    menu: '#menu',
    anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7', 'page8'],
    sectionsColor: ['#FFFFFF', '#FFF', '#FFF', '#6B4A90', '#F7F7B6', '#F7F7B6', '#F7F7B6', '#2C3E50'],
    navigation: {
        'position': 'right',
    },

    afterRender: function() {
      $('#pp-nav').addClass('custom');
      $('#pp-nav span').addClass('navigation');     
    },

    afterLoad: function(anchorLink, index) {
      if (index > 1) {
        $('#pp-nav').removeClass('custom');
      } else {
        $('#pp-nav').addClass('custom');
      }
      // Sección 2
      if (index === 2) {
        $('.me').html('');
        $('.textAbout').html('');
        // foto
        $('.me').append(`<img src="assets/img/perfil_camila.png" alt="" class="">`);
        $('.me img').addClass('animated fadeInLeft');
        // texto                
        $('.textAbout').append(`<div id="aboutMe"><h1>THIS IS ME</h1><p> <span>¡Hi! My name is Camila.</span></p> <p>I'm a<strong> Front End</strong> developer and I've got a BA in <strong>Plastic Arts</strong>, I'm 25 years old and I am passionate about code, art, music, videogames and literature.</p>
              <p>I define myself as a creative person, <strong>self-taught</strong>, persevering and <strong>curious</strong>, concepts that have been essential to development as Front End.</p>
              <p>In my free time I enjoy videogames, series, nature, my puppies and learn new things.</p></div>`);
        $('#aboutMe').addClass('animated fadeInRight');
      }
      if (index !== 2) {
        // foto
        $('.me img').removeClass('fadeInLeft');
        $('.me img').addClass('fadeOut');
        // texto
        $('#aboutMe').removeClass('fadeInRight');
        $('#aboutMe').addClass('fadeOut');
      }
      // Sección 3
      if (index === 3) {
        // título
        $('.skillTitle').html('');
        $('.skillTitle').append(`<h1>SKILLS</h1>`);
        $('.skillTitle h1').addClass('animated fadeIn');
        // logos de herramientas
        $('.skillLogo').html('');
        $('.skillLogo').append(`<div class="col-lg-2 col-md-2 col-sm-3 col-xs-3 col-lg-offset-1">
              <img src="assets/img/JAVASCRIPT_J.png" alt=""></div><div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
              <img src="assets/img/JQUERY_B.png" alt=""></div><div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
              <img src="assets/img/HTML5_E.png" alt=""></div><div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
              <img src="assets/img/ccs3_A.png" alt=""></div><div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
              <img src="assets/img/MATERIALIZE_H.png" alt=""></div><div class="col-lg-offset-1 col-lg-2 col-md-2 col-sm-3 col-xs-3">
              <img src="assets/img/SASS_C.png" alt=""></div><div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
              <img src="assets/img/BOOTSTRAP_G.png" alt=""></div><div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
              <img src="assets/img/GIT_I.png" alt=""></div><div class="col-lg-2 col-md-2 col-sm-3 col-xs-3 mobile">
              <img src="assets/img/GITHUB_F.png" alt=""></div><div class="col-lg-2 col-md-2 col-sm-3 col-xs-3">
              <img src="assets/img/NODEJS_D.png" alt=""></div>`);
        $('.skillLogo img').addClass('animated fadeIn');
      }
      if (index !== 3) {
        $('.skillTitle h1').removeClass('fadeIn');
        $('.skillTitle h1').addClass('fadeOut');
        $('.skillLogo img').removeClass('fadeIn');
        $('.skillLogo img').addClass('fadeOut');        
      }
      // Sección 4
      if (index === 4) {
        // título
        $('.workTitle').html('');
        $('.workTitle').append(`<h1>PROJECTS</h1>`);
        $('.workTitle h1').addClass('animated fadeIn');
        // imagen
        $('.freelancerImg').html('');
        $('.freelancerImg').append(`<img src="assets/img/freelancer_forma.png" alt="freelancer_project">`);
        $('.freelancerImg img').addClass('animated fadeInLeft');
        // descripción
        $('.freelancerText').html('');
        $('.freelancerText').append(`<div id="text"><h2>Freelancer</h2><p>Réplica del template Freelancer de Bootstrap, utilizando HTML y CSS</p>
              <button class="btn code"><a href="https://github.com/camilabelen/freelancer">CÓDIGO</a></button>
              <button class="btn"><a href="https://camilabelen.github.io/freelancer/">DEMO</a></button></div>`);
        $('#text').addClass('animated fadeInRight');
      }
      if (index !== 4) {
        $('.workTitle h1').removeClass('fadeIn');
        $('.workTitle h1').addClass('fadeOut');
        $('.freelancerImg img').removeClass('fadeInLeft');
        $('.freelancerImg img').addClass('fadeOut');
        $('#text').removeClass('fadeInRight');
        $('#text').addClass('fadeOut');
      }
      // Sección 5
      if (index === 5) {
        // imagen
        $('.labcarImg').html('');
        $('.labcarImg').append(`<img src="assets/img/labcar_forma.png" alt="labcar_project">`);
        $('.labcarImg img').addClass('animated fadeInRight');
        $('.labcarText').html('');
        // descripción
        $('.labcarText').append(`<div id="textL"><h2>Labcar</h2>
              <p>Proyecto realizado con el framework Bootstrap, con versión web y mobile</p>
              <button class="btn code"><a href="https://github.com/camilabelen/lab-car-boilerplate">CÓDIGO</a></button>
              <button class="btn"><a href="https://camilabelen.github.io/lab-car-boilerplate/">DEMO</a></button>
            </div></div>`);
        $('#textL').addClass('animated fadeInLeft');
      }
      if (index !== 5) {
        $('.labcarImg img').removeClass('fadeInRight');
        $('.labcarImg img').addClass('fadeOut');
        $('#textL').removeClass('fadeInLeft');
        $('#textL').addClass('fadeOut');
      }
      // Sección 6
      if (index === 6) {
        // Imagen
        $('.catbookImg').html('');
        $('.catbookImg').append(`<img src="assets/img/catbook_forma.png" alt="catbook_project">`);
        $('.catbookImg img').addClass('animated fadeInLeft');
        // Descripción
        $('.catbookText').html('');
        $('.catbookText').append(`<div id="textC"><h2>Catbook</h2>
              <p>La red social Catbook es producto del trabajo colaborativo, con uso de Firebase, jQuery y Bootstrap. Versión de escritorio y dispositivos móviles.</p>
              <button class="btn code"><a href="https://github.com/camilabelen/red-social">CÓDIGO</a></button>
              <button class="btn"><a href="https://sabrinavillalobos.github.io/red-social/">DEMO</a></button></div>`);
        $('#textC').addClass('animated fadeInRight');
      }
      if (index !== 6) {
        $('.catbookImg img').removeClass('fadeInLeft');
        $('.catbookImg img').addClass('fadeOut');
        $('#textC').removeClass('fadeInRight');
        $('#textC').addClass('fadeOut');
      }
      // Sección 7
      if (index === 7) {
        // Imagen
        $('.artImg').html('');
        $('.artImg').append(`<img src="assets/img/art_gallery_forma.png" alt="art_gallery_project">`);
        $('.artImg img').addClass('animated fadeInRight');
        // Descripción
        $('.artText').html('');
        $('.artText').append(`<div id="textA"><h2>Art Gallery</h2>
              <p>Art Gallery es un trabajo colaborativo que consiste en una página web para buscar y guardar obras de arte, en este proyecto se hizo uso de la API del Museo de Arte de Harvard, jQuery, Bootstrap y Firebase.</p>
              <button class="btn code"><a href="https://github.com/camilabelen/art-Gallery">CÓDIGO</a></button>
              <button class="btn"><a href="https://camilabelen.github.io/art-Gallery/">DEMO</a></button></div>`);
        $('#textA').addClass('animated fadeInLeft');
      }
      if (index !== 7) {
        $('.artImg img').removeClass('fadeInRight');
        $('.artImg img').addClass('fadeOut');
        $('#textA').removeClass('fadeInLeft');
        $('#textA').addClass('fadeOut');
      }
      // Sección 8
      if (index === 8) {
        // título
        $('.contactTitle').html('');
        $('.contactTitle').append(`<h1>GET IN TOUCH</h1>`);
        $('.contactTitle h1').addClass('animated fadeIn');
        // navecita
        $('.contactIcons').html('');
        $('.contactIcons').append(`<a id="ufito" class="ufoContact" href="mailto:ccornejoss@gmail.com" data-toggle="tooltip" data-placement="right" title="Write me: ccornejoss@gmail.com"><img id="ufo" src="assets/img/ufo.png"></a>`)
        $('#ufo').addClass('animated zoomInRight');
        $('[data-toggle="tooltip"]').tooltip();
        // github y linkedin
        $('.RRSS').html('');
        $('.RRSS').append(`<a id="github" href="https://github.com/camilabelen"><i class="fab fa-github fa-3x"></i></a>
            <a id="linkedin" href="https://www.linkedin.com/in/camila-cornejos/"><i class="fab fa-linkedin-in fa-3x"></i></a>`)
        $('.RRSS').addClass('animated zoomIn');
        // footer
        $('.footer').html('');
        $('.footer').append(`<p>Developed by Camila Cornejos | Laboratoria</p>`);
        $('.footer p').addClass('animated fadeIn');
      }
      if (index !== 8) {
        $('.contactTitle h1').removeClass('fadeIn');
        $('.contactTitle h1').addClass('fadeOut');
        $('#ufo').removeClass('zoomInRight');
        $('#ufo').addClass('fadeOut');
        $('.RRSS').removeClass('zoomIn');
        $('.RRSS').addClass('fadeOut');
        $('.footer p').removeClass('fadeIn');
        $('.footer p').addClass('fadeOut');
      }

    } // afterLoad
  })  // pagepiling
}); // document.ready


