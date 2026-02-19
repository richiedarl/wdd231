export function showModal(festival) {
  const modal = document.getElementById('modal');
  const body = document.getElementById('modal-body');
  body.innerHTML = `
    <h2>${festival.name}</h2>
    <img src="images/${festival.image}" alt="${festival.name}">
    <p>${festival.description}</p>
    <p><strong>Location:</strong> ${festival.location}</p>
    <p><strong>Month:</strong> ${festival.month}</p>
    <p><strong>Weather:</strong> ${festival.weather}</p>
  `;
  modal.style.display = 'block';

  document.getElementById('closeModal').onclick = () => modal.style.display = 'none';
  window.onclick = e => { if (e.target == modal) modal.style.display = 'none'; };
}
