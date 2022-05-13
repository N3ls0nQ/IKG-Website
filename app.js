window.addEventListener("scroll", () => {
    if(window.scrollY > 0){
        document.querySelector(".navbar").style.top = "0px"
    } else{
        document.querySelector(".navbar").style.top = "15px"
    }
});

var section = document.querySelector(".placeholder__section");
window.addEventListener("scroll", () => {
    var value = window.scrollY - 300;
    if(value <= 0){
        value = 0;
    }
    section.style.clipPath = "circle("+ value+"px at center)"
})
