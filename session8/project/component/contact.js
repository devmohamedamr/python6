let template = document.createElement("template");

template.innerHTML = `

    <h1>contact componet</h1>
    <p>contact componet paragraph</p>

    <style>
        h1{
            color:blue;
        }
        p{
            color:gray;
        }
    <style>
`;



export default class contact extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}



customElements.define("contact-component",contact);