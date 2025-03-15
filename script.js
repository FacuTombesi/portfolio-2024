/* -------------------- Nav Menu -------------------- */

function openMenu() {
  const nav = document.querySelector("nav")

  nav.classList.toggle("open");
}

/* --------------------- Slider --------------------- */

const slider = document.querySelector(".projects-items");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let index = 0;
const totalProjects = document.querySelectorAll(".project").length;
const projectsPerPage = 3;
const maxIndex = Math.ceil(totalProjects / projectsPerPage) - 1;

function updateSlider() {
  slider.style.transform = `translateX(${-index * 100}%)`;
}

nextBtn.addEventListener("click", () => {
  if (index < maxIndex) {
    index++;
    updateSlider();
  }
});

prevBtn.addEventListener("click", () => {
  if (index > 0) {
    index--;
    updateSlider();
  }
});