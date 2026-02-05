const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const question = document.getElementById("question");

let noClickCount = 0;

// YES button
yesBtn.addEventListener("click", () => {
  question.style.opacity = "0";
  setTimeout(() => {
    question.innerHTML = "Yayyy 💖 I knew it 😍";
    question.style.opacity = "1";
  }, 300);

  yesBtn.style.display = "none";
  noBtn.style.display = "none";

  // hearts effect
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement("div");
    heart.innerHTML = "💖";
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 2 + Math.random() * 2 + "s";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 4000);
  }
});

// NO button (mobile + pc safe)
function moveNoButton() {
  noClickCount++;

  const maxX = window.innerWidth - noBtn.offsetWidth - 20;
  const maxY = window.innerHeight - noBtn.offsetHeight - 20;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.position = "fixed";
  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";

  // cute messages
  if (noClickCount === 3) {
    noBtn.innerText = "Soch lo 🙃";
  } else if (noClickCount === 5) {
    noBtn.innerText = "Please 🥺";
  } else if (noClickCount >= 7) {
    noBtn.innerText = "YES hi better hai 😏";
  }
}

// PC hover
noBtn.addEventListener("mouseenter", moveNoButton);

// Mobile touch
noBtn.addEventListener("touchstart", (e) => {
  e.preventDefault();
  moveNoButton();
});
