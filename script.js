const gifts = [
  "Me demoré, pero no me olvidé:",
  "Me demoré, pero no me olvidé:",
  "Me demoré, pero no me olvidé:"
];

let attemptCount = 0;
let chosen = false;

function revealGift(cardEl, index) {
  if (chosen || cardEl.classList.contains("flipped")) return;

  cardEl.classList.add("flipped");
  const back = cardEl.querySelector(".back");

  attemptCount++;

  if (attemptCount < 4) {
    // Mostrar mensaje de intento fallido
    back.textContent = "Sigue intentándolo 😜";
    document.getElementById("reset-btn").style.display = "inline-block";

    // Solo bloquear esta carta
    cardEl.style.pointerEvents = 'none';
  } else {
    // Mostrar regalo verdadero
    back.innerHTML = `
    <div style="text-align: center; display: flex; flex-direction: column; align-items: center;">
      <p style="margin: 0 0 10px 0; font-size: 24px;">Me demoré,<br>pero no me olvidé:</p>
      <img src="regalo.png" alt="QR" style="width: 120px; border-radius: 8px;" />
    </div>
  `;
  
    document.getElementById("message").textContent = "🎉 ¡Este es tu regalo! 🎉";

    // Bloquear todo
    document.querySelectorAll('.card').forEach(card => {
      card.style.pointerEvents = 'none';
      if (card !== cardEl) {
        card.style.opacity = '0.5';
      }
    });

    confetti();
    document.getElementById("reset-btn").style.display = "inline-block";
    chosen = true;
  }
}

function resetGame() {
  // No resetea el contador para mantener el intento actual
  document.querySelectorAll('.card').forEach(card => {
    card.classList.remove("flipped");
    card.querySelector(".back").textContent = "";
    card.style.pointerEvents = 'auto';
    card.style.opacity = '1';
  });

  document.getElementById("message").textContent = "";
  document.getElementById("reset-btn").style.display = "none";
}
