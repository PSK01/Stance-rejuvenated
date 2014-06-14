//this is for the submit button of second page
$(document).on("click","#sub",function(){
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
	var a='content_txt='+ $("#contentText").val();
	$.post($("#myForm").attr("action"),
	a,
	function(info){$("#result").html(info);
	});
	}

 
