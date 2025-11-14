
const envelope = document.getElementById('envelope');
const letter = document.getElementById('letter');
const music = document.getElementById('bgm');
const toggle = document.getElementById('music-toggle');
const pages = document.getElementById('page-container');
const next = document.getElementById('arrow-right');

let pageIndex = 0;

envelope.onclick = () => {
  envelope.style.display = 'none';
  setTimeout(()=> letter.classList.remove('hidden'), 1000);
  setTimeout(()=> { music.volume=0.6; music.play(); }, 1200);
};

toggle.onclick = ()=> {
  if(music.paused) music.play();
  else music.pause();
};

next.onclick = ()=> {
  pageIndex++;
  const total = pages.children.length;
  if(pageIndex >= total) pageIndex = total-1;
  pages.style.transform = `translateX(-${pageIndex*100}%)`;
  if(pageIndex>0) next.style.opacity = (pageIndex==total-1?0:1);
};
