<<<<<<< HEAD
function openLeftMenu() {
  document.getElementById("leftMenu").style.display = "block";
}

function closeLeftMenu() {
  document.getElementById("leftMenu").style.display = "none";
}

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}

let currentIndex = 0;
  let slides = document.querySelector(".slider");
  let totalSlides = document.querySelectorAll(".slide").length;
  let dots = document.querySelectorAll(".d");
  let autoSlideInterval;

  function updateSliderPosition() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[currentIndex].classList.add("active");
  }

  function changeSlide(direction) {
      currentIndex += direction;
      if (currentIndex >= totalSlides) currentIndex = 0;
      if (currentIndex < 0) currentIndex = totalSlides - 1;
      updateSliderPosition();
  }

  function goToSlide(index) {
      currentIndex = index;
      updateSliderPosition();
  }

  function startAutoSlide() {
      autoSlideInterval = setInterval(() => changeSlide(1), 3000);
  }

  function stopAutoSlide() {
      clearInterval(autoSlideInterval);
  }

  // Start auto slide when page loads
=======
function openLeftMenu() {
  document.getElementById("leftMenu").style.display = "block";
}

function closeLeftMenu() {
  document.getElementById("leftMenu").style.display = "none";
}

function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}

let currentIndex = 0;
  let slides = document.querySelector(".slider");
  let totalSlides = document.querySelectorAll(".slide").length;
  let dots = document.querySelectorAll(".d");
  let autoSlideInterval;

  function updateSliderPosition() {
      slides.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach(dot => dot.classList.remove("active"));
      dots[currentIndex].classList.add("active");
  }

  function changeSlide(direction) {
      currentIndex += direction;
      if (currentIndex >= totalSlides) currentIndex = 0;
      if (currentIndex < 0) currentIndex = totalSlides - 1;
      updateSliderPosition();
  }

  function goToSlide(index) {
      currentIndex = index;
      updateSliderPosition();
  }

  function startAutoSlide() {
      autoSlideInterval = setInterval(() => changeSlide(1), 3000);
  }

  function stopAutoSlide() {
      clearInterval(autoSlideInterval);
  }

  // Start auto slide when page loads
>>>>>>> f8d5c09f787fb3c69ac173f304f0f2f9858da2fa
  startAutoSlide();