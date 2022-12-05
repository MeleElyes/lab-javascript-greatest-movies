// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
  const newArray = moviesArray.map((elem) => elem.director);
  return newArray;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  const newArray = moviesArray.filter(
    (elem) =>
      elem.genre &&
      elem.genre.includes("Drama") &&
      elem.director.includes("Steven Spielberg")
  );
  return newArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if (!moviesArray.length) {
    return 0;
  }

  let sum = moviesArray.reduce(function (accumulator, curValue) {
    if (!curValue.score) {
      return accumulator + 0;
    } else return accumulator + curValue.score;
  }, 0);
  let result = sum / moviesArray.length;
  return Math.round(result * 100) / 100;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
  const newArray = moviesArray.filter(
    (elem) => elem.genre && elem.genre.includes("Drama")
  );
  if (newArray.length === 0) {
    return 0;
  } else return scoresAverage(newArray);
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
  const newArray = moviesArray.map((elem) => elem);
  const movieByYear = newArray.sort((a, b) => { return (a.year - b.year || a.title.localeCompare(b.title));});
  return movieByYear;
}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
  const newArray = moviesArray.map((elem) => elem.title);
  const alphabeticArray = newArray.sort((a, b) => a.localeCompare(b));
  if (alphabeticArray.length > 20) {
    return alphabeticArray.slice(0, 20);
  } else return alphabeticArray;
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
  const newArray = moviesArray.map((elem) => elem);
  let result = [];
  for (i = 0; i < newArray.length; i++) {
    let time = newArray[i].duration
      .replaceAll("min", "")
      .replaceAll("h", ".")
      .replaceAll(" ", "")
      .split(".");
    let minutes = Number(time[0]) * 60 + Number(time[1]);
    result[i] = newArray[i];
    newArray[i].duration = minutes;
  }
  return result;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (!moviesArray.length) {
    return null;
  }
  let yearAndScore = [];
  for (i = 0; i < moviesArray.length; i++) {
    yearAndScore.push([moviesArray[i].year, moviesArray[i].score]);
  }

  let result = [];
  for (i = 0; i < yearAndScore.length; i++) {
        if(result.indexOf(yearAndScore[i][0]) < 0) {result.push(yearAndScore[i])}
        else {result[result.indexOf(yearAndScore[i][0])].push(yearAndScore[1])}
}
return result
}


