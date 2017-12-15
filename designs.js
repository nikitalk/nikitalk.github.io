$(function(){


// Select color input
// Select size input

$("#input_width").keypress(function (e) {
  //if the letter is not digit then display error and don't type anything
  if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
     //display error message
     $("#errmsg2").html("Digits Only").show().fadeOut("slow");
            return false;
 };
 
});

$("#input_height").keypress(function (e) {
  //if the letter is not digit then display error and don't type anything
  if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
     //display error message
     $("#errmsg").html("Digits Only").show().fadeOut("slow");
     
                 return false;
 };
});

$("#input_height").keyup(function (e) {
  //if the letter is not digit then display error and don't type anything
  if ($(this).val()>=50) {
     //display error message
     $("#errmsg").html("Very big").show().fadeOut("slow");
     $(this).val($(this).val().slice(0, -1));
                 return false;
 } else if ($(this).val()==0) {
  $("#errmsg").html("not zero").show().fadeOut("slow");
  
              return false;
 };
});


$("#input_width").keyup(function (e) {
  //if the letter is not digit then display error and don't type anything
  if ($(this).val()>=50) {
     //display error message
     $("#errmsg2").html("Very big").show().fadeOut("slow");
     $(this).val($(this).val().slice(0, -1));
                 return false;
 } else if ($(this).val()==0) {
  $("#errmsg2").html("not zero").show().fadeOut("slow");
 
              return false;
 };
});

$("#submit_size").prop('disabled', true);
// при отпускании клавиши, проверить значение данного поля
$(this).keyup(function() {
  // если значение не равно пустой строке
  if(($("#input_width").val() != '') && ($("#input_height").val() != '')) {
    // то сделать кнопку активной (т.е. установить свойству disabled кнопки значение false             
    $("#submit_size").prop('disabled', false);
  }
});



$("#submit_size").click(function (event){
    event.preventDefault();
    makeGrid();

    var height, width, isDrawing, rightMouseButton;
    
    $("td").mousedown(function(e) {
        isDrawing = true;
        if (e.button == 2) {
          rightMouseButton = true;
          $(this).css("background-color", "#FFFFFF");
        } else {
          $(this).css("background-color", $('#colorPicker').val());
        }
      });
    
      $("td").mousemove(function(e) {
        $(this).css("cursor", "pointer");
        if (isDrawing) {
          if (rightMouseButton) {
            $("td").contextmenu(function() {
              return false;
            });
            $(this).css("background-color", "#FFFFFF");
          } else {
            $(this).css("background-color", $('#colorPicker').val());
          }
        }
      });
    
      $("td").mouseup(function() {
        if (rightMouseButton) {
          rightMouseButton = false;
        }
        isDrawing = false;
      });
})


// TODO: make a grid
function makeGrid() {

$("#pixel_canvas tr").remove();
let gridHeight = $("#input_height").val();
let gridWidth = $("#input_width").val();

for (let i = 0; i < gridHeight; i++) {
    $("#pixel_canvas").append('<tr></tr>');
    for (let j = 0; j < gridWidth; j++){
        $("tr:last-of-type").append('<td class="pxcol"></td>');
    }
}


$("td").contextmenu(function() {
    return false;
  });
};

/* 

$('#pixel_canvas').on('mousedown', '.pxcol', function(){
	const paint = $('#colorPicker').val();
	$(this).css('background-color', paint);
}); 

$('#pixel_canvas').mousedown(function(){
	$('.pxcol').bind('mouseover', function(){
		const paint = $('#colorPicker').val();
		$(this).css('background-color', paint);
	}); 
})
.mouseup(function(){
  
	$('.pxcol').unbind('mouseover'); 
});

}); */





}); 