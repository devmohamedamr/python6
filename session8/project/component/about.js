let template = document.createElement("template");

template.innerHTML = `

    <h1>about componet</h1>
    <p>about componet paragraph</p>

    <style>
        h1{
            color:yellow;
        }
        p{
            color:blue;
        }
    <style>
`;



export default class about extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}



customElements.define("about-component",about);