# ⚡ Blog Dev Neon — Desafio Flexbox Horizontais

<p align="center">
  <img src="https://img.shields.io/badge/CSS3-Flexbox-ff007f?style=for-the-badge&logo=css3" alt="CSS3 Badge">
  <img src="https://img.shields.io/badge/JavaScript-ES6+-ffe600?style=for-the-badge&logo=javascript" alt="JS Badge">
  <img src="https://img.shields.io/badge/Status-Conclu%C3%ADdo-00ff66?style=for-the-badge" alt="Status Badge">
</p>

Uma interface moderna de blog para desenvolvedores com **tema dark neon** e **cores vivas**, criada para demonstrar o uso prático e avançado do **CSS Flexbox**.

---

## 🎨 O Desafio

O objetivo deste projeto é reestruturar cards de publicação padrão que estavam organizados verticalmente, transformando-os em **uma lista de postagens horizontais largas** que ocupam toda a extensão do container.

### 📋 Requisitos Cumpridos:

1. **Eixo Principal (`flex-direction`):**
   - No arquivo `style.css`, a propriedade do seletor `article` foi alterada para `flex-direction: row`, fazendo com que imagem, texto e botões fiquem posicionados em linha.

2. **Largura dos Cards (`flex`):**
   - A propriedade `flex` dos cards (`article`) foi configurada como `1 1 100%`, garantindo que cada card ocupe **100% da largura** do container, formando uma lista vertical de cartões horizontais largos.

3. **Alinhamento Customizado (`align-self`):**
   - A propriedade `align-self` foi aplicada de duas formas:
     - Na imagem (`.card-media`): `align-self: flex-start` (alinhamento no topo do eixo cruzado).
     - No botão de ação (`.btn`): `align-self: flex-end` (posicionamento no canto inferior do card), quebrando o alinhamento padrão.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica (`<header>`, `<main>`, `<article>`, `<footer>`).
- **CSS3:** Variáveis nativas (`:root`), Flexbox moderno, gradientes e efeitos Neon (`box-shadow`).
- **JavaScript (ES6+):** Event Listeners e manipulação do DOM.
- **Google Fonts:** Fontes *Poppins* (textos) e *Fira Code* (trechos de código).

---

## 📂 Estrutura do Projeto

```text
.
├── index.html   # Estrutura principal com a marcação dos cards
├── style.css    # Estilos, variáveis e regras de Flexbox
├── script.js   # Interatividade e animações via clique
└── README.md    # Documentação do projeto
