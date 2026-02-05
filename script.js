const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const message = document.getElementById("message");
const question = document.getElementById("question");
const buttons = document.querySelector(".buttons");

yesBtn.addEventListener("click", () => {
  question.style.display = "none";
  buttons.style.display = "none";
  message.style.display = "block";
});

noBtn.addEventListener("mouseenter", moveNo);
noBtn.addEventListener("touchstart", moveNo);

function moveNo() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 150 - 75;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}
