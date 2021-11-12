const image = document.querySelector("img");
const title = document.querySelector("title");
const artist= document.querySelector("artist");
const music = document.querySelector("audio");
const progressContainer= document.getElementById("progress-container");
const progress= document.getElementById("progress");
const currentTimeEl = document.getElementById("current-time");
const durationEl = document.getElementById("duration");
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

// Check if Playing
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

// Previous Song 
function preveSong () {
    songIndex--;
    if (songIndex < 0 ) {
        songIndex = songs.length -1;
    }
    console.log(songIndex);
    loadSong(songs[songIndex]);
    playSong();
}



// Next Song 
function nextSong () {
songIndex++;
if (songIndex > songs.length - 1) {
    songIndex = 0;
}
loadSong(songs[songIndex]);
playSong();
}
// On Load - Select First Song 
loadSong(songs [3]);

// Update Progress Bar & Time
function updateProgressBar (e) {
if (isPlaying){
    const { duration, currentTime } = e.srcElement;
    // Update progress bar width
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%` ;
    // Calculate display for duration 
    const durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration % 60);
    
    // Delay Switching duration Element to avid NaN 
    if (durationSeconds) {
        durationEl.textContent = `${durationMinutes}:${durationSeconds}`;
    }
}
}
// Event Listenrs 
prevBtn.addEventListener("click", preveSong);
nextBtn.addEventListener("click", nextSong);
music.addEventListener("timeupdate", updateProgressBar);