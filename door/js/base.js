function changeContext(name) {
	$.ajax({
		async: false,
		type: "get",
		url: name,
		dataType: "html",
		success: function(data) {
			$("#container").html(data);
		}
	});
}
$(function() {
	$("#topnav li:first-child").css("border-top", "2px solid blue");
	$("#topnav li:first-child").find("a").css("background", "#AA00FF");

	$("#container").load("ccpp.html"); //加载主内容

	$("#top a").click(function() {
		alert("请按快捷键Ctrl+D进行收藏！");
	});

	$("#topnav li").click(function() {
		$("#topnav li").css("border-top", "0px");
		$("#topnav li").find("a").css("background", "#AA00CC");

		$(this).css("border-top", "2px solid blue");
		var a = $(this).find("a");
		a.css("background", "#AA00FF");
		
		if("C/C++" == a.text()) {
			changeContext("ccpp.html"); //改变主内容

		} else if("java" == a.text()) {
			changeContext("java.html");
		} else if("python" == a.text()) {
			changeContext("python.html");
		}

	});
});

$(function() {
	$("#containerhtml li").click(function() {
		var href = $(this).find("a").attr("href");
		window.open(href);
		//window.location.href = href;
	});
});