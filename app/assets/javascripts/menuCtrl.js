$burgerBtn = document.getElementById("burgerBtn");
$rightMenu = document.getElementById("rightMenu");
$topMenu = document.getElementById("topMenu");
$link1 = document.getElementById("link1");
$link2 = document.getElementById("link2");
$link3 = document.getElementById("link3");

function toggleMenu() {
  rightMenuState = getComputedStyle($rightMenu).display;
  topMenuState = getComputedStyle($topMenu.firstChild.nextSibling).display;
  if (rightMenuState == "block" && topMenuState != "none"){
    $rightMenu.style.display = "none";

  } else {
    $rightMenu.style.display = "block";
  }

  }


  $burgerBtn.addEventListener('click', toggleMenu, false);
  $burgerBtn.addEventListener('touch', toggleMenu, false);
