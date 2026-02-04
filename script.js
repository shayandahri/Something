const targetDate = new Date("February 3, 2026 19:53:00").getTime();

const countdownSection = document.getElementById("countdown-section");
const celebrationSection = document.getElementById("celebration-section");
const cakeSection = document.getElementById("cake-section");
const gallerySection = document.getElementById("gallery-section");
const letterSection = document.getElementById("letter-section");
const endingSection = document.getElementById("ending-section");

const fireworkSound = document.getElementById("firework-sound");
const romanticMusic = document.getElementById("romantic-music");

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

function updateCountdown() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff <= 0) {
    startCelebration();
    return;
  }

  daysEl.textContent = Math.floor(diff / (1000 * 60 * 60 * 24));
  hoursEl.textContent = Math.floor((diff / (1000 * 60 * 60)) % 24);
  minutesEl.textContent = Math.floor((diff / (1000 * 60)) % 60);
  secondsEl.textContent = Math.floor((diff / 1000) % 60);
}

setInterval(updateCountdown, 1000);

function startCelebration() {
  countdownSection.style.display = "none";
  celebrationSection.classList.remove("hidden");

  fireworkSound.play().catch(()=>{});
  romanticMusic.play().catch(()=>{});

  startFireworks();

  setTimeout(() => {
    celebrationSection.classList.add("hidden");
    cakeSection.classList.remove("hidden");
    gallerySection.classList.remove("hidden");
    letterSection.classList.remove("hidden");
    endingSection.classList.remove("hidden");
  }, 18000);
}

/* FIREWORKS */
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startFireworks() {
  setInterval(() => {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height / 2;
    ctx.fillStyle = `hsl(${Math.random()*360},100%,60%)`;
    ctx.beginPath();
    ctx.arc(x, y, 5, 0, Math.PI * 2);
    ctx.fill();
  }, 100);
}

/* Candle interaction */
document.getElementById("candle").addEventListener("click", () => {
  document.querySelector(".flame").style.display = "none";
  document.getElementById("wish-message").classList.remove("hidden");
});

/* Envelope */
document.getElementById("envelope").addEventListener("click", function() {
  this.classList.toggle("open");
});
