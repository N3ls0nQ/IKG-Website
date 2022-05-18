window.addEventListener("scroll", () => {
    if(window.scrollY > 0){
        document.querySelector(".navbar").style.top = "0px"
        document.querySelector(".drawer").style.top = "100px"
    } else{
        document.querySelector(".navbar").style.top = "15px"
        document.querySelector(".drawer").style.top = "115px"
    }
});

var menuBtn = document.querySelector(".menu__btn");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("btn-active");
    document.querySelector(".drawer").classList.toggle("drawer-active")
})

// var section = document.querySelector(".placeholder__section");
// window.addEventListener("scroll", () => {
//     var value = window.scrollY - 300;
//     if(value <= 0){
//         value = 0;
//     }
//     section.style.clipPath = "circle("+ value+"px at center)"
// })

// Show menu on hover

// document.querySelector(".ikg__video").height = window.screen.height

function showMenu(){
    var item = document.querySelector(".nav__listitemdrop");
    item.style.visibility = "visible"
    item.style.opacity = "1";
}
function disableMenu(){
    var item = document.querySelector(".nav__listitemdrop");
    item.style.visibility = "none"
    item.style.opacity = "0";
}

// -------------------------- PARALLAX

var parallax = document.querySelector(".parallax");
window.addEventListener("scroll", () => {
    let offset = window.scrollY;
    console.log(offset)
    parallax.style.backgroundPositionY = offset * 0.7 + "px";
})