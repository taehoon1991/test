/* js */

$(document).ready(function(){

///////////// 창 크기에 맞는 높이 ////////////////

	var all_height = $(window).height();
		$('.content').css("height",all_height);
	$(window).on("resize",function(){ 
		all_height = $(window).height(); 			
		$('.content').css("height",all_height);
	});

//////////////////////////////////////////////////


});