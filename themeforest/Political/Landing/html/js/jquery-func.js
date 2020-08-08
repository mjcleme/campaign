$(document).ready(function(){

	//=================================== Slider  ===================================//
	$("#slider1").responsiveSlides({
       speed: 900
    });

    //=================================== Totop  ===================================//
	$().UItoTop({ 		
	  scrollSpeed:500,
	  asingType:'linear'
	});

	//=================================== IMAGE HOVER  =================================//
	$('.img_preview').each(function() {
	    $(this).hover(
	    function() {
	        $(this).stop().animate({ opacity: 1.0 }, 300);
	    },
	    function() {
	    	$(this).stop().animate({ opacity: 0 }, 300);
	     })
	});

	//=================================== Subtmit Form  ====================================//
    $('.form-contact').submit(function(event) {  
      event.preventDefault();  
      var url = $(this).attr('action');  
      var datos = $(this).serialize();  
      $.get(url, datos, function(resultado) {  
        $('.result').html(resultado);  
      });  
    }); 
    
	//=================================== Twitter Feed  ======================================//

    $(".twitter").tweet({
        modpath: 'js/twitter/index.php',
        username: "envato",
        count: 5,
        loading_text: "Loading tweets...",
    });

    $(".tweet_list").owlCarousel({
		autoPlay: 4000,      
		items : 1,
	    navigation: false,
	    pagination: true, 
		singleItem: true,
		hover: true
	});

	//=================================== Testimonials  ======================================//

	$(".testimonials").owlCarousel({
		autoPlay: 5000,      
		items : 1,
	    navigation: false,
	    pagination: true, 
		singleItem: true,
		hover: true
	});

	//=================================== Carrousel Gallery  ======================================//

	$(".gallery").owlCarousel({
		autoPlay: 3000, 
	    items : 6,
	    navigation: false,
	    navigationText: true, 
	    itemsDesktop : [1199,4],
	    itemsDesktopSmall : [1000,2],
	    itemsMobile : [560,1],
	    stopOnHover : true
	});

	//=================================== Hover Effect  ======================================//
	$('.item_topics img').hover(function() {
		$(this).toggleClass('animated bounce');
	});

	//=============================  Nice scroll bar Body =================================//
    $("html").niceScroll({
       background:"transparent",
       cursorcolor:"#1d1d1d",
       cursorwidth:8, 
       boxzoom:true, 
       autohidemode:false,
       zindex:99999,
       cursorborder:"0",
    });

	//=================================== Tw  =================================//
	!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

	//=================================== Face  =================================//
	(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
        fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

	
	//=================================== Tabs defauld  ===================================//
	$(".tab_content").hide(); //Hide all content
	$("ul.tabs li:first").addClass("active").show(); //Activate first tab
	$(".tab_content:first").show(); //Show first tab content
	
	//=================================== Tabs On Click Event  ===================================//
	$("ul.tabs li").click(function() {
		$("ul.tabs li").removeClass("active"); //Remove any "active" class
		$(this).addClass("active"); //Add "active" class to selected tab
		$(".tab_content").hide(); //Hide all tab content
		var activeTab = $(this).find("a").attr("href"); //Find the rel attribute value to identify the active tab + content
		$(activeTab).fadeIn(); //Fade in the active content
		return false;
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
	  
	
	//=================================== Last version of Fancybox V2  ===================================//
	/**  Simple image gallery. Uses default settings
			 */
			 
			$('.fancybox').fancybox();

			/*
			 *  Different effects
			 */

			// Change title type, overlay closing speed
			$(".fancybox-effects-a").fancybox({
				helpers: {
					title : {
						type : 'outside'
					},
					overlay : {
						speedOut : 0
					}
				}
			});

			// Disable opening and closing animations, change title type
			$(".fancybox-effects-b").fancybox({
				openEffect  : 'none',
				closeEffect	: 'none',

				helpers : {
					title : {
						type : 'over'
					}
				}
			});

			// Set custom style, close if clicked, change title type and overlay color
			$(".fancybox-effects-c").fancybox({
				wrapCSS    : 'fancybox-custom',
				closeClick : true,

				openEffect : 'none',

				helpers : {
					title : {
						type : 'inside'
					},
					overlay : {
						css : {
							'background' : 'rgba(238,238,238,0.85)'
						}
					}
				}
			});

			// Remove padding, set opening and closing animations, close if clicked and disable overlay
			$(".fancybox-effects-d").fancybox({
				padding: 0,

				openEffect : 'elastic',
				openSpeed  : 150,

				closeEffect : 'elastic',
				closeSpeed  : 150,

				closeClick : true,

				helpers : {
					overlay : null
				}
			});

			/*
			 *  Button helper. Disable animations, hide close button, change title type and content
			 */

			$('.fancybox-buttons').fancybox({
				openEffect  : 'none',
				closeEffect : 'none',

				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,

				helpers : {
					title : {
						type : 'inside'
					},
					buttons	: {}
				},

				afterLoad : function() {
					this.title = 'Image ' + (this.index + 1) + ' of ' + this.group.length + (this.title ? ' - ' + this.title : '');
				}
			});


			/*
			 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
			 */

			$('.fancybox-thumbs').fancybox({
				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,
				arrows    : false,
				nextClick : true,

				helpers : {
					thumbs : {
						width  : 50,
						height : 50
					}
				}
			});

			/*
			 *  Media helper. Group items, disable animations, hide arrows, enable media and button helpers.
			*/
			$('.fancybox-media')
				.attr('rel', 'media-gallery')
				.fancybox({
					openEffect : 'none',
					closeEffect : 'none',
					prevEffect : 'none',
					nextEffect : 'none',

					arrows : false,
					helpers : {
						media : {},
						buttons : {}
					}
				});

			/*
			 *  Open manually
			 */

			$("#fancybox-manual-a").click(function() {
				$.fancybox.open('1_b.jpg');
			});

			$("#fancybox-manual-b").click(function() {
				$.fancybox.open({
					href : 'iframe.html',
					type : 'iframe',
					padding : 5
				});
			});

			$("#fancybox-manual-c").click(function() {
				$.fancybox.open([
					{
						href : '1_b.jpg',
						title : 'My title'
					}, {
						href : '2_b.jpg',
						title : '2nd title'
					}, {
						href : '3_b.jpg'
					}
				], {
					helpers : {
						thumbs : {
							width: 75,
							height: 50
						}
					}
				});
			});
			

	//=================================== Accordion  ===================================//
	$('.accordion-container').hide(); 
	$('.accordion-trigger:first').addClass('active').next().show();
	$('.accordion-trigger').click(function(){
		if( $(this).next().is(':hidden') ) { 
			$('.accordion-trigger').removeClass('active').next().slideUp();
			$(this).toggleClass('active').next().slideDown();
		}
		return false;
	});   
	
    //=================================== Tooltips =====================================//
	if( $.fn.tooltip() ) {
		$('[class="tooltip_hover"]').tooltip();
	}
	
});
	