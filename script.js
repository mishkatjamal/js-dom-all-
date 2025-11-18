let btn = document.querySelector("button")
let main = document.querySelector("main")

let arr = ["https://images.unsplash.com/photo-1762966160841-37423cb6c242?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
    "https://images.unsplash.com/photo-1763063556535-5f6174a5c5d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1763046287602-7f878927101f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1762810502196-640a42cfb402?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0OXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1762324858945-3fd82fe78bcd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1OXx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1760570317569-4a2b1eddf174?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3M3x8fGVufDB8fHx8fA%3D%3D"
]

btn.addEventListener("click",()=>{
    let ele = Math.floor(Math.random()*arr.length);
    let img = document.createElement("img");
    img.setAttribute("src",arr[ele])
    
    let x = Math.floor(Math.random()*90);
    let y = Math.floor(Math.random()*90);
    img.style.height = "150px";
    img.style.width = "150px";
    img.style.objectFit = "cover";
    img.style.position = "absolute";
    img.style.borderRadius = "50%";
    img.style.left = x+"%";
    img.style.top = y+"%";

    main.appendChild(img)
    
})