
window.addEventListener("load", () => {
    const slay = document.querySelector(".slay");
  
   
    setTimeout(() => {
        slay.classList.add("slay-hidden");
    }, 1300); 
  
    slay.addEventListener("transitionend", () => { 
        document.body.removeChild(slay);
    });
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
  