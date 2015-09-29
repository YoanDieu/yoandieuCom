alert('test');

$formationsBtn = document.getElementById("formationsBtn");
$experiencesBtn = document.getElementById("experiencesBtn");
$activitesBtn = document.getElementById("activitesBtn");

$formations = document.getElementById("formations");
$experiences = document.getElementById("experiences");
$activites = document.getElementById("activites");

function formationClick(){
  $formations.style.marginLeft = "0%";
  $experiences.style.marginLeft = "101%";
  $activites.style.marginLeft = "201%";
}

function experiencesClick(){
  $experiences.style.marginLeft = "0%";
  $formations.style.marginLeft = "-101%";
  $activites.style.marginLeft = "101%";
}

function activitesClick(){
  $activites.style.marginLeft = "0%";
  $experiences.style.marginLeft = "-101%";
  $fromations.style.marginLeft = "-201%";
}

$formationsBtn.addEventListener('click', formationClick, false);
$experiencesBtn.addEventListener('click', experiencesClick, false);
$activitesBtn.addEventListener('click', activitesClick, false);
