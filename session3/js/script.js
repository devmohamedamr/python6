// window.onscroll = function(){
//     if(window.scrollY > 60){
//         document.querySelector("nav").classList.add("nav--gray");
//         document.querySelector("nav").classList.remove("nav");

//         document.querySelector("#topto").classList.add("totop");
//     }else{
//         document.querySelector("nav").classList.remove("nav--gray");
//         document.querySelector("nav").classList.add("nav");
//         document.querySelector("#topto").classList.remove("totop");

//     }
// }

// setTimeout(function(){
//     console.log("amr");
// },2000);

// var i=0;
// var timer = setInterval(function(){
//     console.log(++i);
// },1000);


// function stop(){
//     clearInterval(timer);
// }
// console.log("test");
// console.log("mohamed");


var img = document.querySelector("#img");
var imges = [
    "img/desktop_wallpaper___night_sky_4_by_niphion_dfegna6-414w.jpg",
    "img/ocean-3605547__340.jpg",
    "img/outrun-vaporwave-hd-wallpaper-thumb.jpg",
];
setInterval(function () {
    img.src = imges[Math.floor(Math.random()*imges.length)];
},1000);

