mobile_nav_btn();

function mobile_nav_btn() {
    document.querySelector(".hamburger").addEventListener("click", e => {
        document.querySelector(".hamburger").classList.toggle("active");
        document.querySelector(".mobile_nav").classList.toggle("active");
    });
}

// Carousel

const duration = 5; // in seconds
const picCount = 3;

const carouselContainer = document.querySelector(".carousel");
var currentImage = 1;

function carousel(prev){
    if (prev) {
        if (currentImage == 1) {
            carouselContainer.setAttribute("current_image", picCount);
        } else {
            currentImage--;
            carouselContainer.setAttribute("current_image", currentImage);
        }
    } else {
        if (currentImage == picCount) {
            currentImage = 1;
            carouselContainer.setAttribute("current_image", 1);
        } else {
            currentImage++;
            carouselContainer.setAttribute("current_image", currentImage);
        }
    }
}

carouselContainer.addEventListener("hover", e => {
    console.log("hovering");
})

// var carouselRun = setInterval(carousel, duration * 1000);