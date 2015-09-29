$formationsBtn = document.getElementById("formationsBtn");
$experiencesBtn = document.getElementById("experiencesBtn");
$activitesBtn = document.getElementById("activitesBtn");

$formations = document.getElementById("formations");
$experiences = document.getElementById("experiences");
$activites = document.getElementById("activites");
$cvWarper = document.getElementById('cvWarper');

if (getComputedStyle($formations).height > getComputedStyle($experiences).height || getComputedStyle($formations).height > getComputedStyle($activites).height) {
  $cvWarper.style.minHeight = getComputedStyle($formations).height;
} else if (getComputedStyle($experiences).height > getComputedStyle($formations).height ||getComputedStyle($experiences).height > getComputedStyle($activites).height) {
  $cvWarper.style.minHeight = getComputedStyle($experiences).height;
} else if (getComputedStyle($activites).height > getComputedStyle($formations).height || getComputedStyle($activites).height > getComputedStyle($experiences).height) {
  $cvWarper.style.minHeight = getComputedStyle($activites).height;
}

function formationClick(){
  $formations.style.marginLeft = "0%";
  $formations.style.opacity = "1";
  $experiences.style.marginLeft = "105%";
  $experiences.style.opacity = "0";
  $activites.style.marginLeft = "205%";
  $activites.style.opacity = "0";

  $formationsBtn.style.backgroundColor = "white";
  $formationsBtn.style.color = "#06aae7";

  $experiencesBtn.style.backgroundColor = "#06aae7";
  $experiencesBtn.style.color = "white";

  $activitesBtn.style.backgroundColor = "#06aae7";
  $activitesBtn.style.color = "white";
}

function experiencesClick(){
  $experiences.style.marginLeft = "0%";
  $experiences.style.opacity = "1";
  $formations.style.marginLeft = "-105%";
  $formations.style.opacity = "0";
  $activites.style.marginLeft = "105%";
  $activites.style.opacity = "0";

  $experiencesBtn.style.backgroundColor = "white";
  $experiencesBtn.style.color = "#06aae7";

  $formationsBtn.style.backgroundColor = "#06aae7";
  $formationsBtn.style.color = "white";

  $activitesBtn.style.backgroundColor = "#06aae7";
  $activitesBtn.style.color = "white";
}

function activitesClick(){
  $activites.style.marginLeft = "0%";
  $activites.style.opacity = "1";
  $formations.style.marginLeft = "-205%";
  $formations.style.opacity = "0";
  $experiences.style.marginLeft = "-105%";
  $experiences.style.opacity = "0";

  $activitesBtn.style.backgroundColor = "white";
  $activitesBtn.style.color = "#06aae7";

  $formationsBtn.style.backgroundColor = "#06aae7";
  $formationsBtn.style.color = "white";

  $experiencesBtn.style.backgroundColor = "#06aae7";
  $experiencesBtn.style.color = "white";

}

function formationHover(){
  $formationsBtn.style.backgroundColor = "white";
  $formationsBtn.style.color = "#06aae7";
}

function experiencesHover(){
  $experiencesBtn.style.backgroundColor = "white";
  $experiencesBtn.style.color = "#06aae7";
}

function activitesHover(){
  $activitesBtn.style.backgroundColor = "white";
  $activitesBtn.style.color = "#06aae7";
}

function formationOut(){
  $formationsBtn.style.backgroundColor = "#06aae7";
  $formationsBtn.style.color = "white";
}

function experiencesOut(){
  $experiencesBtn.style.backgroundColor = "#06aae7";
  $experiencesBtn.style.color = "white";
}

function activitesOut(){
  $activitesBtn.style.backgroundColor = "#06aae7";
  $activitesBtn.style.color = "white";
}

$formationsBtn.addEventListener('click', formationClick, false);
$experiencesBtn.addEventListener('click', experiencesClick, false);
$activitesBtn.addEventListener('click', activitesClick, false);

$formationsBtn.addEventListener('mouseover', formationHover, false);
$experiencesBtn.addEventListener('mouseover', experiencesHover, false);
$activitesBtn.addEventListener('mouseover', activitesHover, false);

$formationsBtn.addEventListener('mouseout', formationOut, false);
$experiencesBtn.addEventListener('mouseout', experiencesOut, false);
$activitesBtn.addEventListener('mouseout', activitesOut, false);
