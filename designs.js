$(function(){


//if the inter key is pressed and the button is enabled, then draw a table
$(this).keypress(function (e) {
  if (e.which == 13 && $("#submit_size").attr('enabled')) {
    makeGrid();
  };
});

//if the letter is not digit, then display error and don't type anything
$("#input_height").keypress(function (e) {
  if (e.which != 13 && e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
    $("#error_height").html("Please input numbers only").show().fadeOut("slow");
    return false;
  };
});

//if the letter is not digit, then display error and don't type anything
$("#input_width").keypress(function (e) {
  if (e.which != 13 && e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
    $("#error_width").html("Please input numbers only").show().fadeOut("slow");
    return false;
  };
});

//if height is not in the range from 1 to 29, then display error and delete last digit
$("#input_height").on('keypress keyup', function (e) {
  if ($(this).val() != "") {
    if ($(this).val() >= 30) {
      $("#error_height").html("The height is very big").show().fadeOut("slow");
      $(this).val($(this).val().slice(0, -1));
      return false;
    } else if ($(this).val() == 0) {
              $("#error_height").html("The height can not be zero").show().fadeOut("slow");
              $(this).val($(this).val().slice(0, -1));
              return false;
           };
  };
});

//if width is not in the range from 1 to 29, then display error and delete last digit
$("#input_width").on('keypress keyup', function (e) {
  if ($(this).val() != "") {
    if ($(this).val() >= 30) {
      $("#error_width").html("The width is very big").show().fadeOut("slow");
      $(this).val($(this).val().slice(0, -1));
      return false;
    } else if ($(this).val() == 0) {
              $("#error_width").html("The height can not be zero").show().fadeOut("slow");
              $(this).val($(this).val().slice(0, -1));
              return false;
           };
  };
});

// if the values are empty, then make the button disabled
$(this).on("blur focus focusin focusout load resize scroll unload click " +
"dblclick mousedown mouseup mousemove mouseover mouseout mouseenter " + 
 "mouseleave change select submit keydown keypress keyup error", function() {
  if (($("#input_width").val() == '') || ($("#input_height").val() == '')) {
    $("#submit_size").prop('disabled', true);
  }
});

// if the values are not empty and in the range from 1 to 29, then make the button disabled
$(this).on("blur focus focusin focusout load resize scroll unload click " +
"dblclick mousedown mouseup mousemove mouseover mouseout mouseenter " + 
 "mouseleave change select submit keydown keypress keyup error", function() {
  if(($("#input_width").val() != '') && ($("#input_height").val() != '') && ($("#input_height").val() <= 30) && ($("#input_width").val() <= 30)) {
    $("#submit_size").prop('disabled', false);
  }
});

// if the button is pressed
$("#submit_size").on("click", function (event){
  let isDrawing, rightMouseButton;
  event.preventDefault();
  makeGrid();

  $("#pixel_canvas td").mousedown(function(e) {
    isDrawing = true;
    if (e.button == 2) {
      rightMouseButton = true;
      $(this).css("background-color", "#FFFFFF");
    } else {
             $(this).css("background-color", $('#colorPicker').val());
           }
  });
    
  $("#pixel_canvas td").mousemove(function(e) {
    $(this).css("cursor", "pointer");
      if (isDrawing) {
        if (rightMouseButton) {
          $("#pixel_canvas td").contextmenu(function() {
            return false;
          });
          $(this).css("background-color", "#FFFFFF");
        } else {
                 $(this).css("background-color", $('#colorPicker').val());
               }
      }
  });
    
  $("#pixel_canvas td").mouseup(function() {
    if (rightMouseButton) {
      rightMouseButton = false;
    }
    isDrawing = false;
  });
})

//drawing the grid
function makeGrid() {
  $("#pixel_canvas tbody").remove();
  let gridHeight = $("#input_height").val();
  let gridWidth = $("#input_width").val();
  let t="<tbody>";
  let tdsize = gridHeight > gridWidth ? 450 / gridWidth : 450 / gridHeight;
  for (let i = 0; i < gridHeight; i++) {
    t += "<tr class='gridtr' style='height:" + Math.floor(tdsize) + "px;'>";
    for (let j = 0; j < gridWidth; j++) {
      t += "<td class='pxcol gridtd' style='width:" + Math.floor(tdsize) + "px;'></td>";
    };
    t += "</tr>";
  }
  t += "</tbody>";
  $("#pixel_canvas").append(t);
};


//context menu is disabled in grid
$("#pixel_canvas").contextmenu(function() {
    return false;
});

}); 