const inputBox = document.getElementById('input_box');
const btnWrite = document.getElementById('btn_write');
let message = 'hi how are you?';

inputBox.value = message;

btnWrite.addEventListener('click',()=>{
    alert(inputBox.value);
})