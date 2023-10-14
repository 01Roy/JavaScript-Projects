 var model_btn = document.getElementById("model_btn");
 var modelContainer = document.getElementById("modelContainer");
 var model_cls = document.getElementById("model_cls");

 model_btn.addEventListener("click",()=>{
    modelContainer.classList.add("model_visible")
})

model_cls.addEventListener("click",()=>{
    
    modelContainer.classList.remove("model_visible")
 })