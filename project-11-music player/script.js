const searchBtn = document.getElementById("searchBtn");
const audioPlayer = document.getElementById("audioPlayer");
const songResults = document.getElementById("songResults");
const playBtn = document.getElementById("playBtn");
const stopBtn = document.getElementById("stopBtn");
const replayBtn = document.getElementById("replayBtn");
const volUp = document.getElementById("volUp");
const volDown = document.getElementById("volDown");

let currentSong = ""; 


searchBtn.addEventListener("click", () => {
  const query = document.getElementById("searchInput").value;


  songResults.innerHTML = "";

  
  fetch(`https://itunes.apple.com/search?term=${query}&limit=5`)
    .then(response => response.json())
    .then(data => {
      if (data.results.length === 0) {
        songResults.innerHTML = "<li>No results found</li>";
        return;
      }
     
      data.results.forEach(song => {
        const li = document.createElement("li");
        li.textContent = `${song.trackName} by ${song.artistName}`;
        li.addEventListener("click", () => {
          playSong(song.previewUrl); 
        });
        songResults.appendChild(li);
      });
    });
});


function playSong(songUrl) {
  currentSong = songUrl;
  audioPlayer.src = songUrl; 
  audioPlayer.play();        
}

playBtn.addEventListener("click", () => {
  if (currentSong) {
    audioPlayer.play();
  } else {
    alert("Please select a song to play!");
  }
});


stopBtn.addEventListener("click", () => {
  if (audioPlayer.src) {
    audioPlayer.pause();         
    audioPlayer.currentTime = 0;  }
});


replayBtn.addEventListener("click", () => {
  if (audioPlayer.src) {
    audioPlayer.currentTime = 0;  
    audioPlayer.play();           
  }
});


volUp.addEventListener("click", () => {
  if (audioPlayer.volume < 1) {
    audioPlayer.volume = Math.min(audioPlayer.volume + 0.1, 1);  
  }
});


volDown.addEventListener("click", () => {
  if (audioPlayer.volume > 0) {
    audioPlayer.volume = Math.max(audioPlayer.volume - 0.1, 0);  
  }
});
