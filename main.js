const paraboll = document.querySelector(".mainSection");
document.addEventListener("scroll",() => {
const scrolled = window.scrollY;
const mainSectionTwoPanelDownTitleOne = document.querySelector("#mainSectionTwoPanelDownTitleOne");
const mainSectionTwoPanelDownTitleTwo = document.querySelector("#mainSectionTwoPanelDownTitleTwo");
const fixed = document.querySelector(".fixed");
paraboll.style.backgroundPositionY= scrolled * .5 + "px";
if(scrolled>=1250 && scrolled<=2200){
   
    mainSectionTwoPanelDownTitleOne.style.animation="entering-left ease-in-out .4s forwards"
    mainSectionTwoPanelDownTitleTwo.style.animation="entering-right ease-in-out .4s forwards"
}
else{
   
}
})

