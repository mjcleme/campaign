(function($){
  
  'use strict';
  //=================================== Twitter Follow Plugin  ===================================//
   !function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');
  
  //=================================== Facebook Like Plugin  ===================================//
  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/all.js#xfbml=1&appId=363725507091435";
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
  
  //=================================== Totop  ===================================//
  $().UItoTop({
    scrollSpeed:500,
    easingType:'linear'
  });
  

  //=================================== Subtmit Form Newslleter ===========================//
  $('#newsletterForm').submit(function(event) {  
    event.preventDefault();  
    var url = $(this).attr('action');  
    var datos = $(this).serialize();  
    $.get(url, datos, function(resultado) {  
      $('#result-newsletter').html(resultado);  
    });  
  });  


})(jQuery);

