function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favoriteVerses') || '[]');
  const container = document.getElementById('favoritesList');
  container.innerHTML = favorites.length ? favorites.map(v => \`
    <div><strong>\${v.verse}</strong>: \${v.text}</div>\`).join('') : "<p>No favorite verses yet.</p>";
}

loadFavorites();