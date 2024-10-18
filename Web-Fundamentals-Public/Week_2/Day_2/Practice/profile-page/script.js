console.log("page loaded...");
function removee(id){
    elment=document.querySelector(id);
    elment.remove();
}

function change(id){
    elment=document.querySelector(id);
    elment.innerText="Adrien D";
}


function decrease(id){
    element=document.querySelector(id);
    element.innerText=Number(element.innerText)-1;
}



function increase(id){
    element=document.querySelector(id);
    element.innerText=Number(element.innerText)+1;
}