// Random words for testing
const sentences = [
  "HELLO WORLD",
  "I LIKE TO CODE",
  "THIS IS A TEST"
];

let currentIndex = 0;
const container = document.querySelector("#text-container");

// Function to morph text
function morphText(nextIndex) {
  const next = sentences[nextIndex].split("");

  container.innerHTML = ""; // clear container

  next.forEach((letter, i) => {
    const span = document.createElement("span");
    span.textContent = letter;

    // Start letters invisible and slightly right
    span.style.opacity = 0;
    span.style.transform = "translateX(50px)";
    container.appendChild(span);

    setTimeout(() => {
      span.style.transition = "all 0.5s ease";
      span.style.opacity = 1;
      span.style.transform = "translateX(0)";
    }, i * 50);
  });

  currentIndex = nextIndex;
}

// Scroll trigger: morph on scroll
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;

  if (scrollY > 100 && currentIndex === 0) {
    morphText(1);
  }
  if (scrollY > 300 && currentIndex === 1) {
    morphText(2);
  }
});

// Initialize first sentence
morphText(0);
