let arr = [
    {
        bannerImg:"./images/bg1.webp",
        smallImg:"./images/bg3.webp",
        songName:"Blind Light",
        artist:"Mishkat",
        des:"This is the best song ever in the time of the coming the song",
        url:"./song/1.mp3"
    },
    {
        bannerImg:"./images/bg4.webp",
        smallImg:"./images/bg2.webp",
        songName:"Light wala",
        artist:"jamla",
        des:"sdsbfak j jashjshaj hjasdj hjhdjhfaj ",
        url:"./song/2.mp3"
    },
]

let leftTop = document.querySelector("#left-top")
let allSongs = document.querySelector(".all-songs")
let rightBottom = document.querySelector("#right-bottom")
let leftBottom = document.querySelector("#left-bottom")

// left top inners 
let lth2 = document.querySelector("#left-top h2")
let ltp = document.querySelector("#left-top p")

// right top img
let lrtImg = document.querySelector("#right-top img")

// ^ play forward backward btns
let play = document.querySelector("#play")
let backward = document.querySelector("#backward")
let forward = document.querySelector("#forward")

// ^ audio 
let audio = new Audio();
audio.src = arr[0].url

let selectedsong = 0
//^ left side wala all songs
function leftT(){
let clutter = ""
arr.forEach((elem,ind)=>{
    clutter += ` <div class="songs" id=${ind}>
                    <img src=${elem.smallImg} alt="">
                    <h4>${elem.songName}</h4>
                    <p>${elem.artist}</p>
                </div>`
                
            })


allSongs.innerHTML = clutter
}
leftT();

// ^ right side  wala 
function rightB(){
    let clutter = ""
arr.forEach((elem,ind)=>{
    clutter += `  <div class="mini-song" id=${ind}>
                    <img src=${elem.bannerImg} alt="">
                    <h4>${elem.songName}</h4>
                    <p>${elem.artist}</p>
                </div>`
    
})

rightBottom.innerHTML = clutter
}
rightB()

function leftbottomWala(){
    leftBottom.addEventListener("click",(dets)=>{
    console.log(arr[dets.target.id].songName);
    leftTop.style.backgroundImage = `url("${arr[dets.target.id].bannerImg}")`
    lth2.innerHTML = arr[dets.target.id].songName
    ltp.innerHTML = arr[dets.target.id].des;

    lrtImg.setAttribute("src",`${arr[dets.target.id].smallImg}`)

    audio.src = arr[dets.target.id].url
    audio.play()
     play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
     flag=1
})
}

leftbottomWala();

// right bottom 
function rightbottomWala(){
    rightBottom.addEventListener("click",(dets)=>{
    
    leftTop.style.backgroundImage = `url("${arr[dets.target.id].smallImg}")`
    lth2.innerHTML = arr[dets.target.id].songName
    ltp.innerHTML = arr[dets.target.id].des;

    lrtImg.setAttribute("src",`${arr[dets.target.id].smallImg}`)

     audio.src = arr[dets.target.id].url
    audio.play()
     play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
     flag=1
})
}
rightbottomWala()

let flag = 0;
play.addEventListener("click",()=>{
    if (flag === 0) {
        play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
        leftbottomWala();
        rightbottomWala()
        audio.play()
        flag =1 ;

    }else {
        play.innerHTML = `<i class="ri-play-fill"></i>`;
        leftbottomWala();
        rightbottomWala()
        audio.pause()
        flag =0;
        
    }
})



function updateUI(index){
    leftTop.style.backgroundImage = `url("${arr[index].bannerImg}")`
    lth2.innerHTML = arr[index].songName
    ltp.innerHTML = arr[index].des;

    lrtImg.setAttribute("src", arr[index].smallImg)

    audio.src = arr[index].url
    audio.play()

    play.innerHTML = `<i class="ri-pause-mini-fill"></i>`;
    flag = 1
}

// forward 
forward.addEventListener("click", () => {
    if (selectedsong < arr.length - 1) {
        selectedsong++;
        updateUI(selectedsong)
    }else{
        forward.style.opacity = 0.5
    }
})


// backward
backward.addEventListener("click", () => {
    if (selectedsong > 0) {
        selectedsong--;
        updateUI(selectedsong)
    }else{
        backward.style.opacity = 0.5
    }
})
