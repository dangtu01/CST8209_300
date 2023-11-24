function displayMovies(moviesToShow) {
  const movieList = document.getElementById('movie-list');
  movieList.innerHTML = ''; // Clear existing content

  moviesToShow.forEach(movie => {
      const li = document.createElement('li');
      li.classList.add('movie');

      const title = document.createElement('h2');
      title.textContent = movie.title;
      title.style.cursor = 'pointer'; // Optional: Change cursor on hover to indicate clickability

      const year = document.createElement('span');
      year.textContent = movie.year;

      const description = document.createElement('p');
      description.textContent = movie.description;
      description.classList.add('description', 'd-none'); // Add 'd-none' to initially hide the description

      li.appendChild(title);
      li.appendChild(year);
      li.appendChild(description);

      movieList.appendChild(li);

      // Add an event listener to the title
      title.addEventListener('click', () => {
          description.classList.toggle('d-none'); // Toggle visibility on click
      });
  });
}
const searchInput = document.getElementById('search');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

  const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(query));

  displayMovies(filteredMovies);
});
displayMovies(movies);