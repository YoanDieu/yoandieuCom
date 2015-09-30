$jumbotron = document.getElementById("jumbotron");


var jumbos = ["mars.jpeg","marscratere.jpg","rosetta.jpg","singularity.jpg","tore1.jpg","mir8.jpg","MARS-facebook.jpg","isscopula.jpg"];
var random = parseInt(Math.random() * (jumbos.length - 0) + 0);
$jumbotron.style.backgroundImage = "url(" + jumbos[random]+ ")";
