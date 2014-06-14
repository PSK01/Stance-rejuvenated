//here comment is the id of the div tag used for submission of the form. Change it accordingly.
//here myForm is the id of the form used. Change it accordingly
//set the name of the php file (userInfo.php and userInfo1.php) as the action attribute of the form. 
$(document).on("click","#comment",function(){
	fname();
	clearInput();
});

	$("#myForm").submit( function() {
	return false;
	});
	
	function clearInput() {
	$("#myForm").each( function() {
	$(this).val('');
	});
	}
	
	function fname(){
	b=$("#myForm").serialize();
	$.post($("#myForm").attr("action"),
	b,
	function(info){$("#result").html(info);
	});
	}
