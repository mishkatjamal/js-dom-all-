let keys = document.querySelectorAll(".key");

const sound = [
    "piano/28.mp3",
    "piano/29.mp3",
    "piano/30.mp3",
    "piano/31.mp3",
    "piano/32.mp3",
    "piano/33.mp3",
    "piano/34.mp3",
    "piano/35.mp3",
    "piano/36.mp3",
    "piano/37.mp3",
    "piano/38.mp3",
    "piano/39.mp3",
    "piano/40.mp3",
    "piano/41.mp3",
    "piano/42.mp3",
    "piano/43.mp3",
    "piano/44.mp3",
    "piano/45.mp3",
    "piano/46.mp3",
    "piano/47.mp3",
    "piano/48.mp3",
    "piano/49.mp3",
    "piano/50.mp3",
    "piano/51.mp3",
    "piano/52.mp3",
    "piano/53.mp3",
    "piano/54.mp3",
    "piano/55.mp3",
    "piano/56.mp3",
    "piano/57.mp3",
    "piano/58.mp3"
];

keys.forEach((val,ind)=>{
    val.addEventListener("click",()=>{
        let audio = new Audio(sound[ind]);
        audio.play();
    });
});

// key press wala hai ye 
document.addEventListener("keydown",(dets)=>{
    keys.forEach((key,indx)=>{
        if (key.innerText.toLowerCase() === dets.key.toLocaleLowerCase()) {
            new Audio(sound[indx]).play()
        }
    })
    
})