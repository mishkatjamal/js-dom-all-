const reels = [
    {
        ismuted:true,
        username: "codewithayush",
        likeCount: 14820,
        isLiked: false,
        commentCount: 423,
        shareCount: 92,
        isFollowed: false,
        caption: "Dark mode > light mode. Change my mind.",
        video: "./reels/video1.mp4",
        userprofile: "https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?q=80&w=930&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        ismuted:true,
        username: "designbysan",
        likeCount: 9820,
        isLiked: true,
        commentCount: 184,
        shareCount: 41,
        isFollowed: false,
        caption: "UI tip: Padding is personality. Give your elements some space.",
        video: "../reels/video2.mp4",

        userprofile: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79"
    },
    {
        ismuted:true,
        username: "frontend.ninja",
        likeCount: 22150,
        isLiked: false,
        commentCount: 612,
        shareCount: 138,
        isFollowed: true,
        caption: "When flexbox finally aligns the way you wanted 😭🔥",
        video: "./reels/video3.mp4",

        userprofile: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126"
    },
    {
        ismuted:true,
        username: "travelwithriya",
        likeCount: 54200,
        isLiked: false,
        commentCount: 822,
        shareCount: 201,
        isFollowed: false,
        caption: "My solo Bali trip changed everything 🌴",
        video: "./reels/video4.mp4",

        userprofile: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e"
    },
    {
        ismuted:true,
        username: "daily.dev.quotes",
        likeCount: 3120,
        isLiked: true,
        commentCount: 102,
        shareCount: 55,
        isFollowed: true,
        caption: "Code. Sleep. Repeat. That’s the cycle.",
        video: "./reels/video5.mp4",

        userprofile: "https://images.unsplash.com/photo-1599566150163-29194dcaad36"
    },
    {
        ismuted:true,
        username: "fitnessbymegha",
        likeCount: 27450,
        isLiked: false,
        commentCount: 540,
        shareCount: 87,
        isFollowed: true,
        caption: "No gym? No problem. Do this 12-min workout at home.",
        video: "./reels/video1.mp4",

        userprofile: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
    },
    {
        ismuted:true,
        username: "streetfoodlover",
        likeCount: 68000,
        isLiked: true,
        commentCount: 1304,
        shareCount: 412,
        isFollowed: false,
        caption: "You won’t believe this burger exists 🤯🍔",
        video: "./reels/video2.mp4",

        userprofile: "https://images.unsplash.com/photo-1552058544-f2b08422138a"
    },
    {
        ismuted:true,
        username: "musicbytara",
        likeCount: 14500,
        isLiked: false,
        commentCount: 267,
        shareCount: 73,
        isFollowed: true,
        caption: "Late night vibes // piano version 🎹✨",
        video: "./reels/video3.mp4",

        userprofile: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe"
    },
    {
        ismuted:true,
        username: "techreviews101",
        likeCount: 23180,
        isLiked: true,
        commentCount: 481,
        shareCount: 120,
        isFollowed: false,
        caption: "The most underrated smartphone of 2024 📱",
        video: "./reels/video4.mp4",

        userprofile: "https://images.unsplash.com/photo-1511367461989-f85a21fda167"
    },
    {
        ismuted:true,
        username: "learnanimations",
        likeCount: 18740,
        isLiked: false,
        commentCount: 350,
        shareCount: 92,
        isFollowed: true,
        caption: "GSAP can literally change your career. Start today.",
        video: "./reels/video5.mp4",

        userprofile: "https://images.unsplash.com/photo-1494790108377-be9c29b29330"
    }
];

let allreels = document.querySelector(".all-reels");

function addata(){
    let sum = ''

reels.forEach((elem,idx)=>{

    sum +=`  <div class="reels">
                <video autoplay loop ${elem.ismuted ?`muted`:``} src="${elem.video}"></video>
                <div id=${idx} class="mute">
            ${elem.ismuted ? `<i class="ri-volume-mute-fill"></i>`:`<i class="ri-volume-up-fill"></i>`}
          </div>
                <!-- ^ bottom wala details  -->
                 <div class="bottom">
                    <div class="bottom-user">
                        <img src="${elem.userprofile}" alt="">
                        <h3>${elem.username}</h3>
                        <button id=${idx} class="follow">${elem.isFollowed ? `Unfollow`:`Follow`}</button>
                    </div>
                      <p>${elem.caption}</p>
                 </div>

                 <!-- ^ right -->
                  <div class="right">
                    <!-- likes -->
                    <div id="${idx}" class="like">
                        <h4>${elem.isLiked 
    ? `<i class="icons ri-heart-3-line"></i>` 
    : `<i class="icons red-icon ri-heart-3-fill"></i>`}
</h4>
                        <p>${elem.likeCount}</p>
                    </div>
                    <!-- comments -->
                    <div class="comments">
                       <i  class="icons ri-chat-3-line"></i>
                       <p>${elem.commentCount}</p>
                    </div>
                    <!-- share -->
                     <div class="share">
                        <i  class="icons ri-share-forward-line"></i>
                        <p>${elem.shareCount}</p>
                    </div>
                    <!-- 3 dots -->
                     <div class="menu">
                        <i  class="icons ri-more-2-fill"></i>
                    </div>

                  </div>               
            </div>`
})

allreels.innerHTML = sum;
}
addata()

allreels.addEventListener("click",(dets)=>{
   
    
        if (dets.target.className === "like") {
           if(! reels[dets.target.id].isLiked){
             reels[dets.target.id].likeCount++;
              reels[dets.target.id].isLiked = true;
           }else{
             reels[dets.target.id].likeCount--;
             reels[dets.target.id].isLiked = false;
           }
           addata()
        }
        if (dets.target.className === "follow") {
             if (!reels[dets.target.id].isFollowed) {
                reels[dets.target.id].isFollowed = true;
             }else{
                reels[dets.target.id].isFollowed = false;
             }
             addata()
        }
        

        if (dets.target.className === "mute") {
             if (!reels[dets.target.id].ismuted) {
                reels[dets.target.id].ismuted = true;
             }else{
                reels[dets.target.id].ismuted = false;
             }
             addata()
             
        }
   
    
    
})



