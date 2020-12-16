/*=======================================*/
/*	注册测试功能的js                           */
/*	@author 王勇                         */
/*	2014年5月30日16:27:41                          */
/*=======================================*/

$(document).ready(function(){
	$("#loginBtn").on('click',function(){
		login();
    });
	// 按回车执行查询
	$("#userName").on("keypress", function(){
		var event = arguments.callee.caller.arguments[0]||window.event;//消除浏览器差异 
		if (event.keyCode == 13) {
//			$("#loginForm").submit();
			login();
		} // 回车键的键值为13
	}); 
	$("#userPass").on("keypress", function(){
		var event = arguments.callee.caller.arguments[0]||window.event;//消除浏览器差异 
		if (event.keyCode == 13) {
			login();
		} // 回车键的键值为13
	}); 
});

function login(){
// 			var datasent = {"userName":"王test","userPass":"admin","userEmail":"wangyong@qq.com"};
	var btn = $("#loginBtn");
    btn.button('loading');
	var datasent = $("#loginForm").serializeObject();
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "/system/login/loginCheck",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			if(data.resultCode == 0){   //登录成功
				window.location.href="/system";
			}else{
				alert(data.resultMessage);
			}
			btn.button('reset')
		}
	});
}
