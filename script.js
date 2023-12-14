let moonmove = document.querySelector(".moonmove");
let btnmove = document.querySelector(".btnmove");
let backmountain = document.querySelector(".backmountain");
let btnfloatmove = document.querySelector(".btnfloatmove");
let titlemove = document.querySelector(".titlemove");
let star = document.querySelector(".star");
let nav = document.querySelector("main > nav");

let scroll_ = 0;

window.addEventListener("scroll",() => {
    if (scroll_ < window.scrollY) {
        moonmove.style.transform = `translateY(${-window.scrollY / 5}px)`;
        btnmove.style.transform = `translateY(${window.scrollY / 1.5}px)`;
        btnfloatmove.style.transform = `translateY(${window.scrollY / 1.5}px)`;
        backmountain.style.transform = `translateY(${window.scrollY / 2}px)`;
        titlemove.style.transform = `translateX(${500 - window.scrollY * 2.3}px)`;
        star.style.transform = `translateX(${window.scrollY / 3}px)`;
        nav.style.transform = `translateY(-${window.scrollY / 6}px)`;
    }
    else{
        moonmove.style.transform = `translateY(${-window.scrollY / 5}px)`;
        btnmove.style.transform = `translateY(${window.scrollY / 1.5}px)`;
        btnfloatmove.style.transform = `translateY(${window.scrollY / 1.5}px)`;
        backmountain.style.transform = `translateY(${window.scrollY / 2}px)`;
        titlemove.style.transform = `translateX(${800 - window.scrollY * 2.3}px)`;
        star.style.transform = `translateX(${window.scrollY / 3}px)`;
    }
    // scroll_ = window.scrollY;
});