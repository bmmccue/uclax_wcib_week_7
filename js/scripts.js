jQuery(function() {

let my_switch = false;

$('#my_button').click(function () {

	//if ( my_switch == false) {
		//my_switch = true;
	  //$('.square.alt').addClass('red');
//}   else {
	 // my_switch = false;
	//$('.square.alt').removeClass('red');
//}


if ( $('.square.alt').hasClass('red') ) {
	$('.square.alt').removeClass('red');
}   else {
$('.square.alt').addClass('red');
}

  });

});
