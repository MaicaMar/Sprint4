// Exercise 1: Get the array of all directors.

function getAllDirectors(movies) {
  const directors = movies.map((movie) => movie.director);
  return directors;
}


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(movies, director) {
  const films = movies.filter((movie) => movie.director === director);
  return films;
}


// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(movies, director) {

  const directorMovies = getMoviesFromDirector(movies, director);

  if (directorMovies.length === 0) {
    return 0;
  }

  const totalRating = directorMovies.reduce((sum, movie) => sum + movie.score, 0);

  const averageRating = totalRating / directorMovies.length;

  return averageRating;  
}


// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(movies) {
  const titlesAtoZ = movies.map(movie => movie.title);
  titlesAtoZ.sort();
  return titlesAtoZ.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(movies) {

  const moviesCopy = [...movies];

  moviesCopy.sort((a, b) => {
    if (a.year !== b.year) {
      return a.year - b.year;
    } else {
      if (a.title.toUpperCase() < b.title.toUpperCase()) {
        return -1;
      }
      if (a.title.toUpperCase() > b.title.toUpperCase()) {
        return 1;
      }
      return 0;
    }
  });

  return moviesCopy;
}



// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(movies, genre) {

  const categoryMovies = movies.filter((movie) => movie.genre.includes(genre));
  const ratedMovies = categoryMovies.filter((movie) => typeof movie.score === 'number' && !isNaN(movie.score));

  if (ratedMovies.length === 0) {
    return 0;
  }

  const totalScore = ratedMovies.reduce((sum, movie) => sum + movie.score, 0);
  const averageRating = totalScore / ratedMovies.length;

  const roundedAverage = Math.round(averageRating * 100) / 100;

  return roundedAverage;
}



// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(movies) {

  const durationInMinMovies = movies.map(movie => {
    const [hours, minutes] = movie.duration.split(' ');
    const hoursInMinutes = parseInt(hours) * 60;
    const minutesInMinutes = parseInt(minutes) || 0;
    const totalMinutes = hoursInMinutes + minutesInMinutes;
    return { ...movie, duration: totalMinutes };
  });

  return durationInMinMovies;
}


// Exercise 8: Get the best film of a year
function bestFilmOfYear(movies, year) {
  const moviesByYear = movies.filter(movie => movie.year === year);
  
  if (moviesByYear.length === 0) {
    return [];
  }

  const bestMovie = moviesByYear.reduce((prev, current) => {
    return (current.score > prev.score) ? current : prev;
  });

  return [bestMovie];
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
