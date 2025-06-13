const devotions = [
  {
    verse: "Psalm 46:10",
    text: "Be still and know that I am God. Take time to rest in His presence today.",
    song: { title: "Still - Hillsong", url: "https://www.youtube.com/watch?v=FPZhzvddzeg" }
  },
  {
    verse: "Isaiah 40:31",
    text: "Those who hope in the Lord will renew their strength. Trust Him in your waiting.",
    song: { title: "Everlasting God - Lincoln Brewster", url: "https://www.youtube.com/watch?v=y69Mp1JnVQ4" }
  }
];

const devotion = devotions[new Date().getDate() % devotions.length];
document.getElementById('devotion').innerHTML = \`
  <h2>\${devotion.verse}</h2>
  <p>\${devotion.text}</p>
  <a href="\${devotion.song.url}" target="_blank">🎵 \${devotion.song.title}</a>
\`;