export default class router {
    constructor(){
        document.querySelector("nav").onclick = function(e){
            switch(e.target.getAttribute("to")){
                case "home":
                    document.querySelector("router").innerHTML = "<home-component></home-component>";
                break;
                case "about":
                    document.querySelector("router").innerHTML = "<about-component></about-component>";

                break;
                case "contact":
                    document.querySelector("router").innerHTML = "<contact-component></contact-component>";
                break;
            }
        }
    }
}