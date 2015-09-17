$burgerBtn = document.getElementById("burgerBtn");
$rightMenu = document.getElementById("rightMenu");

function toggleMenu() {
  menuState = getComputedStyle($rightMenu).display;

  if (menuState == "block"){
    $rightMenu.style.display = "none";
  } else {
    $rightMenu.style.display = "block";
  }

  }

  $burgerBtn.addEventListener('click', toggleMenu, false);
