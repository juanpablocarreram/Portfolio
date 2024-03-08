const paraboll = document.querySelector(".mainSection");
document.addEventListener("scroll",() => {
const scrolled = window.scrollY;
paraboll.style.backgroundPositionY= scrolled * .5 + "px";
})