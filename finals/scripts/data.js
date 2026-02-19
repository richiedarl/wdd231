import { showModal } from './modal.js';
import { saveFavorite, loadFavorites } from './localStorage.js';

const FESTIVALS = './festivals.json';

export async function loadFeaturedFestivals() {
  try {
    const res = await fetch(FESTIVALS);
    const data = await res.json();
    const featured = data.slice(0, 3);
    const container = document.getElementById('featured-festivals');
    container.innerHTML = '';
    featured.forEach(f => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h3>${f.name}</h3>
        <img src="images/${f.image}" alt="${f.name}">
        <p>${f.location} | ${f.month}</p>
      `;
      card.addEventListener('click', () => showModal(f));
      container.appendChild(card);
    });
  } catch (err) {
    console.error('Error loading featured festivals', err);
  }
}

export async function loadAllFestivals() {
  try {
    const res = await fetch(FESTIVALS);
    const data = await res.json();
    const container = document.getElementById('festival-cards');
    const searchInput = document.getElementById('searchInput');

    function render(filtered) {
      container.innerHTML = '';
      filtered.forEach(f => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <h3>${f.name}</h3>
          <img src="images/${f.image}" alt="${f.name}">
          <p>${f.location} | ${f.month}</p>
        `;
        card.addEventListener('click', () => showModal(f));
        container.appendChild(card);
      });
    }

    render(data);

    searchInput.addEventListener('input', () => {
      const query = searchInput.value.toLowerCase();
      const filtered = data.filter(f => f.name.toLowerCase().includes(query));
      render(filtered);
    });
  } catch (err) {
    console.error('Error loading festivals', err);
  }
}
