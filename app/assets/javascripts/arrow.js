$arrow = document.getElementById("arrow");
$pageTitle = document.getElementById("pageTitle");
var initialTop = getComputedStyle($arrow).top;
console.log(initialTop);
initialTop = parseInt(initialTop[0] + "" + initialTop[1] + "" + initialTop[2]);
console.log(initialTop);


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




function getNumericalTop (htmlElement){
  var top = getComputedStyle(htmlElement).top;
  top = top[0] + "" + top[1] + "" + top[2];
  console.log(parseInt(top));
  return parseInt(top);
}

$( document ).ready(function() {
  setInterval(function(){
    $arrow.style.textShadow = "0px 0px 12px rgba(6,170,231,1)";
  }, 500);

  setInterval(function(){
    $arrow.style.textShadow = "";
    $arrow.style.textShadow = "0px 0px 1px rgba(6,170,231,0)";
  }, 1001);

})

$arrow.addEventListener("click", scrolling, false);
