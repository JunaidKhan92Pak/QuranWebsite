
let Bar = document.querySelector(".fa-bars");
let mark = document.querySelector(".fa-xmark");
let navbar = document.querySelector(".navbar");
let Menu = document.querySelector(".Menus");
let MainDiv = document.querySelector(".Surat-Main-Div")
let Play = document.querySelector(".Play");
let audio = document.querySelector(".Audio")
let audioa2 = document.querySelector(".Audioa2")
let audioa3 = document.querySelector(".Audioa3")
let volume_bar = document.querySelector(".Volumebar_1")
let volumeIcon = document.querySelectorAll(".volumeIcon")




// navbar responsivenes function------>>
Bar.addEventListener("click", expandMenu = (e) => {
    Bar.style.display="none"
    mark.style.display="flex"
    Menu.classList.toggle("MenusMbl")
    navbar.classList.toggle("navbarMbl");
});
mark.addEventListener("click", expandMenu = (e) => {
    Bar.style.display="flex"
    mark.style.display="none"
    Menu.classList.toggle("MenusMbl")
    navbar.classList.toggle("navbarMbl");
});

//  Function For Play and Pause Audios----->>
MainDiv.addEventListener("click", playSurah = (e) => {
    let Target = e.target
    let PlayIcon = e.target;
    console.log(Target);
    if (Target.className === "Play") {
        if (audio.paused) {
            PlayIcon.src = "media/61688_green_stop_icon.png";
            audio.play();
            audioa2.pause();
            audioa3.pause();
        }
        else {
            PlayIcon.src = "/media/61555_back_left_icon.png";
            audio.pause();
        }
    }

    if (Target.className === "Play p2") { 
        if (audioa2.paused) {
            PlayIcon.src = "media/61688_green_stop_icon.png";
            audioa2.play();
            audio.pause();
            audioa3.pause();
        }
        else {
            PlayIcon.src = "/media/61555_back_left_icon.png";
            audioa2.pause();
        }
    }
    if (Target.className === "Play p3") { 
        if (audioa3.paused) {
            PlayIcon.src = "media/61688_green_stop_icon.png";
            audioa3.play();
            audio.pause();
            audioa2.pause();
        }
        else {
            PlayIcon.src = "/media/61555_back_left_icon.png";
            audioa3.pause();
        }
    };

    //Adjustment Volume Condition----->
    if (Target.className === "Volumebar_1") {
        let Volume = e.target
        audio.volume = Volume.value / 100;
        if (audio.volume === 0) {
            volumeIcon[0].src = "/media/mute.png";
            
        }
        else {
            volumeIcon[0].src = "/media/volume-icon.png" 
    }}

    if (Target.className === "Volumebar_2") {
        let Volume = e.target
        audioa2.volume = Volume.value / 100;
        if (audioa2.volume === 0) {
            volumeIcon[1].src = "/media/mute.png";
        }
        else {
            volumeIcon[1].src = "/media/volume-icon.png" 
    }}
    if (Target.className === "Volumebar_3") {
        let Volume = e.target
        audioa3.volume = Volume.value / 100;
            if (audioa3.volume === 0) { 
                volumeIcon[2].src = "/media/mute.png";
            }
            else {
                volumeIcon[2].src = "/media/volume-icon.png" 
        }}
});


