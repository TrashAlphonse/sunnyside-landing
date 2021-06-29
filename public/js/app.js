// Hamburger

const hamburger = document.querySelector(".header__hamburger");
const menu = document.querySelector(".header__nav");

hamburger.addEventListener("click", () => {
      [hamburger, menu].forEach(el => el.classList.toggle("active"));
});


// Animation on scroll

const scrollElements = document.querySelectorAll(".js-scroll");
scrollElements.forEach(el => el.style.opacity = 0);



// Throttle function to prevent running handleScrollAnimation function every time a user scrolls

let throttleTimer = false;
const throttle = (callback, time) => {
    
    if (throttleTimer) return;

    throttleTimer = true;
    
    setTimeout(() => {
        callback();
        throttleTimer = false;
    }, time);
}



const elementInView = (el) => {
    const elementTop = el.getBoundingClientRect().top;

    return (
        elementTop <= (window.innerHeight || document.documentElement.clientHeight)
    );
};

const displayScrollElement = (element) => {
    element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
    element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
   scrollElements.forEach(el => {
       if (elementInView(el)) {
           displayScrollElement(el);
       } else {
           hideScrollElement(el);
       }
   })
};

window.addEventListener("scroll", () => {
    throttle(handleScrollAnimation, 250);
})

