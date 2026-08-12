const backToTopButton = document.querySelector(".back-to-top");

function toggleBackToTopButton() {
  const scrollLimit = 400;

  backToTopButton.classList.toggle("is-visible", window.scrollY > scrollLimit);
}

window.addEventListener("scroll", toggleBackToTopButton, {
  passive: true,
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

toggleBackToTopButton();
