const btns = document.querySelectorAll('.btn');
const storeProduct = document.querySelectorAll(".store_product");

for (i =0; i < btns.length;i++){
    btns[i].addEventListener('click',(e)=>{
        e.preventDefault();
        const filter = e.target.dataset.filter;

        storeProduct.forEach((product)=>{
            if(filter == 'all'){
                product.style.display = 'block';
            }else{
                if(product.classList.contains(filter)){
                    product.style.display = 'block';
                }
                else{
                    product.style.display = 'none';
                }
            }
        })
    })
}

// search flter
const search = document.getElementById('search');

search.addEventListener('keyup',(e)=>{
    e.preventDefault();
    const searchValue = search.value.toLowerCase().trim();
    // console.log(searchValue);

    for(i=0;i< storeProduct.length;i++){
        if(storeProduct[i].classList.contains(searchValue)){
            storeProduct[i].style.display = 'block';
        }else if(searchValue == ''){
            storeProduct[i].style.display = 'block';
        }else{
            storeProduct[i].style.display = 'none';
        }
    }
})
