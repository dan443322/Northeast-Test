function togglePopup(backdropID) {
    var backdrop = document.getElementById(backdropID);
   backdrop.classList.toggle('active');
   
}
function closePopup(backdropID) {
    var backdrop = document.getElementById(backdropID);
   backdrop.classList.remove('active');
   
}

function disableFunctions() {
     document.getElementById('burgerID').disabled = true;
}

function enableFunctions() {
     document.getElementById('burgerID').disabled = false;
}
