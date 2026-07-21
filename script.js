document.addEventListener('DOMContentLoaded', () => {

  // Theme Toggle (minimal icons)
  const themeToggle = document.getElementById('themeToggle');
  const body = document.body;

  function updateToggleIcon() {
    if (body.classList.contains('light')) {
      themeToggle.textContent = '☽';
    } else {
      themeToggle.textContent = '☼';
    }
  }

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('light');
    updateToggleIcon();
    localStorage.setItem('theme', body.classList.contains('light') ? 'light' : 'dark');
  });

  if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light');
  }
  updateToggleIcon();

  // === Audio Player with Cover Image ===
  const tracks = [
    { 
      name: "Track 01", 
      src: "assets/audio/track1.mp3",
      cover: "assets/images/covers/cover1.jpg"
    },
    { 
      name: "Track 02", 
      src: "assets/audio/track2.mp3",
      cover: "assets/images/covers/cover2.jpg"
    },
    { 
      name: "Track 03", 
      src: "assets/audio/track3.mp3",
      cover: "assets/images/covers/cover3.jpg"
    },
    { 
      name: "Track 04", 
      src: "assets/audio/track4.mp3",
      cover: "assets/images/covers/cover4.jpg"
    }
  ];

  const audioPlayer = document.getElementById('player');
  const nowPlaying = document.getElementById('nowPlaying');
  const visualizer = document.getElementById('visualizer');

  window.playTrack = function(index) {
    const track = tracks[index];
    if (track) {
      audioPlayer.src = track.src;
      audioPlayer.play();
      nowPlaying.textContent = ▶ ;
      
      // Optional: Change background or show cover
      if (track.cover) {
        visualizer.style.backgroundImage = url('\');
        visualizer.style.backgroundSize = 'cover';
        visualizer.style.backgroundPosition = 'center';
      }
    }
  };
});
