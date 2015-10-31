$formationsBtn = document.getElementById("formationsBtn");
$experiencesBtn = document.getElementById("experiencesBtn");
$activitesBtn = document.getElementById("activitesBtn");

$formations = document.getElementById("formations");
$experiences = document.getElementById("experiences");
$activites = document.getElementById("activites");
$cvWarper = document.getElementById('cvWarper');
$cvWarper.style.overflow = "hidden";
$experiencesBtn.style.border = "none";
$experiencesBtn.style.borderBottom = "2px solid #06aae7";
$experiencesBtn.style.color = "#06aae7";

var formationsActive = false;
var experiencesActive = true;
var activitesActive = false;

$experiencesBtn.style.backgroundColor = "white";

if (getComputedStyle($formations.firstChild.nextSibling.nextSibling.nextSibling).height > getComputedStyle($experiences.firstChild.nextSibling.nextSibling.nextSibling).height || getComputedStyle($formations.firstChild.nextSibling.nextSibling.nextSibling).height > getComputedStyle($activites.firstChild.nextSibling.nextSibling.nextSibling).height) {
  $cvWarper.style.height = getComputedStyle($formations.firstChild.nextSibling.nextSibling.nextSibling).height;
  console.log($formations.firstChild.nextSibling.nextSibling.nextSibling);
} else if (getComputedStyle($experiences.firstChild.nextSibling.nextSibling.nextSibling).height > getComputedStyle($formations.firstChild.nextSibling.nextSibling.nextSibling).height ||getComputedStyle($experiences.firstChild.nextSibling.nextSibling.nextSibling).height > getComputedStyle($activites.firstChild.nextSibling.nextSibling.nextSibling).height) {
  $cvWarper.style.height = getComputedStyle($experiences.firstChild.nextSibling.nextSibling.nextSibling).height;
  console.log($experiences.firstChild.nextSibling.nextSibling.nextSibling);
} else if (getComputedStyle($activites.firstChild.nextSibling.nextSibling.nextSibling).height > getComputedStyle($formations.firstChild.nextSibling.nextSibling.nextSibling).height || getComputedStyle($activites.firstChild.nextSibling.nextSibling.nextSibling).height > getComputedStyle($experiences.firstChild.nextSibling.nextSibling.nextSibling).height) {
  $cvWarper.style.height = getComputedStyle($activites.firstChild.nextSibling.nextSibling.nextSibling).height;
  console.log($activites.firstChild.nextSibling.nextSibling.nextSibling);
}

function setActive() {
  if (formationsActive != false){
    $formationsBtn.style.border = "none";
    $formationsBtn.style.borderBottom = "2px solid #06aae7";
    $experiencesBtn.style.border = "2px solid #06aae7";
    $activitesBtn.style.border = "2px solid #06aae7";
  }else if (experiencesActive != false) {
    $experiencesBtn.style.border = "none";
    $experiencesBtn.style.borderBottom = "2px solid #06aae7";
    $formationsBtn.style.border = "2px solid #06aae7";
    $activitesBtn.style.border = "2px solid #06aae7";
  }else if (activitesActive != false){
    $activitesBtn.style.border = "none";
    $activitesBtn.style.borderBottom = "2px solid #06aae7";
    $formationsBtn.style.border = "2px solid #06aae7";
    $experiencesBtn.style.border = "2px solid #06aae7";

  }
}

function formationClick(){
  formationsActive = true;
  experiencesActive = false;
  activitesActive = false;

  setActive();

  $cvWarper.style.overflow = "visible";

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

  setTimeout(function(){$cvWarper.style.overflow = "hidden";}, 1000);
}

function experiencesClick(){
  formationsActive = false;
  experiencesActive = true;
  activitesActive = false;

  setActive();

  $cvWarper.style.overflow = "visible";

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

  setTimeout(function(){$cvWarper.style.overflow = "hidden";}, 1000);
}

function activitesClick(){
  formationsActive = false;
  experiencesActive = false;
  activitesActive = true;

  setActive();

  $cvWarper.style.overflow = "visible";

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

  setTimeout(function(){$cvWarper.style.overflow = "hidden";}, 1000);
}

function formationHover(){
  $formationsBtn.style.backgroundColor = "white";
  $formationsBtn.style.color = "#06aae7";
  setActive();
}

function experiencesHover(){
  $experiencesBtn.style.backgroundColor = "white";
  $experiencesBtn.style.color = "#06aae7";
  setActive();
}

function activitesHover(){
  $activitesBtn.style.backgroundColor = "white";
  $activitesBtn.style.color = "#06aae7";
  setActive();
}

function formationOut(){
  if (formationsActive == false){
    $formationsBtn.style.backgroundColor = "#06aae7";
    $formationsBtn.style.color = "white";
  }
  setActive();
}

function experiencesOut(){
  if (experiencesActive == false){
    $experiencesBtn.style.backgroundColor = "#06aae7";
    $experiencesBtn.style.color = "white";
  }
  setActive();
}

function activitesOut(){
  if (activitesActive == false){
    $activitesBtn.style.backgroundColor = "#06aae7";
    $activitesBtn.style.color = "white";
  } else {
    $activitesBtn.style.backgroundColor = "white";
    $activitesBtn.style.color = "#06aae7";
  }
  setActive();
}

$formationsBtn.addEventListener('mouseout', formationOut, false);
$experiencesBtn.addEventListener('mouseout', experiencesOut, false);
$activitesBtn.addEventListener('mouseout', activitesOut, false);

$formationsBtn.addEventListener('click', formationClick, false);
$experiencesBtn.addEventListener('click', experiencesClick, false);
$activitesBtn.addEventListener('click', activitesClick, false);

$formationsBtn.addEventListener('mouseover', formationHover, false);
$experiencesBtn.addEventListener('mouseover', experiencesHover, false);
$activitesBtn.addEventListener('mouseover', activitesHover, false);
