$().ready(function() {
	var url = 'http://prs.gregorydoud.net/Users/List';

	$("body").css('font-size','26pt');

	$('button').click(function() {

		console.log("Before the data is asked for.");
		
		$.get(url).done(function(resp) {
			console.log("The data returned.");
		});

		console.log("After the data is asked for.");
	});


});