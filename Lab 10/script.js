const $form = document.getElementById('form');
const $date = document.getElementById('date');
const $colorsContainer = document.getElementById('colors-container');

const history = [];

$form.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent the default form submission behavior
  const dateValue = document.getElementById('date').value;
  const apiUrl = `https://colors.zoodinkers.com/api?date=${dateValue}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => addColorToContainer(data))
    .catch(error => console.error('Error fetching data:', error))
});

function createColorElement(data) {
  const color = document.createElement('div');
  const colorBox = document.createElement('div');
  const colorInfo = document.createElement('div')
  colorBox.classList = 'color-box';
  color.classList = 'color';
  colorInfo.classList = 'color-info'
  colorBox.style.backgroundColor = data.hex;
  colorInfo.innerHTML = `<p>${data.hex}</p><p>${data.date}</p>`;
  color.append(colorBox);
  color.append(colorInfo);
  $colorsContainer.appendChild(color);

  if ($colorsContainer.firstChild) {
    $colorsContainer.insertBefore(color, $colorsContainer.firstChild);
  } else { 
    $colorsContainer.appendChild(color);
  }
}

function addColorToContainer(colorData) {
  saveColorsToLocalStorage(colorData);
  createColorElement(colorData);
}
function saveColorsToLocalStorage(colorData) {
  let colors = JSON.parse(localStorage.getItem('colors')) || [];
  colors.push(colorData);
  localStorage.setItem('colors', JSON.stringify(colors));
}

document.addEventListener('DOMContentLoaded', () => {
  const storedColors = JSON.parse(localStorage.getItem('colors')) || [];
  storedColors.forEach(createColorElement);
});

const $clear = document.getElementById('clear');

$clear.addEventListener('click', () => {
  document.querySelectorAll('.color').forEach(color => color.remove());
  localStorage.removeItem('colors');
});
