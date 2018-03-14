
var menu = document.querySelector('#show-about-me');
 var drawer2 = document.querySelector('.photo');
 var drawer3 = document.querySelector('.myportfolio');
 var drawer4 = document.querySelector('.gridfooter');



function toopen (){

    drawer2.classList.add('open');
    drawer3.classList.add('open');
    drawer4.classList.add('open');
    
    document.getElementById("show-about-me").remove();

 }


menu.addEventListener('click', function (e) {
toopen();
e.stopPropagation();
});

 
addEventListener('mousewheel', function (e) {
  toopen(); 
  e.stopPropagation();
  
});
