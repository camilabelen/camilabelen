$(document).ready(function(){  

});


 /*
  $(window).on('scroll', function() {
    $(this).height();
    $(this).scrollTop();
    if (top > height) {
      if (!btn.is(':visible')) {
        btn.show();
      }
    } else {
      btn.hide();
    }
  });*/

var tStart = 50 // Start transition 100px from top
var tEnd = 3000   // End at 500px
var cStart = [120, 61, 160]  // Gold
var cEnd = [28, 131, 218]   // Lime
var cDiff = [cEnd[0] - cStart[0], cEnd[1] - cStart[1], cEnd[1] - cStart[0]];

  $(document).scroll(function() {
        var p = ($(this).scrollTop() - tStart) / (tEnd - tStart); // % of transition
        p = Math.min(1, Math.max(0, p)); // Clamp to [0, 1]
        var cBg = [Math.round(cStart[0] + cDiff[0] * p), Math.round(cStart[1] + cDiff[1] * p), Math.round(cStart[2] + cDiff[2] * p)];
        $("body").css('background-color', 'rgb(' + cBg.join(',') +')');
    });
  
  // Botón volver al inicio
  var btn = $('#top');
  btn.on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  });



// Animación texto tipeo
/*var i = 0;
var txt = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, temporibus. A possimus molestias vel voluptates laborum cupiditate pariatur maxime, assumenda laboriosam distinctio perspiciatis error, similique nulla et, officia molestiae ex. Impedit quam fugit laborum possimus quidem? Fugiat, iste. Porro maiores tempore voluptas dolor nulla consequuntur sint quos magnam nesciunt quae harum, illo consectetur adipisci voluptatum accusamus ea et, rem nobis soluta, non facere? Numquam iure dolorem sit amet, hic accusantium quisquam sed aut ab ipsam! Perferendis consequuntur dicta quo, eligendi necessitatibus sunt eius distinctio temporibus obcaecati nobis consectetur expedita magni praesentium aperiam, voluptas fugiat saepe laborum autem! Nesciunt, earum, laboriosam?';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    $('#demo').html() += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}
*/


/*<div>
    <nav class="navbar navbar-inverse" role="navigation">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse navbar-ex1-collapse">
        <ul class="nav navbar-nav">
          <li><a href="#">This is me</a></li>
          <li><a href="#">My Skills</a></li>
          <li><a href="#">My Work</a></li>
          <li><a href="#">Conctact</a></li>
        </ul>
      </div><!-- /.navbar-collapse -->
    </nav>
  </div> <!-- /. menu -->*/