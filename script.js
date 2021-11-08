const image = document.querySelector("img");
const title = document.querySelector("title");
const artist= document.querySelector("artist");
const music = document.querySelector("audio");
const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");

// Music 
const songs = [
    {
        name:"jacinto-1",
        displayName:"jacinto", 
        artist: "Jacinto Design"
    }
]

// Chceck if Playing
let isPlaying = false;

//Play 

function playSong() {
    isPlaying= true;
    playBtn.classList.replace("fa-play", "fa-pause");
    playBtn.setAttribute("title", "Pause");
    music.play()
}


// Pause 
function pauseSong() {
    isPlaying = false;
    playBtn.classList.replace("fa-pause", "fa-play");
    playBtn.setAttribute("title", "Play"); 
    music.pause();
}


// Play or Pause event listener 

playBtn.addEventListener("click", () => (isPlaying ? pauseSong() : playSong()))

// Update Dom 
function  loadSong (song) {
    title.textContent = song.displayName;
    artist.textContent = song.artist;
    music.src = `music/${song.name}.mp3`;
    image.src =  `img/${song.name}.jpg`
}

// Current Song 
let songIndex = 0 ;

// Next Song 
function nextSong () {
songIndex++;
loadSong(songs[songIndex]);
playSong();
}
// On Load - Select First Song 
loadSong(songs [3]);

// Event Listenrs 
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nestSong);