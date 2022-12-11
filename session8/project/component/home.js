let template = document.createElement("template");

template.innerHTML = `

    <h1>home componet</h1>
    <p>home componet paragraph</p>

    <child-component name='send'></child-component>
    <child-component name='save'></child-component>

    <style>
        h1{
            color:red;
        }
        p{
            color:green;
        }
    <style>
`;



export default class home extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true))
    }
}



customElements.define("home-component",home);