/*=======================================*/
/*	blogArticle功能的js                           */
/*	@author 王勇                         */
/*	2014年6月5日18:58:00                          */
/*=======================================*/
$(document).ready(function(){
	getHotArticleList();
});

function getHotArticleList(){
//		var datasent = {"userName":"王test","userPass":"admin","userEmail":"wangyong@qq.com"};
	$.ajax({
		type : "POST",
		url : "/article/getHotArticleList/",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		async : false,
		success : function(data) {
			if(data.resultCode == 0){
				$.each(data.data, function(index, obj){
	                //回调函数有两个参数,第一个是元素索引,第二个为当前值
		            $("#hotArticleList").append("<li><a href='/article/"+ obj.id + ".html'>"+obj.title +"</a></li>");
		        });
			}
		}
	});
}