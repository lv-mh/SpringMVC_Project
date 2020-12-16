/*=======================================*/
/*	注册测试功能的js                           */
/*	@author 王勇                         */
/*	2014年5月30日16:27:41                          */
/*=======================================*/

$(document).ready(function(){
	$("#testRegister").on('click',function(){
		$("#testDiv").load('/user/register/test');
    });
	$("#testLogin").on('click',function(){
		$("#testDiv").load('/user/login/test');
	});
	$("#testAdvertisement").on('click',function(){
		advertisement();
	});
	$("#testLatestVocPeriod").on('click',function(){
		latestVocPeriod();
	});
	$("#testGetVocPeriod").on('click',function(){
		getVocPeriod();
	});
	$("#testGetDayWord").on('click',function(){
		getDayWord();
	});
	$("#testFavorDayWord").on('click',function(){
		favorDayWord();
	});
	$("#testGetDayWordComment").on('click',function(){
		getDayWordComment();
	});
	$("#commentDayWordPage").on('click',function(){
		$("#testDiv").load('/user/dayWord/test');
	});
	$("#commentOtherDayWordPage").on('click',function(){
		$("#testDiv").load('/user/dayWord/testOther');
	});
	$("#testGetVocList").on('click',function(){
		getVocList();
	});
	$("#testFavorOther").on('click',function(){
		favorOther();
	});
	$("#testClientVersion").on('click',function(){
		getClientVersion();
	});
	$("#testGetRoom").on('click',function(){
		getRoom();
	});
	$("#testUpateRate").on('click',function(){
		upateRate();
	});
	$("#testUpdateUser").on('click',function(){
		updateUser();
	});
	$("#testGetAllCollege").on('click',function(){
		getAllCollege();
	});
	$("#testFixUser").on('click',function(){
		fixUser();
	});
	$("#testChangeUserIcon").on('click',function(){
		$("#testDiv").load('/user/index/test');
	});
	$("#testFeedback").on('click',function(){
		feedback();
	});
	$("#testVocBook").on('click',function(){
		testVocBook();
	});
	$("#testDelVocBook").on('click',function(){
		testDelVocBook();
	});
	$("#testQueryVocBook").on('click',function(){
		testQueryVocBook();
	});
	$("#testUserVocIndex").on('click',function(){
		testUserVocIndex();
	});
});
function testUserVocIndex(){
	var datasent = {"userId":"35","vocPeriodId":"99","vocIndexId":"3","sessionId":"096da5b462864a5392e316fa2cab460a"};
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "/user/vocabulary/saveUserVocStatus",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}
function testQueryVocBook(){
	var datasent = {"userId":"35","oldVocBookId":"","sessionId":"096da5b462864a5392e316fa2cab460a"};
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "/user/vocabulary/getVocBookList",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}
function testDelVocBook(){
//	var datasent = {"vocId":"35","vocId":"36","sessionId":"096da5b462864a5392e316fa2cab460a"};
	var datasent = {"userId":"35","sessionId":"096da5b462864a5392e316fa2cab460a","vocList":[{"vocId": "230"},{"vocId": "231"},{"vocId": "232"}]};
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "/user/vocabulary/delVocBook",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}
function testVocBook(){
//	var datasent = {"vocId":"35","vocId":"36","sessionId":"096da5b462864a5392e316fa2cab460a"};
	var datasent = {"userId":"35","sessionId":"096da5b462864a5392e316fa2cab460a","vocList":[{"vocId": "230"},{"vocId": "231"},{"vocId": "232"}]};
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "/user/vocabulary/saveVocBook",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}
function feedback(){
	var datasent = {"content":"用户反馈内容","createId":"35","sessionId":"096da5b462864a5392e316fa2cab460a"};
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "../../user/feedback",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}
function fixUser(){
	var datasent = {"nickName":"1sdf","sex":"1","collegeId":"33","grade":1,"sessionId":"096da5b462864a5392e316fa2cab460a"};
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "../../user/index/fixInfo",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}
function getAllCollege(){
	var datasent = {};
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "../../user/college/getAllCollege",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}
function updateUser(){
	var datasent = {"tokenType":"1","sinaToken":"sinaasfsdfasdfaToken","avatar":"asdf.jpg","nickName":"aaaaaa","sinaUuId":"rwr33wrwerwr345345","userSign":"aaaaa"};
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "../../user/login/bindToken",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}

function upateRate(){
	var datasent = {"vocId":"20", "sessionId":"096da5b462864a5392e316fa2cab460a"};
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "../../user/vocabulary/updateRate",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}

function latestVocPeriod(){
	$.ajax({
		type : "GET",
		url : "../../user/vocPeriads/getLatestVocPeriod",
		contentType : "application/json;charset=utf-8",
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}
function advertisement(){
	$.ajax({
		type : "GET",
		url : "../../user/advertisement",
		contentType : "application/json;charset=utf-8",
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}

function getRoom(){
	var datasent = {"statu":1};
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "../../voicelive/room/getRoomListByStatu",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}

function getClientVersion(){
	var datasent = {"clientLevel":"3","clientType":"1"};
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "../../user/client/getLatestVersion",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}

function favorOther(){
	var datasent = {"wordCommentId":"138", "sessionId":"096da5b462864a5392e316fa2cab460a"};
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "../../user/dayWord/favorDayWordComment",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}

function getVocList(){
	var datasent = {"vocPeriodId":"99", "sessionId":"096da5b462864a5392e316fa2cab460a"};
//	var datasent = $("#registerForm").serializeObject();
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "../../user/vocabulary/getVocList",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}

function getDayWordComment(){
	var datasent = {"oldCacheId":"","newCacheId":"","dayWordId":"3","sessionId":"096da5b462864a5392e316fa2cab460a"};
//	var datasent = $("#registerForm").serializeObject();
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "../../user/dayWord/getDayWordCommentList",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}

function favorDayWord(){
	var datasent = {"dayWordId":"1", "sessionId":"096da5b462864a5392e316fa2cab460a"};
//	var datasent = $("#registerForm").serializeObject();
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "../../user/dayWord/favorDayWord",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}

function getDayWord(){
	var datasent = {"pageNo":"1","pageSize":"10","sessionId":"096da5b462864a5392e316fa2cab460a"};
//	var datasent = $("#registerForm").serializeObject();
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "../../user/dayWord/getDayWordList",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}

function getVocPeriod(){
	var datasent = {"pageNo":"1","pageSize":"10","sessionId":"096da5b462864a5392e316fa2cab460a"};
//	var datasent = $("#registerForm").serializeObject();
	params = JSON.stringify(datasent); 
	$.ajax({
		type : "POST",
		url : "../../user/vocPeriads/getVocPeriod",
		dataType : "json",
		contentType : "application/json;charset=utf-8",
		data : params,
		async : false,
		success : function(data) {
			$("#testDiv").html(JSON.stringify(data));
		}
	});
}

//左侧菜单切换
jQuery(document).on('click', '#sidebar .list-group a', function(elem) {
	var menu = jQuery(this);
	if (menu.is('.cascade')) {
		menu.toggleClass('open');
	}else {
		menu.closest('.list-group').find('a').removeClass('active');
		menu.closest('.list-group').find('.cascade').removeClass('open');
		menu.closest('.cascade').addClass('open');
		menu.addClass('active');
	} 
//	var href = elem.attr("href");
	// HACK IE outline
	menu.find('a').blur();
	return false;
});
