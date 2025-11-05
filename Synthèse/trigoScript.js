// Assure-toi que data est défini dans data.js
const container = document.getElementById('container');
const hLButton = document.getElementById('hideLeft');
const hRButton = document.getElementById('hideRight');
const mixButton = document.getElementById('mix');

// Fonction utilitaire : remplace une formule par une ligne
function hideFormula(element) {
  if (!element || element.classList.contains('hidden')) return;
  const underline = document.createElement('span');
  underline.className = 'blank';
  underline.textContent = '_______';
  element.classList.add('hidden');
  element.replaceWith(underline);

  // Clique sur la ligne → remet la formule
  underline.addEventListener('click', (e) => {
    e.stopPropagation();
    underline.replaceWith(element);
    element.classList.remove('hidden');
    MathJax.typesetPromise(); // Réaffiche le LaTeX
  });
}

data.forEach(pair => {
  const card = document.createElement('div');
  card.className = 'card';

  // Crée les deux parties
  const left = document.createElement('a');
  left.innerHTML = pair[0][0];
  left.className = 'formula left';

  const right = document.createElement('a');
  right.innerHTML = pair[1][0];
  right.className = 'formula right';

  // Ligne de texte
  const p = document.createElement('p');
  p.appendChild(left);
  p.insertAdjacentHTML('beforeend', ' = ');
  p.appendChild(right);
  card.appendChild(p);

  container.appendChild(card);

  // Clique individuel
  left.addEventListener('click', (e) => {
    e.stopPropagation();
    hideFormula(left);
  });
  right.addEventListener('click', (e) => {
    e.stopPropagation();
    hideFormula(right);
  });
});

MathJax.typesetPromise();

// =====================
// Boutons de contrôle
// =====================

// Cache toutes les formules de gauche
hLButton.addEventListener('click', () => {
  document.querySelectorAll('.formula.left').forEach(el => hideFormula(el));
});

// Cache toutes les formules de droite
hRButton.addEventListener('click', () => {
  document.querySelectorAll('.formula.right').forEach(el => hideFormula(el));
});

// Mélange : cache aléatoirement gauche ou droite
// mixButton.addEventListener('click', () => {
//   const pairs = document.querySelectorAll('.card');
//   pairs.forEach(card => {
//     const side = Math.random() < 0.5 ? '.left' : '.right';
//     const el = card.querySelector(side);
//     hideFormula(el);
//   });
// });
mixButton.addEventListener('click', () => {
  // Récupère toutes les cartes dans un tableau
  const cards = Array.from(container.querySelectorAll('.card'));

  // Mélange aléatoirement le tableau (Fisher–Yates)
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j], cards[i]];
  }

  // Réinsère les cartes dans le container dans le nouvel ordre
  cards.forEach(card => container.appendChild(card));
});