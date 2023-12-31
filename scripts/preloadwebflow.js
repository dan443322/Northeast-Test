function enableScroll() {
  document.body.style.overflow = "";
}

function disableScroll() {
  document.body.style.overflow = "hidden";
}

document.addEventListener("DOMContentLoaded", function () {
  disableScroll();

  window.addEventListener("load", function () {
    // Remove the preloader after all resources have finished loading
    const preloader = document.getElementById("preloading");

    preloader.style.animation = "fade-out 1s ease-in-out";

    setTimeout(() => {
      setTimeout(() => {
        enableScroll();
        preloader.style.display = "none";
      }, 10);
    }, 1000);
  });
});
