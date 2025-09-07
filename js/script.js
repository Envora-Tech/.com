const menuToggle = document.getElementById('mobile-menu');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
    if(navbar.style.display === "flex"){
        navbar.style.display = "none";
    } else {
        navbar.style.display = "flex";
    }
});
