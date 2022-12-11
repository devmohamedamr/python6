let template = document.createElement("template");

template.innerHTML = `
    <button></button>

    <style>
        button{
            border:none;
            outline:none;
            padding:20px 20px
        }
    </style>
`;


export default class child extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector("button").innerText = this.getAttribute("name");
    }
}


customElements.define("child-component",child);