/*=======================================*/
/*	注册测试功能的js                           */
/*	@author 王勇                         */
/*	2014年5月30日16:27:41                          */
/*=======================================*/

$(document).ready(function(){
	$("#logout").on('click',function(){
		login();
    });
});

function login(){
	window.location.href="/system/login/logout";
}


//左侧菜单切换
jQuery(document).on('click', '#lside .menubar li', function(elem) {
	var menu = jQuery(this);
	if (menu.is('.cascade')) {
		menu.toggleClass('open');
	}else {
		menu.closest('.menubar').find('li').removeClass('active');
		menu.closest('.menubar').find('.cascade').removeClass('open');
		menu.closest('.cascade').addClass('open');
		menu.addClass('active');
	} 
	var href = elem.attr("href");
	// HACK IE outline
	menu.find('a').blur();
	return false;
});
