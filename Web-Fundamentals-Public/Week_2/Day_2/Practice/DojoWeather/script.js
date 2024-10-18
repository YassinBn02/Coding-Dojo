function alertt(){
    alert("Loading weather report...")
}

function removee(id){
    document.getElementById(id).remove();
}

function tempi(id){
    var e=document.getElementById(id);
    e.innerText=Math.floor(e.innerText*1.8+32)
}

var arr=["red","red2","red3","red4","blue","blue2","blue3","blue4"]

function changeTemp(){
    for(var i=0;i<arr.length;i++){
        tempi(arr[i])
    }
}