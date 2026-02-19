export function saveFavorite(festival) {
  let favs = JSON.parse(localStorage.getItem('favorites')) || [];
  favs.push(festival);
  localStorage.setItem('favorites', JSON.stringify(favs));
}

export function loadFavorites() {
  return JSON.parse(localStorage.getItem('favorites')) || [];
}
