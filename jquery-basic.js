var color = true;
$().ready(function() {

	$("*").css('font-size','36pt');

	$('button').click(function() {
		if(color == true) {
			$('#p1').css('color', 'red');
			$('#p2').css('color', 'green');
			$('#p3').css('color', 'blue');
			color = false;
		} else {
			$('p').css('color','black');
			color = true;
		}
		$('#p4').fadeToggle();
	})
});

