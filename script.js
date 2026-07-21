document.addEventListener('DOMContentLoaded', () => {

  // Theme Toggle
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

  // Audio Player + Visualizer
  const tracks = [
    { name: "Track 01", src: "assets/audio/track1.mp3" },
    { name: "Track 02", src: "assets/audio/track2.mp3" },
    { name: "Track 03", src: "assets/audio/track3.mp3" },
    { name: "Track 04", src: "assets/audio/track4.mp3" }
  ];

  const audioPlayer = document.getElementById('player');
  const nowPlaying = document.getElementById('nowPlaying');
  const bars = document.querySelectorAll('.bar');

  let animationFrame;

  function playTrack(index) {
    if (tracks[index]) {
      audioPlayer.src = tracks[index].src;
      audioPlayer.play();
      nowPlaying.textContent = `Now Playing: ${tracks[index].name}`;
    }
  }

  // Simple fake visualizer animation when playing
  function startVisualizer() {
    if (animationFrame) cancelAnimationFrame(animationFrame);

    function animate() {
      bars.forEach((bar, i) => {
        const height = Math.random() * 60 + 20;
        bar.style.height = height + 'px';
        bar.style.opacity = Math.random() * 0.6 + 0.4;
      });
      animationFrame = requestAnimationFrame(animate);
    }
    animate();
  }

  function stopVisualizer() {
    if (animationFrame) cancelAnimationFrame(animationFrame);
    bars.forEach(bar => {
      bar.style.height = '20px';
      bar.style.opacity = '0.3';
    });
  }

  audioPlayer.addEventListener('play', startVisualizer);
  audioPlayer.addEventListener('pause', stopVisualizer);
  audioPlayer.addEventListener('ended', stopVisualizer);

  // Make playTrack available globally
  window.playTrack = playTrack;
});
