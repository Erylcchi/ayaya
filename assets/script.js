
let player;
let isPlaying = false;

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: '4KzrdHXMzuo',
    playerVars: {
      autoplay: 0,
      controls: 0,
      loop: 1,
      playlist: '4KzrdHXMzuo',
      modestbranding: 1
    }
  });
}

const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const toggle = document.getElementById('music-toggle');
const pages = document.getElementById('page-container');
const next = document.getElementById('arrow-right');

let pageIndex = 0;

envelope.onclick = () => {
  envelope.style.display = 'none';
  setTimeout(()=> letter.classList.remove('hidden'), 1000);

  setTimeout(()=> {
    if (player && player.playVideo) {
      player.setVolume(60);
      player.playVideo();
      isPlaying = true;
    }
  }, 1200);
};

toggle.onclick = () => {
  if (!player) return;
  if (isPlaying) {
    player.pauseVideo();
    isPlaying = false;
  } else {
    player.playVideo();
    isPlaying = true;
  }
};

next.onclick = () => {
  const total = pages.children.length;
  if (pageIndex < total - 1) pageIndex++;

  pages.style.transform = `translateX(-${pageIndex * 100}%)`;

  if (pageIndex === total - 1) {
    next.style.opacity = 0;
    next.style.pointerEvents = "none";
  }
};
