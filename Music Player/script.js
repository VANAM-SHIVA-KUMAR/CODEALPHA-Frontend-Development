// script.js
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const title = document.getElementById('title');
const artist = document.getElementById('artist');
const progressContainer = document.getElementById('progress-container');
const progress = document.getElementById('progress');

const songs = [
    {
        title: 'Song One',
        artist: 'Artist One',
        src: 'path/to/song1.mp3'
    },
    {
        title: 'Song Two',
        artist: 'Artist Two',
        src: 'path/to/song2.mp3'
    },
    {
        title: 'Song Three',
        artist: 'Artist Three',
        src: 'path/to/song3.mp3'
    }
];

let songIndex = 0;

function loadSong(song) {
    title.innerText = song.title;
    artist.innerText = song.artist;
    audio.src = song.src;
}

function playSong() {
    audio.play();
    playBtn.innerText = '⏸️';
}

function pauseSong() {
    audio.pause();
    playBtn.innerText = '▶️';
}

function prevSong() {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

function nextSong() {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songs[songIndex]);
    playSong();
}

function updateProgress(e) {
    const { duration, currentTime } = e.srcElement;
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

playBtn.addEventListener('click', () => {
    const isPlaying = audio.paused;
    if (isPlaying) {
        playSong();
    } else {
        pauseSong();
    }
});

prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);
progressContainer.addEventListener('click', setProgress);

// Load the first song initially
loadSong(songs[songIndex]);
