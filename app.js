let ul=document.querySelector("ul");
let inp=document.querySelector("input");
let delbtn=document.createElement("button");

function addingele(){
    let li=document.createElement("li");
    li.innerText=inp.value;

    delbtn.innerText="delete";
    li.insertAdjacentElement("beforeend",delbtn);
    ul.appendChild(li)
    inp.value="";
}

function removeele(event){
    let t=event.target;
    t.parentElement.remove();
}

let btn=document.querySelector(".addin");
btn.addEventListener("click",addingele);
delbtn.addEventListener("click",removeele);
