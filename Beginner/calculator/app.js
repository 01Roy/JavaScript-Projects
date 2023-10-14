let screen = document.getElementById("screen");
buttons = document.querySelectorAll("button");
// console.log(buttons);

let screenVal ='';
for(items of buttons){
    items.addEventListener("click",(e)=>{
        buttontext = e.target.innerText;
        // console.log(`this is the btn ${buttontext}`)
        if(buttontext == "X"){
            buttontext = "*";
            screenVal += buttontext;
            screen.value = screenVal;    
        }else if(buttontext == "C"){
            screenVal = '';
            screen.value = screenVal;
        }else if(buttontext == "="){
            screen.value = eval(screenVal);
        }else {
            screenVal += buttontext;
            screen.value = screenVal;
        }

    })
    
}