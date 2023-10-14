const inputValue = document.getElementById('inputValue');
const btnAdd = document.getElementById('AddElement');
const list = document.getElementById('todo_list');
const ul = document.querySelector('ul')

var currentValue = '';

inputValue.addEventListener('input',(e)=>{
    currentValue = (e.target.value).toUpperCase();
    console.log(currentValue);
})

inputValue,addEventListener('keyup',(e)=>{
    if(e.keyCode===13){
        AddInputList();
    }
})
const AddInputList = ()=>{
    if(currentValue!== undefined && currentValue!==null && currentValue!== ''){
        let newElement = document.createElement('li');
        newElement.classList.add('li');
        let textNode = document.createTextNode(currentValue);
        newElement.appendChild(textNode);

        //delete btn
        let deleteButton = document.createElement('button');
        let deleteTextNode = document.createTextNode('Delete');
        deleteButton.appendChild(deleteTextNode);
        deleteButton.id = 'item' + (list.childElementCount+1)
        deleteButton.classList.add('delBtn')
        newElement.appendChild(deleteButton);

        
        list.appendChild(newElement);
        inputValue.value='';
        currentValue='';

    }else{
        alert('Please enter something inside input box')
    }
}

btnAdd.addEventListener('click',AddInputList);

ul.addEventListener('click',(e)=>{
    let currentElement = e.target.parentNode;
    console.log(currentElement);
    list.removeChild(currentElement);
})


