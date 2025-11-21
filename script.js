let img = document.querySelector("#image img");
let like = document.querySelector("#image i");
let likeG = document.querySelector("#bottom p");
let likesm = document.querySelector("#like-sm");
let likeChange = document.querySelector("#like-change");

img.addEventListener("dblclick",()=>{
    // small like number
    likeG.innerHTML = "1"

    likesm.style.display = "none"
    likeChange.style.display = "block"
    // big like icon
    like.style.opacity = 1;
    like.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)"

    setTimeout(()=>{
        like.style.opacity = 0;
    like.style.transform = "translate(-50%,-300%) scale(0) rotate(60deg)"
},900)
setTimeout(()=>{
    like.style.opacity = 0;
},1000)
setTimeout(()=>{
    like.style.transform = "translate(-50%,30%) scale(0) rotate(-60deg)"
    },1100)
    
})
