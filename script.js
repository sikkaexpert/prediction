window.addEventListener('DOMContentLoaded', () => {
  const music = document.getElementById('backgroundMusic');

  // Attempt to play immediately (works on desktop)
  music.play().catch(() => {
    // Autoplay failed — wait for user interaction
    document.body.addEventListener('click', () => {
      music.play().catch(() => {});
    }, { once: true });

    document.body.addEventListener('touchstart', () => {
      music.play().catch(() => {});
    }, { once: true });
  });

  document.getElementById('telegramBtn').addEventListener('click', () => {
    window.location.href = "https://t.me/+pVhcGSVA7l43ZDk1";
  });
});
