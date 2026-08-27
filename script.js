document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Blog Dev Neon carregado com sucesso!');

  // Seleciona todos os cards da página
  const cards = document.querySelectorAll('.card');

  // Adiciona um efeito de contagem e clique interativo
  cards.forEach((card, index) => {
    card.addEventListener('click', (event) => {
      // Evita disparar se o usuário clicar diretamente no botão de link
      if (event.target.tagName === 'A') return;

      console.log(`[LOG]: Card #${index + 1} foi selecionado.`);
      
      // Adiciona uma animação temporária no card ao clicar
      card.style.borderColor = 'var(--accent-neon)';
      setTimeout(() => {
        card.style.borderColor = 'var(--card-border)';
      }, 500);
    });
  });

  // Mensagem no console para instruir o dev
  console.log('💡 Dica Flexbox: Verifique o elemento `article` para observar `flex-direction: row` e `flex: 1 1 100%`.');
});
