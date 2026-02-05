document.addEventListener("DOMContentLoaded", () => {
  const yes = document.getElementById("yes");
  const no = document.getElementById("no");
  const question = document.getElementById("question");
  const buttons = document.querySelector(".buttons");
  const message = document.getElementById("message");
  const music = document.getElementById("music");

  yes.addEventListener("click", () => {
    question.style.display = "none";
    buttons.style.display = "none";
    message.style.display = "block";
    music.play();
    createHearts();
  });

  function moveNo() {
    const x = Math.random() * 160 - 80;
    const y = Math.random() * 120 - 60;
    no.style.transform = `translate(${x}px, ${y}px)`;
  }

  no.addEventListener("mouseenter", moveNo);
  no.addEventListener("touchstart", moveNo);

  function createHearts() {
    for (let i = 0; i < 15; i++) {
      const heart = document.createElement("div");
      heart.innerHTML = "❤️";
      heart.style.position = "fixed";
      heart.style.left = Math.random() * 100 + "vw";
      heart.style.top = "100vh";
      heart.style.fontSize = "20px";
      heart.style.animation = "floatUp 3s linear";
      document.body.appendChild(heart);

      setTimeout(() => heart.remove(), 3000);
    }
  }
});
