$().ready(function() {

	$("*").css("font-size","18pt").css("text-align","center");
	$("table").css("width","100%").css("margin","20px 0 0 0");
	$("#msg").css("color","red").css("font-weight","bold");

	$("#Email").blur(function() {
		var email = $(this).val();
		if(email.indexOf('@') == -1) {
			$(this).focus();
			$("#msg").text("An email must contain an at sign (@)");
		} else {
			var pos = email.indexOf("@");
			if(email.indexOf(".",pos) == -1) {
				$(this).focus();
				$("#msg").text("An email must contain a period after the at sign (@)");
			} else {
				$("#msg").text(" ");
			}
		}
	});

	$("button").click(function() {
		var friends = [];
		// var friendObj = {
		// 	Name: name,
		// 	Email: email,
		// 	Cellphone: cellphone
		// };
		var friendObj = {};
		friendObj.Name = $("#Name").val();
		friendObj.Email = $("#Email").val();
		friendObj.Cellphone = $("#Cellphone").val();
		friends.push(friendObj);

		for(var idx = 0; idx < friends.length; idx++) {
			var friend = friends[idx];
			var tr = '<tr>';
			tr += '<td>' + friend.Name + '</td>';
			tr += '<td>' + friend.Email + '</td>';
			tr += '<td>' + friend.Cellphone + '</td>';
			tr += '</tr>';
			$("#theTbody").append(tr);
		}
	});
});
