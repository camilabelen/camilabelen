$(document).ready(function(){ 
  var btn = $('#top');
  btn.on('click', function() {
    $('html, body').animate({
      scrollTop: 0
    }, 'slow');
  });
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


  var one = "#3CDCB0",
  var two = "#38C7AB",
  var three = "#34AFA6",
  var four = "#32A1A3",
  var five = "#2E8D9E";
*/
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
  });


  */



