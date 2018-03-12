var menu = document.querySelector('#show-about-me');
var drawer = document.querySelector('.mybio');
 var drawer2 = document.querySelector('.myphoto');
 var drawer3 = document.querySelector('.gridheader');
 var drawer4 = document.querySelector('.mysites');
var menu2 = document.querySelector('#show-menu');
var drawer5 = document.querySelector('.aboutme');
var drawer6 = document.querySelector('.show-m');
var drawer7 = document.querySelector('.mylogos');
var drawer8 = document.querySelector('.mycards');
var drawer9 = document.querySelector('.social');
var drawer10 = document.querySelector('.myart');
var drawer11 = document.querySelector('.myscience');
var drawer12 = document.querySelector('.mycv');
var drawer13 = document.querySelector('.gridfooter');
var drawer14 = document.querySelector('.mysocial');

let opens=false;
let opens2=false;

function toopen (){
    drawer.classList.add('open');
    drawer2.classList.add('open');
    drawer3.classList.add('open');
    menu2.classList.add('open');
    drawer9.classList.add('open');
    
    document.getElementById("show-about-me").remove();

 }


menu.addEventListener('click', function (e) {
if (!opens) {toopen();opens=true;
}
e.stopPropagation();
if (opens) menu2.addEventListener('click', function (e) {
    if (!opens2) {toopen2();opens2=true;}
    e.stopPropagation();
  });
});

addEventListener('mousewheel', function (e) {
    if (!opens) {toopen();opens=true;}
    e.stopPropagation();
    if (opens) {addEventListener('mousewheel', function (e) {
        
      if (!opens2) {toopen2();opens2=true;}
      e.stopPropagation();
      });}
    });


    function toopen2 (){
        drawer3.classList.add('open2');
        drawer4.classList.add('open');
        drawer7.classList.add('open');
         drawer8.classList.add('open');
           drawer10.classList.add('open'); 
           drawer11.classList.add('open');
            drawer12.classList.add('open');
             drawer13.classList.add('open');
             drawer14.classList.add('open');
      
     document.getElementById("show-menu").remove();
  
    }
    

  

  


  drawer4.addEventListener('click', function (e) {
      drawer4.classList.toggle('show');

      e.stopPropagation();
    });

