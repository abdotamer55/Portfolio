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

function openImageModal(src) {
  document.getElementById('imgInModal').src = src;
  document.getElementById('imgModal').style.display = 'block';
}

function closeImageModal() {
  document.getElementById('imgModal').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", function () {
  const zoomableImgs = document.querySelectorAll("#projects img, #certificates img");
  zoomableImgs.forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", function () {
      openImageModal(this.src);
    });
  });
});
window.onscroll = function () {
  const btn = document.getElementById("topBtn");
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function revealSections() {
  const sections = document.querySelectorAll('.section');
  const triggerBottom = window.innerHeight * 0.85;

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealSections);

document.addEventListener('DOMContentLoaded', revealSections);

