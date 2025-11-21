const arr = [
    {
        fullName: "Aarav Mehta",
        image: "https://plus.unsplash.com/premium_photo-1763369800370-a89b6fb2a3d2?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "UX Designer",
        description: "Designs apps that feel human. Loves coffee & pixel-perfect layouts.",
        background:"https://images.unsplash.com/photo-1674707488760-4ec87e969368?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8M2QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
        tags: ["Figma", "UI/UX", "Design Systems", "Freelancer"]
    },
    {
        fullName: "Emily Carter",
        image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126",
        profession: "Software Engineer",
        description: "Writes clean code and breaks things just to fix them better.",
        background:"https://images.unsplash.com/photo-1724405143873-cdaa5cac918e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8M2QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
        tags: ["React", "TypeScript", "Open Source", "Tech Speaker"]
    },
    {
        fullName: "Aisha Khan",
        image: "https://images.unsplash.com/photo-1517841905240-472988babdf9",
        profession: "Data Scientist",
        description: "Finds patterns in the noise. Speaks fluently in charts and numbers.",
        background:"https://images.unsplash.com/photo-1662869633285-13fe05236a72?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fDNkJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D",
        tags: ["Python", "AI", "Machine Learning", "Analytics"]
    },
    {
        fullName: "Noah Williams",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
        profession: "Content Creator",
        description: "Makes complex topics easy. Lives on caffeine and camera angles.",
        background:"https://plus.unsplash.com/premium_photo-1672312039942-edce7c8eb764?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8M2QlMjBiYWNrZ3JvdW5kfGVufDB8fDB8fHww",
        tags: ["Video Editing", "Education", "YouTube", "Storytelling"]
    }
];



let sum = "";

arr.forEach((val)=>{
    let randomTag = val.tags[Math.floor(Math.random() * val.tags.length)];

    sum += `   <div id="card">
            <img id="bg-img" src="${val.background}" alt="">

            <div id="profile">
                <img src="${val.image}" alt="">
                <div id="profile-inner">
                    <i class="ri-diamond-fill"></i>
                    <h5>${randomTag}</h5>
                </div>
            </div>

          <div id="text">

             <div id="text-inner">
                 <h3>${val.fullName}</h3>
            <h5>${val.profession}</h5>
             </div>

            <div id="text-icon">
                <i class="ri-book-marked-fill"></i>
            </div>
            
          </div>

          <p>${val.description}</p>
          <button>Get in touch</button>
        </div>`  
        
})

let main = document.querySelector("main")

main.innerHTML =sum
