document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');

  cards.forEach((card, index) => {
    card.addEventListener('click', () => {
      console.log(`Você clicou no card ${index + 1}`);
    });
  });
});
