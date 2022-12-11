


// var btn = document.querySelector("#btn").onclick = function(){
//     var el = document.querySelector("#name");
//     console.log(el.value);
// }


// $("#btn").click(function(){
//     console.log( $("#name").val() );
// });




// console.log(el);
















// let text = document.querySelector("#text");
// let result = document.querySelector("#result");
// text.onkeyup = function(){
//     if(text.value.length > 20){
//         text.style.border = "5px solid red";
//     }else{
//         text.style.border = "1px solid black";
//     }
//     result.innerText = `count is : ${text.value.length}`;
// }




// let text = $("#text");
// let result = $("#result");

// text.keyup(function(){
//     if(text.val().length > 20){
//         text.addClass("warning");   
//     }else{
//         text.removeClass("warning");    
//     }
//     result.text(`count is : ${text.val().length}`)
// });




// $("#click").click(function(){
//     $(".box").fadeIn(2000,function(){
//         $(".box").slideUp(1000,function(){
//             $(".box").show();
//         });  
//     });
// });

// $("#click").click(function(){
//     $(".box").fadeIn().slideUp().show(1000);
// })


// $("#stop").click(function(){
//     $(".box").stop();  
// });














// var http = new XMLHttpRequest;

// http.open("GET","https://api.github.com/users/devmohamedamr");

// http.send();


// http.onreadystatechange = function(){
//     if(http.readyState == 4){
//         var js = JSON.parse(http.response);
//         console.log(js);
//     }
// }




// $.ajax({
//     method:"GET",
//     url:"https://api.github.com/users/devmohamedamr",
//     success:function(response){
//         console.log(response)
//     },
//     error:function(response){
//         console.log(response)
//     }
// });



// var data = fetch("https://api.github.com/users/devmohamedamr").then((r)=>{
//     console.log(r.json());
// }).catch((e)=>{
//     console.log(e)
// })



//  function getdata(){
//   var data =  fetch("https://api.github.com/users/devmohamedamr").then((data)=>{
//     var d =  data.json();
//     console.log(d);
//   });
// }

// getdata();




document.getElementById("click").onclick = function(){
    document.querySelector(".box").classList.add("boxleve");
}




