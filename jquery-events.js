$().ready(function() {

	$("*").css('font-size','36pt');

	$("button").click(function() {
		$("#text").text($("#text").text() + " - Eric");
	});

	var li2 = "<li>d</li>";
	$("ul").append(li2);

});

