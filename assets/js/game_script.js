const card = document.querySelector(".flip-card-inner");

function flipCard(e) {
  e.target.closest(".flip-card-inner").classList.toggle("isFlipped");
}

card.addEventListener("click", flipCard);