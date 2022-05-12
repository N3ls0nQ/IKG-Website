window.addEventListener("scroll", () => {
    document.querySelector(".navbar").style.top = "0px"
});

var section = document.querySelector(".placeholder__section");
window.addEventListener("scroll", () => {
    var value = window.scrollY;
    console.log(value)
    section.style.clipPath = "circle("+ value +"px at center)"
})