const template = document.createElement("template");
template.innerHTML = `
    <style>
            h1{
                font-size: 1.6rem;
                font-weigth: 100;
            }
            img{
                border-radius: 50%;
                width: 175px;
                heigth: 175px;
            }
            .card{
                background: #f99460;
                box-shadow: 10px 5px 5px black;
                height: 400px;
                width: 200px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                align-items: center;
                border-radius: 10px;
                text-align: center;
                padding: 10px;
                margin-bottom: 5vh;
            }
            .shadow-diffuse{
                box-shadow:0 1px 1px rgba(0,0,0,0.08),0 2px 2px rgba(0,0,0,0.12),0 4px 4px rgba(0,0,0,0.16),0 8px 8px rgba(0,0,0,0.2)
            }

            p{
                justify-self: flex-end;
            }

            .card{
                transition: all 0.5s ease;
            }

            .card:hover{
                transform: scale(1.1);
            }

            @media (max-width: 950px){
                .card{
                    height: 175px;
                    width: 100px;  
                }
                img{
                    heigth: 87.5px;
                    width: 87.5px;
                }
                p{
                    display: none;
                }
                h1{
                    font-size: 1rem
                }
            }

    </style>
    <div class="card shadow-diffuse">
        <img></img>
        <h1></h1>
        <p></p>

    </div>
`

class UserCard extends HTMLElement{
    constructor() {
        super();

        this.attachShadow({mode: "open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("h1").innerText= this.getAttribute("name")
        this.shadowRoot.querySelector("img").src= this.getAttribute("avatar")
        this.shadowRoot.querySelector("p").innerText= this.getAttribute("title")

    }
}


window.addEventListener("scroll", () => {
    reveals = document.querySelectorAll(".card");

    for(var i = 0; i < reveals.length; i++){
        var windowheigth = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealTop < windowheigth - revealpoint){
            reveals[i].classList.add("active")
        }else{
            reveals[i].classList.remove("active")
        }
    }
})

window.customElements.define("user-card", UserCard);

//.shadow-4{box-shadow:0 1px 1px rgba(0,0,0,0.15),0 2px 2px rgba(0,0,0,0.15),0 4px 4px rgba(0,0,0,0.15),0 8px 8px rgba(0,0,0,0.15)}.shadow-5{box-shadow:0 1px 1px rgba(0,0,0,0.12),0 2px 2px rgba(0,0,0,0.12),0 4px 4px rgba(0,0,0,0.12),0 8px 8px rgba(0,0,0,0.12),0 16px 16px rgba(0,0,0,0.12)}.shadow-6{box-shadow:0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11),0 4px 4px rgba(0,0,0,0.11),0 8px 8px rgba(0,0,0,0.11),0 16px 16px rgba(0,0,0,0.11),0 32px 32px rgba(0,0,0,0.11)}.shadow-sharp{box-shadow:0 1px 1px rgba(0,0,0,0.25),0 2px 2px rgba(0,0,0,0.2),0 4px 4px rgba(0,0,0,0.15),0 8px 8px rgba(0,0,0,0.1),0 16px 16px rgba(0,0,0,0.05)}.shadow-shorter{box-shadow:0 1px 1px rgba(0,0,0,0.11),0 2px 2px rgba(0,0,0,0.11),0 4px 4px rgba(0,0,0,0.11),0 6px 8px rgba(0,0,0,0.11),0 8px 16px rgba(0,0,0,0.11)}.shadow-longer{box-shadow:0 2px 1px rgba(0,0,0,0.09),0 4px 2px rgba(0,0,0,0.09),0 8px 4px rgba(0,0,0,0.09),0 16px 8px rgba(0,0,0,0.09),0 32px 16px rgba(0,0,0,0.09)} .shadow-dreamy{box-shadow:0 1px 2px rgba(0,0,0,0.07),0 2px 4px rgba(0,0,0,0.07),0 4px 8px rgba(0,0,0,0.07),0 8px 16px rgba(0,0,0,0.07),0 16px 32px rgba(0,0,0,0.07),0 32px 64px rgba(0,0,0,0.07)}
/*# sourceMappingURL=shadow.css.map */
