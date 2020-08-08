
/*	Name: theme-options.js
	Written by: Iwthemes - (http://www.iwthemes.com)
	Email: jdrendon@imaginacionweb.net
	Version: 1.5
*/

  $(document).ready(function($) {

  	/* Selec your skin and layout Style */
	function interface(){

    // Skin value
    var skin = "blue"; // blue,red

    // Boxed value
    var layout = "layout-boxed"; // layout-wide, layout-boxed, layout-boxed-margin 

    //Only in boxed version 
    var bg = "bg1";  // bg1, bg2, bg3, bg4, bg5


    $(".skin").attr("href", "css/skins/"+ skin + "/" + skin + ".css");
    $("#layout").addClass(layout);	
    $("body").addClass(bg);   
    return false;
  }

  interface();

});