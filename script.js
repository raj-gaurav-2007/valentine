const yes = document.getElementById("yes");
const no = document.getElementById("no");
const message = document.getElementById("message");

yes.addEventListener("click", () => {
  message.classList.remove("hidden");
});

no.addEventListener("mouseover", () => {
  const x = Math.random() * 200;
  const y = Math.random() * 50;

  no.style.transform = `translate(${x}px, ${y}px)`;
});
