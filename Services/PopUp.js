function togglePopup(backdropID) {
    var backdrop = document.getElementById(backdropID);
   backdrop.classList.toggle('active');
   
}
function closePopup(backdropID) {
    var backdrop = document.getElementById(backdropID);
   backdrop.classList.remove('active');
   
}

function disableFunctions() {
     document.getElementById(".nav-burger-menu").disabled = true;
}

function enableFunctions() {
     document.getElementById(".nav-burger-menu").disabled = false;
}
