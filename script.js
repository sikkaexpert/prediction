window.addEventListener('DOMContentLoaded', () => {
    const music = document.getElementById('backgroundMusic');
  
    // iOS/Chrome mobile autoplay fix
    document.body.addEventListener('click', () => {
      music.play().catch(() => {});
    }, { once: true });
  
    document.getElementById('telegramBtn').addEventListener('click', () => {
      // Replace with your Telegram link
      window.location.href = "https://t.me/+pVhcGSVA7l43ZDk1";
    });
  });
  