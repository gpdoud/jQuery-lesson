$().ready(function() {
	var url = 'http://prs.gregorydoud.net/Users/Get/1';

	$("body").css('font-size','26pt');

	$('button').click(function() {
		$.get(url).done(function(resp) {
			console.log(resp);
		});
	});

});