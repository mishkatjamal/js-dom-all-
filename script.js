let btn  = document.querySelector("#text button");
let progressbar = document.querySelector("#inner-p")
let h3 = document.querySelector("#text h3");

let grow = 0;

btn.addEventListener("click",()=>{
    
    btn.style.opacity = "0.5"
    btn.style.pointerEvents = "none"
    let randomTime =  Math.floor(Math.random()*7000)+ 3000

    let stop = setInterval(() => {
        grow++;

         if(grow > 100){
            grow = 100;
            clearInterval(stop);
        }


        h3.innerHTML = grow+"%";
        progressbar.style.width = grow+"%"


    }, randomTime /100);

    setTimeout(() => {
        clearInterval(stop)
        btn.innerHTML  = "Downloaded";
        
    }, randomTime);
    
})