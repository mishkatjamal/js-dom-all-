let main = document.querySelector("main");
let h1 = document.querySelector("main");

let arr = [
    "https://images.unsplash.com/photo-1762088776943-28a9fbadcec4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1763076705118-8c3c03fee057?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1762540667421-6f0a1533278b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1763046287602-7f878927101f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1762687509086-49451aff632d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1762967027312-d39989e249b7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1NHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1702751424429-2f718d574e96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2N3x8fGVufDB8fHx8fA%3D%3D"
]

let lastx = 0;
let lasty = 0;
let minDistance = 100;

main.addEventListener("mousemove",(dets)=>{
    let dx = dets.x - lastx;
    let dy = dets.y - lasty;
    let distance = Math.sqrt(dx*dx + dy*dy)
    let rImg = Math.floor(Math.random()*arr.length);
    if (distance < minDistance) return;

    lastx = dets.x;
    lasty = dets.y;

    let img = document.createElement("img");
    img.setAttribute("src",arr[rImg])
    
    
    img.style.height = "250px";
    img.style.width = "150px";
    img.style.objectFit = "cover";
    img.style.position = "absolute"
    img.style.borderRadius = "10px"
    img.style.transform = `translate(-50%,-50%)`
    img.style.top = dets.y+"px"
    img.style.left = dets.x+"px"
    // img.style.transition = "all ease 0.5s"
    
    
    main.appendChild(img);

    setTimeout(()=>{
        main.removeChild(img)
    },500)
})
