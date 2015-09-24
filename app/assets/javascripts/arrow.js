$arrow = document.getElementById("arrow");
$main = document.getElementById("main");

$arrow.addEventListener("click", function(){
  for (i= 0; i < 600; i++){
    setTimeout(function(){
      window.scrollTo(0, i);
    }, 100);
  }
}, false);
