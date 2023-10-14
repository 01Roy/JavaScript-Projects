let btn = document.getElementById("btn");

btn.addEventListener("click",()=>{
    let inputVal = document.getElementById("inputBox").value;
    let finalResult = document.getElementById("resultFinal");
    let gemratedNumber = document.getElementById("randomNumber");
    
    let randomNumber = Math.floor(Math.random()*100);
    console.log(inputVal);

    if(inputVal>100){
        finalResult.innerHTML= `Please choice the number between 0 - 100`;
    }else if(inputVal==randomNumber){
        finalResult.innerHTML = `You Win!!`;
        gemratedNumber.innerHTML = `Random Genrated Number is ${randomNumber}`
    }else if(inputVal>randomNumber){
        finalResult.innerHTML = `You had choice the high number`;
        gemratedNumber.innerHTML = `Random Genrated Number is ${randomNumber}`
    }else if(inputVal<randomNumber){
        finalResult.innerHTML = `You had choice the low number`;
        gemratedNumber.innerHTML = `Random Genrated Number is ${randomNumber}`
    }else{
        finalResult.innerHTML = `Input Must be a Number`;
    }
})