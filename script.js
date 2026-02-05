const yes = document.getElementById("yes");
const no = document.getElementById("no");
const message = document.getElementById("message");

yes.addEventListener("click", () => {
  message.classList.remove("hidden");
  yes.style.display = "none";
  no.style.display = "none";
  createHearts();
});

// PC
no.addEventListener("mouseover", moveNo);

// Mobile
no.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNo();
});

function moveNo() {
  const x = Math.random() * 70;
  const y = Math.random() * 60;
  no.style.left = x + "%";
  no.style.top = y + "%";
}

// ❤️ Floating hearts animation
function createHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = "24px";
    heart.style.animation = "floatUp 3s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}

// Inject animation
const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  to {
    transform: translateY(-100vh);
    opacity: 0;
  }
}`;
document.head.appendChild(style);
