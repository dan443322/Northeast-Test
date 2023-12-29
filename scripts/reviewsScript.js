const reviewsContent = document.querySelector(".reviews-content"),
  firstImg = reviewsContent.querySelectorAll(".reviews-box")[0],
  arrowIcons = document.querySelectorAll(".scroll-arrow");

let isDragStart = false,
  isDragging = false,
  prevPageX,
  prevScrollLeft,
  positionDiff;

const autoSlide = () => {
  // If there is no image left to scroll, return from here
  if (
    reviewsContent.scrollLeft -
      (reviewsContent.scrollWidth - reviewsContent.clientWidth) >
      -1 ||
    reviewsContent.scrollLeft <= 0
  )
    return;

  // Calculate the position difference
  positionDiff = Math.abs(positionDiff);

  let firstImgWidth = firstImg.clientWidth + 14;
  // Getting the difference value that needs to add or reduce from reviewsContent left to take the middle img center
  let valDifference = firstImgWidth - positionDiff;

  if (reviewsContent.scrollLeft > prevScrollLeft) {
    // If the user is scrolling to the right
    return (reviewsContent.scrollLeft +=
      positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff);
  }

  // If the user is scrolling to the left
  reviewsContent.scrollLeft -=
    positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
};

const dragStart = (e) => {
  // updatating global variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = reviewsContent.scrollLeft;
};

const dragging = (e) => {
  // scrolling images/reviewsContent to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  reviewsContent.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  reviewsContent.scrollLeft = prevScrollLeft - positionDiff;
};

const dragStop = () => {
  isDragStart = false;
  reviewsContent.classList.remove("dragging");

  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

reviewsContent.addEventListener("mousedown", dragStart);
reviewsContent.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
reviewsContent.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
reviewsContent.addEventListener("touchend", dragStop);

//-----------------------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const reviewsContent = document.querySelector(".reviews-content");
  const leftArrow = document.querySelector(".left-review-arrow");
  const rightArrow = document.querySelector(".right-review-arrow");

  // Set up scroll event listener
  reviewsContent.addEventListener("scroll", function () {
    // Check if scrolled to the left edge
    if (reviewsContent.scrollLeft > 0) {
      setTimeout(function () {
        leftArrow.style.opacity = "1";
      }, 10);
      leftArrow.style.animation = "100ms fade-in linear";
      leftArrow.style.cursor = "pointer";
    } else {
      leftArrow.style.animation = "100ms fade-out linear";
      leftArrow.style.cursor = "none";
      setTimeout(function () {
        leftArrow.style.opacity = "0";
      }, 10);
    }

    // Check if scrolled to the right edge
    const totalWidth = reviewsContent.scrollWidth - reviewsContent.clientWidth;
    if (reviewsContent.scrollLeft < totalWidth) {
      setTimeout(function () {
        rightArrow.style.opacity = "1";
      }, 10);
      rightArrow.style.animation = "100ms fade-in linear";
      rightArrow.style.cursor = "pointer";
    } else {
      rightArrow.style.animation = "100ms fade-out linear";
      rightArrow.style.cursor = "none";
      setTimeout(function () {
        rightArrow.style.opacity = "0";
      }, 10);
    }
  });

  // Optional: smooth scrolling
  const smoothScrollOptions = {
    behavior: "smooth",
  };

  // Handle left arrow click for smooth scrolling
  leftArrow.addEventListener("click", function () {
    reviewsContent.scrollBy({
      left: -303, // Adjust the scroll amount as needed
      ...smoothScrollOptions,
    });
  });

  // Handle right arrow click for smooth scrolling
  rightArrow.addEventListener("click", function () {
    reviewsContent.scrollBy({
      left: 303, // Adjust the scroll amount as needed
      ...smoothScrollOptions,
    });
  });
});
