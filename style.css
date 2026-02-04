
document.addEventListener("DOMContentLoaded", () => {
  const yesBtn = document.getElementById("yes");
  const noBtn = document.getElementById("no");
  const message = document.getElementById("message");

  yesBtn.addEventListener("click", () => {
    message.classList.remove("hidden");
    yesBtn.style.display = "none";
    noBtn.style.display = "none";
  });

  function moveNo() {
    const x = Math.random() * 80 + "%";
    const y = Math.random() * 80 + "%";
    noBtn.style.position = "absolute";
    noBtn.style.left = x;
    noBtn.style.top = y;
  }

  noBtn.addEventListener("mouseover", moveNo);
  noBtn.addEventListener("touchstart", moveNo);
});
