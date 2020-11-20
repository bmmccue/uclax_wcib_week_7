jQuery(function() {

	let my_switch = false;

$('#mybutton').click(function () {

   if ( my_switch == false) {
   my_switch = true;

	 $(this).html('velvet chair');
   $('#image').attr('src', 'http://brittswebsite.xyz/uclax_wcib_week_7/images/leather_chair.png');

	 } else {

	   my_switch = false;

		 $(this).html('leather chair');
	   $('#image').attr('src', 'http://brittswebsite.xyz/uclax_wcib_week_7/images/yellow_chair.png');
}


});

});
