
const moodSelect = document.getElementById("mood-select");
const verseBox = document.getElementById("verse-box");
const adviceBox = document.getElementById("advice-box");
const verseText = document.getElementById("verse-text");
const adviceText = document.getElementById("advice-text");
const journalEntry = document.getElementById("journal-entry");

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
  } else {
    verseBox.classList.add("hidden");
    adviceBox.classList.add("hidden");
    journalEntry.value = "";
  }
}
