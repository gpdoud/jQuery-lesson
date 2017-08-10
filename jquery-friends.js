$().ready(function() {

	$("*").css("font-size","18pt").css("text-align","center");
	$("table").css("width","100%").css("margin","20px 0 0 0");
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
