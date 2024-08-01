// For search item start
let search = document.querySelector("input");
let search_item = document.querySelector(".search-item");

let display = "none";
search.addEventListener("click", () => {
  if (display === "none") {
    search_item.style.display = "block";
    display = "block";
  } else {
    search_item.style.display = "none";
    display = "none";
  }
});

// To hide the search item on click outside
document.addEventListener("click", (event) => {
  if (display === "block" && event.target !== search) {
    search_item.style.display = "none";
    display = "none";
  }
});
// For search item END

// For categorize dropdown
let categorise = document.querySelector(".Catagorise");
let categorise_item = document.querySelector(".categorise-item");

categorise.addEventListener("mouseover", () => {
  categorise_item.style.display = "block";
});

categorise.addEventListener("mouseout", () => {
  categorise_item.style.display = "none";
});
// For categorize dropdown

// Image Slider and Dot Navigation
const slides = document.querySelector(".slides");
const slideImages = document.querySelectorAll(".slides img");
const totalSlides = slideImages.length;
let currentSlideIndex = 0;
let dots = document.querySelectorAll(".dot");

// Initialize the slider and dots
function updateSlide() {
  slides.style.transform = `translateX(-${currentSlideIndex * 100}%)`;
  activedot();
}

function activedot() {
  dots.forEach((dot) => (dot.style.backgroundColor = "black"));
  dots[currentSlideIndex].style.backgroundColor = "white";
}

function showSlide(index) {
  if (index >= totalSlides) {
    currentSlideIndex = 0;
  } else if (index < 0) {
    currentSlideIndex = totalSlides - 1;
  } else {
    currentSlideIndex = index;
  }
  updateSlide();
}

// Event listeners for slide buttons
document.querySelector(".next").addEventListener("click", () => {
  showSlide(currentSlideIndex + 1);
});

document.querySelector(".prev").addEventListener("click", () => {
  showSlide(currentSlideIndex - 1);
});

// Initialize the first slide and dots
updateSlide();

// Automatic slide change every 2 seconds
setInterval(() => {
  showSlide(currentSlideIndex + 1);
}, 2000);

// Dot navigation
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});

setInterval(() => {
  const end_date = "3 August 2024  6:59 PM";
  const now = new Date();
  const end = new Date(end_date);
  console.log((end - now) / 1000);

  let day = document.querySelector(".days");
  let hours = document.querySelector(".hour");
  let minute = document.querySelector(".minute");
  let seconds = document.querySelector(".sec");

  const distance = (end - now) / 1000;
  const days = Math.floor(distance / 60 / 60 / 24);
  const hour = Math.floor((distance / 3600) % 24);
  const minutes = Math.floor((distance / 60) % 60);
  const sec = Math.floor(distance % 60);

  day.innerText = days;
  hours.innerText = hour;
  minute.innerText = minutes;
  seconds.innerText = sec;
}, 1000);

// vedio

const video = document.querySelectorAll("#hoverVideo");
video.forEach((video) => {
  video.addEventListener("mouseover", () => {
    video.play();
  });

  video.addEventListener("mouseleave", () => {
    video.pause();
  });
});

