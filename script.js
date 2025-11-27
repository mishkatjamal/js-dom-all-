const cha = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const para = document.querySelector("p")
const text = para.innerText;

para.addEventListener("mouseenter",()=>{

    let stop = setInterval(()=>{
    const str =text.split("").map((char,ind)=>{
        return cha.split("")[Math.floor(Math.random()*53)]
    }).join("")
    para.innerText = str
},30)

setTimeout(()=>{
clearInterval(stop);
para.innerText = text;
},2000)
})