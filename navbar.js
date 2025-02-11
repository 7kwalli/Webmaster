
window.addEventListener("scroll", () => {
    const stickyBar = document.querySelector(".sticky");
  
    const stickyTop = stickyBar.getBoundingClientRect().top;
  
    if (stickyTop <= 0) {
        stickyBar.classList.add("stuck");
    } else {
        stickyBar.classList.remove("stuck");
    }
  });