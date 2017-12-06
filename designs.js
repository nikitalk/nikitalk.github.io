$(function(){

// Select color input
// Select size input

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