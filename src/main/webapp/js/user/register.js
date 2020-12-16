/*=======================================*/
/*	注册测试功能的js                           */
/*	@author 王勇                         */
/*	2014年5月30日16:27:41                          */
/*=======================================*/

$(document).ready(function(){
	$("#saveBtn").on('click',function(){
		queryEpPage();
    });
});

function queryEpPage(){
// 			var datasent = {"userName":"王test","userPass":"admin","userEmail":"wangyong@qq.com"};
	var datasent = $("#registerForm").serializeObject();
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "../../user/register",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			alert(data.resultMessage);
		}
	});
}
