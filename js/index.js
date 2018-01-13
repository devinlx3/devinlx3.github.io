$(function(){
	var flag = false;
	$("#search_ico_select").click(function(){
		flag = !flag;
		if(flag){//30px
			$("#search_ico_select").css("background-position-y", "30px");
			$("#search_list").css("display", "block");
		}else{
			$("#search_ico_select").css("background-position-y", "68px");
			$("#search_list").css("display", "none");
		}
	});
	//当点击到baidu标签时，要隐藏当前列表，改变图片，还要设置search_ico_select的图片
	$("#baidu").click(function(){
		flag = !flag;
		$("#search_current").css("background-position-y", "0px");
		$("#search_current").attr("href", "https://www.baidu.com");
		$("#search_list").css("display", "none");
		$("#search_ico_select").css("background-position-y", "68px");
	});
	$("#google").click(function(){
		flag = !flag;
		$("#search_current").css("background-position-y", "52px");
		$("#search_current").attr("href", "https://www.google.com");
		$("#search_list").css("display", "none");
		$("#search_ico_select").css("background-position-y", "68px");
	});
	$("#search_btn").click(function(){
		if("https://www.baidu.com" == $("#search_current").attr("href")){
			location.href = "https://www.baidu.com/baidu?ie=utf-8&wd=" + $("#search_txt").val();
		}else{
			location.href = "https://www.google.com/search?q=" + $("#search_txt").val();
		}
	});
});