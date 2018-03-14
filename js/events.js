
var menu = document.querySelector('#show-about-me');
var drawer1 = document.querySelector('.wrapper');
 var drawer2 = document.querySelector('.photo');
 var drawer3 = document.querySelector('.myportfolio');
 var drawer4 = document.querySelector('.gridfooter');
 var drawer5 = document.querySelector('.gridheader');


function toopen (){
  drawer1.classList.add('open');
    drawer2.classList.add('open');
    drawer3.classList.add('open');
    drawer4.classList.add('open');
    drawer5.classList.add('open');
    document.getElementById("show-about-me").remove();

 }

 let preventscroll=false; 
 let preventscrollcol=0;
menu.addEventListener('click', function (e) {
toopen();
preventscroll=true;
e.stopPropagation();

});


addEventListener('mousewheel', function (e) {
  console.log(preventscroll, ' ', preventscrollcol);
  if (preventscrollcol<2) {
    e.preventDefault(); preventscrollcol++;}
 if (!preventscroll) {

 toopen(); 
 preventscroll=true;
 e.stopPropagation();
 
}

});
