let btn = document.getElementById("btn");

const calculate =()=>{
    let noc = document.getElementById("textBox").value.length;
    let now = document.getElementById("textBox").value;
      now = now.match( /\w+/g );

if(!noc==""){

    document.getElementById("letters").innerHTML ="Total letters are : "+ noc;
    document.getElementById("words").innerHTML ="Total words are : "+ now.length;
    
}
else{
    document.getElementById("letters").innerHTML ="";
    document.getElementById("words").innerHTML ="";
    alert("textbox is empty");
}


    
    
}

btn.addEventListener("click",()=>{
    calculate()
})