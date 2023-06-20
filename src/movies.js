// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {

    const newArr = moviesArray.map(function (element) {
        return element.director;
    
    });
 
    return newArr;  

}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    
    const newArray = moviesArray.filter(function(element) {
        return element.director ==="Steven Spielberg" && element.genre.indexOf("Drama") >= 0
    });

    return newArray.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {

    if (moviesArray.length === 0 ) {
        return 0;
    } 

    const sum = 
    moviesArray.reduce(function(accumulator, currentValue) {
    
    return accumulator + (currentValue.score || 0);

    },0);

    const avgScore = Number((sum / moviesArray.length).toFixed(2));

    return avgScore;

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

    

    const newArray = moviesArray.filter(function(element) {
        return element.genre.indexOf("Drama") >= 0
    });

    if (newArray.length === 0) {
        return 0;
    }

    const sum = newArray.reduce(function(accumulator, currentValue){

        return accumulator + currentValue.score
    }, 0);

    const avgScore = Number((sum / newArray.length).toFixed(2));

    return avgScore;

}


// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) { 

    // const newArr = moviesArray.toSorted((a , b) => {
    //     return a.title.localeCompare(b.title) 
    //  });

        const moviesPerYear = moviesArray.toSorted((a, b) => {
            if (a.year === b.year) {
                return a.title.localeCompare(b.title)
            } else {
                return a.year - b.year;
            }
        });


    return moviesPerYear;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    
    const newArr6 = moviesArray.toSorted((a , b) => {
        return a.title.localeCompare(b.title)});

         const topMovies = newArr6.slice(0,20).map(movie => movie.title);

         return topMovies
 
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {

}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    
}
