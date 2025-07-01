
function openImage(src) {
  document.getElementById("overlayImg").src = src;
  document.getElementById("imageOverlay").style.display = "flex";
}

function closeImage() {
  document.getElementById("imageOverlay").style.display = "none";
}

const modeToggle = document.getElementById('mode-toggle');
if (modeToggle) {
  modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    modeToggle.textContent = document.body.classList.contains('light-mode')
      ? '🌙 Dark Mode'
      : '☀ Light Mode';
  });
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
