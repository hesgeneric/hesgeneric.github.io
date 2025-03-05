// Initialize the Telegram WebApp
window.Telegram.WebApp.ready();

// Expand the app to full screen
window.Telegram.WebApp.expand();

// Optionally, you can handle events or interact with Telegram's API
window.Telegram.WebApp.onEvent('viewportChanged', () => {
  console.log('Viewport changed');
});