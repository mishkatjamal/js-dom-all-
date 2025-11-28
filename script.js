const charecter = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const para = document.querySelector("p")
const text = para.innerText;

let ite = 0;
function textWala(){
    const str=text.split("").map((cha,ind)=>{
        if(ind<ite){
            return cha
        }
        return charecter.split("")[Math.floor(Math.random()*charecter.length)]
    }).join("")
    para.innerText = str;
    ite += 0.8;
}



para.addEventListener("mouseenter",()=>{
setInterval(textWala,80)
})