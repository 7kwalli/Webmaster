
function plusslidez(n) {
  showslidez(slideIndex += n);
}

function currentSlide(n) {
  showslidez(slideIndex = n);
}

function showslidez(n) {
  let i;
  let slidez = document.getElementsByClassName("slidez");
  let dots = document.getElementsByClassName("dot");
  if (n > slidez.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slidez.length}
  for (i = 0; i < slidez.length; i++) {
    slidez[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slidez[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}


window.addEventListener("scroll", () => {
  const stickyBar = document.querySelector(".sticky");

  const stickyTop = stickyBar.getBoundingClientRect().top;

  if (stickyTop <= 0) {
      stickyBar.classList.add("stuck");
  } else {
      stickyBar.classList.remove("stuck");
  }
});




document.addEventListener("DOMContentLoaded", function () {
  const fadeElements = document.querySelectorAll(".fad-in");

  function checkVisibility() {
      fadeElements.forEach(element => {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.85) {  
              element.classList.add("visible");
          }
      });
  }

  window.addEventListener("scroll", checkVisibility);
  checkVisibility(); 
});
