var menu = document.querySelector("#show-content");
var drawer1 = document.querySelector(".wrapper");
var drawer2 = document.querySelector(".photo");
var drawer3 = document.querySelector(".myportfolio");
var drawer4 = document.querySelector(".gridfooter");
var drawer5 = document.querySelector(".gridheader");
var height = window.innerHeight / 3;

drawer5.style.cssText =
  "-webkit-transform:translate(0," +
  height.toFixed(0) +
  "px);transform:translate(0, " +
  height.toFixed(0) +
  "px);";

function toopen() {
  drawer1.classList.add("open");
  drawer2.classList.add("open");
  drawer3.classList.add("open");
  drawer4.classList.add("open");

  drawer5.style.cssText =
    "-webkit-transform:translate(0, 0px);transform:translate(0, 0px); transition: all 800ms cubic-bezier(0.645,.045,.355,1);";
  document.getElementById("show-content").remove();
}

let preventscroll = false;
let preventscrollcol = 0;
menu.addEventListener("click", function(e) {
  toopen();
  preventscroll = true;
  e.stopPropagation();
});

addEventListener("mousewheel", function(e) {
  console.log(preventscroll, " ", preventscrollcol);
  if (preventscrollcol < 5) {
    e.preventDefault();
    preventscrollcol++;
  }
  if (!preventscroll) {
    toopen();
    preventscroll = true;
    e.stopPropagation();
  }
});
