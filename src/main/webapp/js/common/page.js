/*=======================================*/
/*	Jack Wang                            */
/*	email:jack_wang@bizconf.cn	         */
/*	2013-09-26                           */
/*=======================================*/
	function first(){
		jumpPage(1);
	}
	
	function previous(){
		var currentPage=$("#currentPage").val();
		currentPage=parseInt(currentPage,10);
		var jumpPageNo=currentPage-1;
		if(jumpPageNo<=1){
			jumpPageNo=1;
		}
		jumpPage(jumpPageNo);
	}
	
	function next(){
		var currentPage=$("#currentPage").val();
		currentPage=parseInt(currentPage,10);
		var jumpPageNo=currentPage+1;
		var pageCount=$("#pageCount").val();
		if(jumpPageNo > pageCount){
			jumpPageNo=pageCount;
		}
		
		jumpPage(jumpPageNo);
	}
	function end(){
		var pageCount=$("#pageCount").val();
		jumpPage(pageCount);
	}

	function jumpTo(){
		var pageNo = $("#pageNo").val();
		if($.isNumeric(pageNo)){
			pageNo = parseInt(pageNo,10);
		}else{
			$("#pageNo").val("");
			return;
		}
		if(pageNo > 0 && pageNo <= parseInt(pageCount, 10)){
			jumpPage(pageNo);
		}else{
			$("#pageNo").val("");
			return;
		}
	}
	function resetPageNo(){
		$("#pageNo").val(1);
	}
	function jumpPage(pageNo){
		var formId=$("#pageCount").closest("form").attr("id");
//		alert(formId);
		$('input').trigger('submitForm');
		$("#pageNo").val(pageNo);
		$("#"+formId).submit();
	}