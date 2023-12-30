//Get the button
let mybutton = document.getElementById("button-to-top");
let toTopImage = document.getElementById("to-top-image");
let bodyHeight = document.body.offsetHeight;
let showButtontoTop = bodyHeight / 2;

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > showButtontoTop ||
    document.documentElement.scrollTop > showButtontoTop
  ) {
    setTimeout(
      (toTopImage.style.animation = "luhag 6s infinite ease-in-out"),
      100
    );
    mybutton.style.transform = "translateX(0px)";
  } else {
    toTopImage.style.animation = "";
    mybutton.style.transform = "translateX(100px)";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  afterNavClick();
}
