const burgerBtn = document.querySelector(".nav-burger-menu");

const otherDiv = document.querySelector(".home-mobile-menu");

const elementsToBlur = document.querySelectorAll(
  ".home-container > :not(.home-navbar)"
);

console.log(burgerBtn);

let isImage1 = true;

function toggleImageAndDiv() {
  // Toggle the image source
  burgerBtn.querySelector("img").src = isImage1
    ? "resources/Icons/close-bold-svgrepo-com.svg"
    : "resources/Icons/menu-burger-horizontal-svgrepo-com.svg"; // Replace with the path to your other image

  // Toggle the visibility of another div (replace '.mobile-links' with your actual class)

  // Toggle fade-in and fade-out effect with move from right animation
  if (otherDiv.style.display === "none" || otherDiv.style.display === "") {
    otherDiv.style.display = "block";
    setTimeout(() => {
      otherDiv.classList.remove("fade-out");
      otherDiv.classList.add("fade-in");
      elementsToBlur.forEach((element) => {
        // Add filter blur 5px to each selected element
        element.style.filter = "blur(5px)";
      });
    }, 10);
  } else {
    otherDiv.classList.remove("fade-in");
    otherDiv.classList.add("fade-out");

    setTimeout(() => {
      elementsToBlur.forEach((element) => {
        // Add filter blur 5px to each selected element
        element.style.filter = "blur(0px)";
      });
      otherDiv.style.display = "none";
    }, 500);
  }

  // Update the state of the image
  isImage1 = !isImage1;
}
