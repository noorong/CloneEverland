'use strict';

// 가운데 이미지
const article = document.querySelector(".mainLogo");
const img = document.querySelector(".mainLogo>img");
const h1 = document.querySelector(".mainLogo h1");

// gnb 슬라이드
const gnb = document.querySelector(".gnb ul");
const btm = document.querySelector(".bottom");
const sub = document.querySelector(".submenu");

console.log(gnb,123,sub)

let subToggle = true;

function show(){
  if(subToggle){
    sub.classList.add('fadeIn');
    sub.classList.remove('fadeOut');
    subToggle = !subToggle;
  }
  
}

function hide(){
    if(!subToggle){
        sub.classList.add('fadeOut');
        sub.classList.remove('fadeIn');
        subToggle = !subToggle;
      }
}

gnb.addEventListener("mouseover", show);
btm.addEventListener("mouseleave", hide);





// const change = () =>{
//     if(h1.style.visibility === "hidden") console.log(123)
    

    
// }

// setInterval(()=>{
//     change()

//     // console.dir(article.children)
// }, 2000)
