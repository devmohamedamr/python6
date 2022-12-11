let html = document.createElement("template");

html.innerHTML = `

    <style>  
     
        .member2{
            width: 20%;
            height: 40%;
            margin: 1% 2%;
            color: gray;
            position: relative;
            overflow: hidden;
        }

        .member2:hover .social{
            top: 0px;
            left: 0px;
            opacity: 0.7;
        }

        .social{
            width: 20%;
            height: 80%;
            background: green;
            position: absolute;
            top: 0px;
            left: -50px;
            transition: 1s all;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            opacity: 0;
        }

        .social div{
            background: red;
            margin-top: 2%;
            width: 100%;
            height: 15%;
        }

        .member2__img{
            height: 80%;
        }

        .member2__img img {
            width: 100%;
            height: 100%;
        }
        .member2__content{
            height: 20%;
            padding-left: 7%;
        }   
    </style

    <section class="container2">
        <div class="member2">
            <div class="social"></div>
            <div class="member2__img">
                <img src="" alt="member">
            </div>
            <div class="member2__content">
                <h4></h4>
                <h5></h5>
            </div>
        </div>
    </section>
`;



export default class person extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(html.content.cloneNode(true));
        this.shadowRoot.querySelector("h4").innerText = this.getAttribute("name");
        this.shadowRoot.querySelector("h5").innerText = this.getAttribute("title");
        this.shadowRoot.querySelector("img").src = this.getAttribute("img");
    }
}



customElements.define("person-tag",person);