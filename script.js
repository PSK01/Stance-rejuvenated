$(document).on("click","#comment",function(){
	fname();
	clearInput();
});

	$("#myForm").submit( function() {
	return false;
	});
	
	function clearInput() {
	$("#myForm :input").each( function() {
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
