// document.getElementById("go").onclick = function(){
//     var search = document.getElementById("search").value;
//         // 1

//     var ajax = new XMLHttpRequest;

//     // 2

//     ajax.open("GET",`https://api.github.com/users/${search}`);

//     // 3 
//     ajax.send();


//     ajax.onreadystatechange = function(){
//         if(ajax.readyState == 4){
//             var data = JSON.parse(ajax.response);
//             console.log(data);
//             if(ajax.status == 404){
//                 document.getElementById("img").src = "img/room1.jpg";

//             }else{
//                 document.getElementById("img").src = data.avatar_url;
//             }
//         }
//     }
// }





// sessionstorage
// cookies
// localstorage

var ob = [{name:"ahmed",age:20}];
 
localStorage.setItem('color',JSON.stringify(ob));



var color =   localStorage.getItem("color");


console.log(JSON.parse(color));
