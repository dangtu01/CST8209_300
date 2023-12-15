const API_KEY = 'l0iKsP2WYrDDYMpNsNQNboZxuPVpa2CMwUuobsCB';
const $form = document.getElementById('form');
const $date = document.getElementById('date');
const $apod = document.querySelector('.apod');
const $favorites = document.querySelector('.favorites');

loadFavorites();

$form.addEventListener('submit', function(e) {
  e.preventDefault();
  const dateValue = $date.value;
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&date=${dateValue}`;

  const date = new Date(dateValue);
  const currentDate = new Date();

  if (date > currentDate) {
    alert('Please choose another date');
  }else{
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => displayAPOD(data))
  }

});

function displayAPOD(data) {
  $apod.innerHTML = '';
  const apodContainer = document.createElement('div');
  const picture = document.createElement('div');
  const description = document.createElement('div');
  const button = document.createElement('button');

  picture.classList = 'picture';
  description.classList = 'description';
  apodContainer.classList = 'apod-container';
  button.classList = 'save-favorite--btn'

  picture.innerHTML = `<img src="${data.url}" alt="${data.title}">`;
  description.innerHTML = `<h2>${data.title}</h2><p>${data.date}</p><p>${data.explanation}</p>`;
  button.textContent = 'Save to Favorites'

  description.appendChild(button);
  apodContainer.appendChild(picture);
  apodContainer.appendChild(description);

  $apod.appendChild(apodContainer);

  eventListeners(picture, button, data);

}

function eventListeners(picture, button, data) {
  picture.addEventListener('click', function() {
    createModalPicture(data);
  });
  button.addEventListener('click', function() {
    const favoriteData = { url: data.url, title: data.title, date: data.date };
    saveFavoriteToLocalStorage(favoriteData);
    createFavoriteElement(data.url, data.title, data.date);
  });
}

function saveFavoriteToLocalStorage(favoriteData) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.push(favoriteData);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}
function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites.forEach(favorite => {
    createFavoriteElement(favorite.url, favorite.title, favorite.date);
  });
}

function createModalPicture(data) {
  // Create a modal overlay
  const overlay = document.createElement('div');
  overlay.classList = 'modal-overlay';

  // Check if a modal already exists and remove it
  let existingModal = document.querySelector('.modal-overlay');
  if (existingModal) {
    existingModal.remove();
  }

  const modal = document.createElement('div');
  modal.classList = 'modal-img';
  modal.innerHTML = `<img src="${data.hdurl}" alt="${data.title}">`;

  // Append the modal to the overlay
  overlay.appendChild(modal);

  // Append the overlay (with modal inside) to the body
  document.body.appendChild(overlay);

  // Event listener to close the modal when clicking outside of it
  overlay.addEventListener('click', function(event) {
    if (event.target === overlay) {
      overlay.remove();
    }
  });
}

function createFavoriteElement(imageSource, title, date) {
  const favorite = document.createElement('div');
  const favoritePicture = document.createElement('div');
  const favoriteInfo = document.createElement('div');
  const deleteButton = document.createElement('button');

  favorite.classList = 'favorite-container';
  favoritePicture.classList = 'favorite-img';
  favoriteInfo.classList = 'favorite-info';
  deleteButton.classList = 'delete-btn';

  favoritePicture.innerHTML = `<img src="${imageSource}" alt="${title}">`;
  favoriteInfo.innerHTML = `<h3>${title}</h3><p>${date}</p>`;
  deleteButton.innerText = 'Delete';
  
  favorite.dataset.id = imageSource;

  deleteButton.addEventListener('click', function() {
    favorite.remove();
    removeFromLocalStorage(favorite.dataset.id);
  });

  favoriteInfo.appendChild(deleteButton);
  favorite.appendChild(favoritePicture);
  favorite.appendChild(favoriteInfo);

  $favorites.appendChild(favorite);
}

function removeFromLocalStorage(favoriteId) {
  let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
  favorites = favorites.filter(fav => fav.url !== favoriteId);
  localStorage.setItem('favorites', JSON.stringify(favorites));
}