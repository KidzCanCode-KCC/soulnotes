const moodSelect = document.getElementById("mood-select");
const verseBox = document.getElementById("verse-box");
const adviceBox = document.getElementById("advice-box");
const verseText = document.getElementById("verse-text");
const adviceText = document.getElementById("advice-text");
const journalEntry = document.getElementById("journal-entry");
const musicBox = document.getElementById("music-box");
const musicSuggestions = document.getElementById("music-suggestions");

window.onload = () => {
  for (let mood in moods) {
    const option = document.createElement("option");
    option.value = mood;
    option.textContent = mood.charAt(0).toUpperCase() + mood.slice(1);
    moodSelect.appendChild(option);
  }

  const lastMood = localStorage.getItem("lastMood");
  if (lastMood) {
    moodSelect.value = lastMood;
    showContent(lastMood);
  }
};

moodSelect.addEventListener("change", () => {
  const mood = moodSelect.value;
  localStorage.setItem("lastMood", mood);
  showContent(mood);
});

journalEntry.addEventListener("input", () => {
  const mood = moodSelect.value;
  if (mood) {
    localStorage.setItem(`journal-${mood}`, journalEntry.value);
  }
});

function showContent(mood) {
  if (moods[mood]) {
    verseText.textContent = moods[mood].verse;
    adviceText.textContent = moods[mood].advice;
    verseBox.classList.remove("hidden");
    adviceBox.classList.remove("hidden");

    const saved = localStorage.getItem(`journal-${mood}`);
    journalEntry.value = saved || "";

    if (moods[mood].songs && moods[mood].songs.length > 0) {
      musicSuggestions.innerHTML = "";
      moods[mood].songs.forEach(song => {
        const li = document.createElement("li");
        li.textContent = song;
        musicSuggestions.appendChild(li);
      });
      musicBox.classList.remove("hidden");
    } else {
      musicBox.classList.add("hidden");
    }
  } else {
    verseBox.classList.add("hidden");
    adviceBox.classList.add("hidden");
    musicBox.classList.add("hidden");
    journalEntry.value = "";
  }
}

function addPrayer() {
  const input = document.getElementById("prayer-input");
  const list = document.getElementById("prayer-list");
  if (input.value.trim()) {
    const li = document.createElement("li");
    li.textContent = input.value;
    list.appendChild(li);
    input.value = "";
  }
}
