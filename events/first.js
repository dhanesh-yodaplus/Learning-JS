let btn1 = document.querySelector("#btn1");


// btn1.onclick = (e) =>{     
//     console.log(e);                // e-> event object
//     console.log("btn1 was clicked");
//     console.log(e.type)
//     console.log(e.target)
// }

// let div = document.querySelector("div");
// div.onmouseover = (evt)=>{
//     console.log(evt);                
//     console.log("hovered over div");
//     console.log(evt.type)
//     console.log(evt.target)
// }

btn1.addEventListener("click",(evt)=>{
    console.log("button1 was clicked - handler1");
    console.log(evt);
})
const handler2 = () =>{
    console.log("button1 was clicked - handler2");
}

btn1.addEventListener("click",handler2);

btn1.addEventListener("click",()=>{
    console.log("So we can have more than one event Listeners")
})

btn1.removeEventListener("click",handler2)

let modeBtn = document.querySelector("#mode")
let currMode = "light";


modeBtn.addEventListener("click",()=>{
    console.log("Changing modes")
    if(currMode ==="light"){
        currMode = "dark"
        document.querySelector("body").style.backgroundColor = "black"; 
    }else{
        currMode = "light"
        document.querySelector("body").style.backgroundColor = "white"; 

    }

    console.log(currMode)
});
 
