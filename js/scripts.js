jQuery (function() {

	let my_switch = false;

$("#mybutton").click(function(){

   if ( my_switch == false) {
   my_switch = true;
   $('#my_image').attr ('src', '../images/yellow_chair.png');

} else {
	my_switch = false;
	$('#my_image').attr ('src', '../images/leather_chair.png');
}


});

});
