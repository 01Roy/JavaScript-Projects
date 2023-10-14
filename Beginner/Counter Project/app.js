var inc_btn = document.getElementById("btn_inc");
var dec_btn = document.getElementById("btn_dec");
var rec_btn = document.getElementById("btn_res");
var countVal = document.getElementById("counterVal");

var initCountVal = 0;

inc_btn.addEventListener("click",()=>{
    initCountVal +=1;
    countVal.innerHTML = parseInt(initCountVal);
})

dec_btn.addEventListener("click",()=>{
    initCountVal -=1;
    countVal.innerHTML = parseInt(initCountVal);
})

rec_btn.addEventListener("click",()=>{
    initCountVal = 0;
    countVal.innerHTML = parseInt(initCountVal);
})