const gifts = [
    "Tarjetas nuevas para tus envíos",
    "Regalo sorpresa",
    "Nuevo logo :)"
  ];
  
  let chosen = false;
  
  function revealGift(cardEl, index) {
    if (chosen) return;
  
    cardEl.classList.add("flipped");
  
    const back = cardEl.querySelector(".back");
    back.textContent = gifts[index];
  
    // Bloquear otras cartas
    document.querySelectorAll('.card').forEach((card, i) => {
      if (card !== cardEl) {
        card.style.pointerEvents = 'none';
        card.style.opacity = '0.5';
      }
    });
  
    document.getElementById("message").textContent = "🎉 ¡Este es tu regalo! 🎉";
  
    setTimeout(() => {
      confetti();
    }, 800);

    document.getElementById("reset-btn").style.display = "inline-block";  
    chosen = true;
  }

  function resetGame() {
    chosen = false;
    document.querySelectorAll('.card').forEach(card => {
      card.classList.remove("flipped");
      card.querySelector(".back").textContent = "";
      card.style.pointerEvents = 'auto';
      card.style.opacity = '1';
    });
    document.getElementById("message").textContent = "";
    document.getElementById("reset-btn").style.display = "none";
  }
  
  