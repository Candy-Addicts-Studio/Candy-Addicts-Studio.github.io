(() => {
  const gameDemo = document.querySelector('#gameDemo');
  const gameDemoImage = document.querySelector('#gameDemoImage');
  const gameDemoCue = document.querySelector('#gameDemoCue');
  const gameDemoCaption = document.querySelector('#gameDemoCaption');

  if (!gameDemo || !gameDemoImage || !gameDemoCue || !gameDemoCaption) return;

  gameDemo.addEventListener('click', () => {
    const isOpen = gameDemo.getAttribute('aria-pressed') === 'true';
    const nextOpen = !isOpen;

    gameDemo.setAttribute('aria-pressed', String(nextOpen));
    gameDemoImage.src = nextOpen
      ? 'assets/landing/game-definition.webp'
      : 'assets/landing/game-overlay.webp';
    gameDemoImage.alt = nextOpen
      ? 'Chinese Reader showing the definition of 可疑 over dialogue in Honkai: Star Rail'
      : 'Chinese Reader scan overlay following Chinese dialogue in Honkai: Star Rail';
    gameDemoCue.textContent = nextOpen ? 'Definition open · tap to reset' : 'Tap to open a definition';
    gameDemoCaption.textContent = nextOpen
      ? '可疑 opens above the game with its pinyin and meaning'
      : 'Click the game frame to reveal the dictionary popup';
  });
})();
