const blackdrop=document.querySelector(".blackdrop");
const slideBar=document.querySelector(".slide-menu");
const toggleBtn=document.querySelector(".menu-toggle");


function toggleSlideMenu(){
    blackdrop.classList.toggle("active");
    slideBar.classList.toggle("active");
}
blackdrop.addEventListener('click',function(){
    toggleSlideMenu()
})