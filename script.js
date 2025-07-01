
function openImage(src) {
  document.getElementById("overlayImg").src = src;
  document.getElementById("imageOverlay").style.display = "flex";
}

function closeImage() {
  document.getElementById("imageOverlay").style.display = "none";
}



function toggleThemeMode() {
  const body = document.body;
  const toggleButton = document.getElementById("mode-toggle");
  const icon = toggleButton.querySelector("i");

  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}


function toggleProjectDetails(btn) {
  const details = btn.nextElementSibling;
  if (details) {
    details.style.display = (details.style.display === 'block') ? 'none' : 'block';
    btn.textContent = (details.style.display === 'block') ? 'Hide Project' : 'View Project';
  }
}
function openProject() {
  document.getElementById("projectOverlay").style.display = "flex";
}

function closeProject() {
  document.getElementById("projectOverlay").style.display = "none";
}
