// http://img.omdbapi.com/?apikey=1eaad64c&s={}

document.addEventListener('DOMContentLoaded', () => {
    const movieform = document.getElementById('movieform');
    const moviesresult = document.getElementById("moviesresult");
    movieform.addEventListener('submit', (e) => {
        const moviename = document.getElementById("moviename").value;
        e.preventDefault();
        fetchmovie(moviename);
    })
    async function fetchmovie(moviename) {
        try {
            moviesresult.innerHTML = "<div class='loading'>Searching for movie please wait...</div>";
            const response = await fetch(`http://www.omdbapi.com/?apikey=1eaad64c&s=${moviename}`);

            const result = await response.json();

            if (result.Response === "False") {
                throw new Error(result.Error || "Movie not found");
            }

            displaymovie(result.Search);

        } catch (error) {
            moviesresult.innerHTML = `<div><h2>${error.message}</h2></div>`;
        }
    }

    function displaymovie(movies) {

        moviesresult.innerHTML = `
              <div class="movies-grid">
                  ${movies
                .map(
                    (movie) => `
                      <div class="movie-card">
                          <img 
                              src="${movie.Poster !== "N/A"
                            ? movie.Poster
                            : "https://via.placeholder.com/300x450?text=No+Poster"
                        }" 
                              alt="${movie.Title}"
                              class="movie-poster"
                             
                          >
                          <div class="movie-info">
                              <h3 class="movie-title">${movie.Title}</h3>
                              <div class="movie-year">${movie.Year}</div>
                          </div>
                      </div>
                  `
                )
                .join("")}
              </div>
          `;

    }
})
