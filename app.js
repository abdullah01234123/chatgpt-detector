document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("text-input");
  const count = document.getElementById("word-count");
  const clear = document.getElementById("clear-button");
  const analyze = document.getElementById("analyze-button");
  const notice = document.getElementById("notice");

  const wordCount = value => value.trim() ? value.trim().split(/\s+/).length : 0;
  const updateCount = () => { count.textContent = `${wordCount(input.value)} words`; };

  input.addEventListener("input", updateCount);
  clear.addEventListener("click", () => {
    input.value = "";
    updateCount();
    notice.hidden = true;
    input.focus();
  });

  analyze.addEventListener("click", () => {
    const words = wordCount(input.value);
    notice.hidden = false;
    if (!words) {
      notice.textContent = "Paste some text before starting an analysis.";
      input.focus();
      return;
    }
    if (words < 80) {
      notice.textContent = "For a more meaningful review, prepare a longer sample (at least 80 words is a useful starting point).";
      return;
    }
    notice.textContent = "The front-end preview is ready, but live detection is not connected yet. Connect a detection API on the server before displaying a score. No simulated result is shown.";
  });

  document.getElementById("year").textContent = new Date().getFullYear();
});
