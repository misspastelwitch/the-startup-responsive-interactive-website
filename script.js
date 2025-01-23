console.log("hello");


const menuButton = document.querySelector("#hamburger"); 
const hetMenu = document.querySelector("#menu"); // Selecteert het menu-element met het id 'menu'
menuButton.addEventListener("click", () => {
    function toggleMenu() {
        hetMenu.classList.toggle("open");
})
console.log("first 10 lines run smoothly");
// Carousel

let slidesContainer = document.querySelector('.products'); 
let slides = document.querySelectorAll('.product'); 
let nextButton = document.querySelector('#next'); 

let currentSlide = 0; 

// Slides
function updateCarousel() {
  slidesContainer.classList.remove('slide-0', 'slide-1'); 

  slidesContainer.classList.add(`slide-${currentSlide}`);  
}
console.log("first 15 lines run smoothly");

document.querySelector('#next').addEventListener('click, () => {   // select next button and add click function
  if (currentSlide < slides.length - 1) {  
    currentSlide++; 
    updateCarousel();  
  }
};


console.log("first 25 lines run smoothly");
