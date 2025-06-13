document.getElementById('prayerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value || "Anonymous";
  const prayer = document.getElementById('prayer').value;
  const prayers = JSON.parse(localStorage.getItem('prayers') || '[]');
  prayers.push({ name, prayer, prayed: false });
  localStorage.setItem('prayers', JSON.stringify(prayers));
  displayPrayers();
  this.reset();
});

function displayPrayers() {
  const container = document.getElementById('prayerList');
  const prayers = JSON.parse(localStorage.getItem('prayers') || '[]');
  container.innerHTML = prayers.map((p, i) => \`
    <div>
      <strong>\${p.name}</strong>: \${p.prayer}
      <button onclick="markPrayed(\${i})">\${p.prayed ? '❤️ Prayed' : '💖 Pray'}</button>
    </div>\`).join('');
}

function markPrayed(index) {
  const prayers = JSON.parse(localStorage.getItem('prayers'));
  prayers[index].prayed = true;
  localStorage.setItem('prayers', JSON.stringify(prayers));
  displayPrayers();
}

displayPrayers();