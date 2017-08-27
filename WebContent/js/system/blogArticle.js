/*=======================================*/
/*	blogArticle功能的js                           */
/*	@author 王勇                         */
/*	2014年6月5日18:58:00                          */
/*=======================================*/
$(document).ready(function(){
	$("#new_article_tab").hide();
	$("#addDiv").hide();
	$("#update_article_tab").hide();
	$("#updateDiv").hide();
	//新增文章
	$("#newArticleBtn").on('click',function(){
		$("#new_article_tab").show();
		$("#addDiv").show();
		$("#contentUl").find('li').removeClass('active');
    	$("#contentUl .new_article_tab").addClass('active');
    	$("#listDiv").hide();
    });
	
	$("#contentUl .firstLi").on('click',function(){
		$("#new_article_tab").removeClass('hide');
		$("#contentUl").find('li').removeClass('active');
		$("#contentUl .firstLi").addClass('active');
		$("#listDiv").show();
		$("#new_article_tab").hide();
		$("#addDiv").hide();
		$("#update_article_tab").hide();
		$("#updateDiv").hide();
//    	$("#lside").find('li').removeClass('active');
//    	$("#lside .menubar .course").addClass('active');
	});
});

/**
 * 添加文本编辑器
 */
KindEditor.ready(function(K) {
	var createHandoutEditor = K.create('#createArticle', {
		uploadJson : '/system/article/uploadJson',
		fileManagerJson : '/system/classRoom/fileManagerJson',
		allowFileManager : true,
		width : '700px',
		minWidth : '300px',
		minHeight : '350px',
		shadowMode : true,
		formatUploadUrl : false,   //false时不会自动格式化上传后的URL。
		afterUpload : function(url) {
//                   alert("保存图片的路径：" + url);
    	},
		resizeType : 0,
		allowPreviewEmoticons : false,
        allowImageUpload : true,
		items : [
			'source', '|', 'undo', 'redo', '|', 'preview','fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
			'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
			'insertunorderedlist', '|', 'emoticons', 'image', 'link']
	});
	K("#saveArticleBtn").click(function(e) {
		$("#htmlContent").val(createHandoutEditor.html());
//			alert($("#htmlContent").val());
//			$("handoutHtml").action=path;
		$("#addArticleForm").submit();
	});
});

/**
 * 修改文本编辑器
 */
var updateEditor;
KindEditor.ready(function(K) {
	updateEditor = K.create('#updateArticle', {
		uploadJson : '/system/article/uploadJson',
		fileManagerJson : '/system/classRoom/fileManagerJson',
		allowFileManager : true,
		width : '700px',
		minWidth : '300px',
		minHeight : '350px',
		shadowMode : true,
		formatUploadUrl : false,   //false时不会自动格式化上传后的URL。
		afterUpload : function(url) {
//            alert("保存图片的路径：" + url);
    	},
		resizeType : 1,
		allowPreviewEmoticons : false,
        allowImageUpload : true,
        items : [
     			'source', '|', 'undo', 'redo', '|', 'preview','fontsize', '|', 'forecolor', 'hilitecolor', 'bold', 'italic', 'underline',
     			'removeformat', '|', 'justifyleft', 'justifycenter', 'justifyright', 'insertorderedlist',
     			'insertunorderedlist', '|', 'emoticons', 'image', 'link']
	});
	// JSP
//		editor = K.create('textarea[name="content"]', {
//			allowFileManager : true
//		});
	K("#updateArticleBtn").click(function(e) {
		$("#updateHtmlContent").val(updateEditor.html());
//			alert($("#htmlContent").val());
//			$("handoutHtml").action=path;
		$("#updateArticleForm").submit();
	});
});

function setUpdateEditor(articleHtml){
	updateEditor.html(articleHtml.toString());//修改讲义时，将讲义的html代码回显到文本编辑器中
}

function toUpdateArticle(articleId){
	$("#articleId").val(articleId);
	var datasent = {"id":articleId};
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "/system/article/getArticleByArticleId",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#updateTitle").val(data.data.title);
			setUpdateEditor(data.data.content);
		}
	});
	$("#update_article_tab").show();
	$("#updateDiv").show();
	$("#contentUl").find('li').removeClass('active');
	$("#contentUl .update_article_tab").addClass('active');
	$("#listDiv").hide();
}

function addArticle(msg) {
	alert(msg);
	location=location;
//	window.location.href="/system";
}

//删除教室
function delArticleById(id){
	$("#delArticleId").val(id);
	$("#delModal").modal('show');
	$("#delAlert").hide();
}

$('#delArticleBtn').on('click',function () {
	delArticle();
});

$('#cancleDelArticleBtn').on('click',function () {
	$("#delModal").modal('hide');
});
//删除教室
function delArticle(){
	var datasent = $("#delArticleForm").serializeObject();
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "/system/article/del",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			alert(data.resultMessage);
			if(data.resultCode == 0){   //新增成功
				location.reload();
			}
		}
	});
}