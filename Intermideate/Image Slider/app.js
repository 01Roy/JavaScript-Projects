const carouselSlide = document.querySelector('.carousel_slide');
const carouselImages = document.querySelectorAll('.carousel_slide img');

// console.log(carouselImages);

const prevBtn = document.querySelector('#preBtn');
const nextBtn = document.querySelector('#nextBtn');

// counter
let counter =1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX('+(-size * counter) +'px';

prevBtn.addEventListener('click',()=>{
    if(counter<=0)return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX('+(-size * counter) +'px';

})

nextBtn.addEventListener('click',()=>{
    if(counter >= carouselImages.length -1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX('+(-size * counter) +'px';

})
 
carouselSlide.addEventListener('transitionend',()=>{
//  console.log(carouselImages[counter].id);
if(carouselImages[counter].id === 'lastClone'){
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length-2;
    carouselSlide.style.transform = 'translateX('+(-size * counter) +'px';
}
if(carouselImages[counter].id === 'firstClone'){
    carouselSlide.style.transition = 'none';
    counter = carouselImages.length - counter;
    carouselSlide.style.transform = 'translateX('+(-size * counter) +'px';
}
})

// setInterval(()=>{
//     if(counter >= carouselImages.length -1) return;
//     carouselSlide.style.transition = 'transform 0.4s ease-in-out';
//     counter++;
//     carouselSlide.style.transform = 'translateX('+(-size * counter) +'px';
// },2000)


