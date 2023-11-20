let body = document.querySelector("body");

let btnQurious = document.createElement("button");
btnQurious.setAttribute("id","btnQurious");
btnQurious.addEventListener("click",doSomething);
body.appendChild(btnQurious);


let speechRecognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();



function doSomething(){
    if(btnQurious.hasAttribute("listening") === false){
        btnQurious.setAttribute("listening",true);
        console.log("I started listening");
    }else{
        btnQurious.removeAttribute("listening");
        console.log("I stopped listening");
    }
}

