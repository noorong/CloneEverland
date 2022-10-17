"use strict";

// 가운데 이미지
const article = document.querySelector(".mainLogo");
const img = document.querySelector(".mainLogo>img");
const h2 = document.querySelector(".mainLogo>h2");

console.log(article, img, h2)

let chnageImg = true;

window.setInterval(function(){
  chnageImg ? (
    h2.classList.toggle("fadeOn"),
    img.classList.toggle("fadeExit"),
    chnageImg = !chnageImg
  ) : (
    img.classList.toggle("fadeExit"),
    h2.classList.toggle("fadeOn"),
    chnageImg = !chnageImg
    )
  
}, 10000)


  
    // if(chnageImg){
    //   h2.classList.add('.fadeOn');
    //   img.classList.remove('.fadeOn');
    //   img.classList.add('.fadeExit');
    //   chnageImg = !chnageImg
    // }
    
    // if(!chnageImg){
    //   h2.classList.remove('.fadeOn');
    //   h2.classList.add('.fadeExit');
    //   img.classList.add('.fadeOn');
    //   chnageImg = !chnageImg
    // }


function chan(){
  // h2.style.opacity = "0" ? h2.classList.toggle(".fadeOn") : img.classList.toggle(".fadeExit") 
  // if(h2.style.opacity = "0"){
  //   h2.classList.add(".fadeOn");
  //   img.classList.add(".fadeExit");
  // }

      h2.classList.add('.fadeOn');
      img.classList.remove('.fadeOn');
      img.classList.add('.fadeExit');
      chnageImg = !chnageImg
}

function time(){
      h2.classList.remove('.fadeOn');
      h2.classList.add('.fadeExit');
      img.classList.add('.fadeOn');
      chnageImg = !chnageImg
}




// gnb 슬라이드
const gnb = document.querySelector(".gnb ul");
const btm = document.querySelector(".bottom");
const sub = document.querySelector(".submenu");
const moveBtn = document.querySelectorAll(".moveWrap > ul li button");

const arr = Array.from(moveBtn);

// function move() {}

// for (let i = 0; i < arr.length; i++) {
//   arr[i].addEventListener("click", move);
// }

let subToggle = true;

function show() {
  if (subToggle) {
    sub.classList.add("fadeIn");
    sub.classList.remove("fadeOut");
    subToggle = !subToggle;
  }
}

function hide() {
  if (!subToggle) {
    sub.classList.add("fadeOut");
    sub.classList.remove("fadeIn");
    subToggle = !subToggle;
  }
}

gnb.addEventListener("mouseover", show);
btm.addEventListener("mouseleave", hide);

