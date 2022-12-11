
var task = document.querySelector("#task");
var btn = document.querySelector("#btn");
var tableshow = document.querySelector("#show");
var searchbtn = document.querySelector("#search");
var todos = [];
var index;

btn.onclick = function(){
    
    var taskobject = {task:task.value,status:0};
    todos.push(taskobject);
    task.value = "";
    show();
}


function show(){
    var res = '';
    for(var i=0;i<todos.length;i++){
        var status = (todos[i].status == 0) ? "not started" : "done";
        var done = (todos[i].status == 1) ? "done" : "";
        res +=  `
            <tr id='tr-${i}'>
                <td class='${done}' onclick='done(${i})' id='${i}'>${todos[i].task}</td>
                <td>${status}</td>
                <td> <button onclick='destroy(${i})'>delete</button> </td>
                <td> <button onclick='update(${i})'>update</button> </td>
            </tr>
        `;   
    }

    tableshow.innerHTML = res;
}



function done(i){
    todos[i].status = 1;
    show();
}

function destroy(i){
    todos.splice(i,1);
    show();
}


function update(i){
   
    document.getElementById("btn").classList.add("hide");
    document.getElementById("update").classList.remove("hide");

    task.value = todos[i].task;
    index = i;

}


document.getElementById("update").onclick = function(){
    todos[index].task = task.value;
    show();
}




function search(){
    // console.log("test");
    for(var i=0;i<todos.length;i++){
        if(searchbtn.value == todos[i].task){   
            continue;
        }else if(searchbtn.value == ""){
            document.getElementById("tr-"+i).style.display = "block";
        }
        else{
            document.getElementById("tr-"+i).style.display = "none";
        }
    }
}

