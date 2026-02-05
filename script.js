const yes = document.getElementById("yes");
const no = document.getElementById("no");
const main = document.getElementById("main");
const celebration = document.getElementById("celebration");
const music = document.getElementById("music");

yes.addEventListener("click", () => {
  main.classList.add("hidden");        // 👈 sab hatt jaayega
  celebration.classList.remove("hidden");
  music.play();
  hearts();
  confetti();
});

// PC
no.addEventListener("mouseover", moveNo);

// Mobile
no.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNo();
});

function moveNo() {
  no.style.left = Math.random() * 70 + "%";
  no.style.top = Math.random() * 60 + "%";
}

// ❤️ Floating hearts
function hearts() {
  for (let i = 0; i < 25; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.bottom = "-20px";
    heart.style.fontSize = "24px";
    heart.style.animation = "float 3s linear";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 3000);
  }
}

// 🎉 Confetti
function confetti() {
  for (let i = 0; i < 30; i++) {
    const c = document.createElement("div");
    c.style.position = "fixed";
    c.style.top = "-10px";
    c.style.left = Math.random() * 100 + "vw";
    c.style.width = "10px";
    c.style.height = "10px";
    c.style.background = ["#ff4d6d","#ffb703","#8ecae6"][Math.floor(Math.random()*3)];
    c.style.animation = "fall 3s linear";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 3000);
  }
}

// animations
const style = document.createElement("style");
style.innerHTML = `
@keyframes float {
  to { transform: translateY(-100vh); opacity: 0; }
}
@keyframes fall {
  to { transform: translateY(100vh) rotate(360deg); }
}`;
document.head.appendChild(style);
