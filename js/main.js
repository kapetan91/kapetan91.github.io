// modal
let modal = document.getElementById("simpleModal");
let modalBtn = document.getElementById("modalBtn");
let closeBtn = document.getElementsByClassName("closeBtn")[0];

// listen to open click
modalBtn.addEventListener("click", openModal);
// listen to close click
closeBtn.addEventListener("click", closeModal);
// listen to outside click
window.addEventListener("click", clickOutside);

// function to open modal
function openModal() {
    modal.style.display = "block";
}
// function to close modal
function closeModal() {
    modal.style.display = "none";
}
// // function to close modal when clicked outside
function clickOutside(e) {
    if(e.target === modal) {
        modal.style.display = "none";
    }
}

// particlesjs
particlesJS.load('particles-js', '../js/particlesjs.json', function() {
    console.log('Particles.js working!!!');

});
