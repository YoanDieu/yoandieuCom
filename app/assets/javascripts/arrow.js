$arrow = document.getElementById("arrow");
$main = document.getElementById("main");
var initialTop = getComputedStyle($arrow).top;
initialTop = parseInt(initialTop[0] + "" + initialTop[1] + "" + initialTop[2]);

function scrolling(){

  position = 0;

  monInterval =  setInterval(function(){
    window.scrollTo(0,position * 2);
    position++;
  },1);

  monCleaner = setInterval(function(){
    if(position == 350){
      clearInterval(monInterval);
    }
  },1);
}




function getNumericalTop (){
  var top = getComputedStyle($arrow).top;
  top = top[0] + "" + top[1] + "" + top[2];
  console.log(parseInt(top));
  return parseInt(top);
}

setInterval(function(){
  $arrow.style.top = (getNumericalTop() + 10) + "px";
  console.log(getNumericalTop() + 10);
}, 500);

setInterval(function(){
  $arrow.style.top = initialTop + "px";
  console.log(getComputedStyle($arrow).top);
}, 1000);

$arrow.addEventListener("click", scrolling, false);
