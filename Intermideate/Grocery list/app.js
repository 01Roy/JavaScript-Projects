const inputBox = document.getElementById('inputBox');
const addItem = document.getElementById('addBtn');
const resetItem = document.getElementById('resetBtn');
const ulList = document.getElementById('todoList');


let currentValue ='';

inputBox.addEventListener('keyup',(e)=>{
    currentValue = e.target.value.toUpperCase();
    // console.log(currentValue);
})

const addNewList =()=>{
    if(currentValue!==undefined && currentValue!== null && currentValue!==''){
        const createNewElement = document.createElement('li');
    const textNode = document.createTextNode(currentValue);
    createNewElement.appendChild(textNode);
  
    //createing delete btn
    const deleteElement = document.createElement('button');
    const deleteNode = document.createTextNode('Buy')
    deleteElement.appendChild(deleteNode);
    deleteElement.classList.add('delBtn')
    
    ulList.appendChild(createNewElement);
    createNewElement.appendChild(deleteElement);

    createNewElement.addEventListener('click',()=>{
        createNewElement.style.textDecoration = 'line-through';
        deleteElement.innerText = 'GOT IT'
    })

  

    inputBox.value =''
    currentValue='';
    }else{
        alert("Please Enter Some Item inside Box")
    }

}

addItem.addEventListener('click',addNewList)
inputBox.addEventListener('keyup',(e)=>{
    if(e.keyCode === 13){
        addNewList()
    }
})

resetItem.addEventListener('click',()=>{
    ulList.innerText='';
})

