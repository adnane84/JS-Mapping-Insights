// Exercise 7: Movie Ratings
// Develop a program that allows users to rate movies. 
// Use a Map to store movie titles as keys and an array of ratings as values. 
// Implement functions to add ratings, 
// calculate average ratings, and display the top-rated movies.

class MovieRatings {
  constructor() {
    this.ratingsMap = new Map();
  }

  addRating(movieTitle, rating) {
    if (!this.ratingsMap.has(movieTitle)) {
      this.ratingsMap.set(movieTitle, []);
    }
    this.ratingsMap.get(movieTitle).push(rating);
  }

  calculateAverageRating(movieTitle) {
    if (!this.ratingsMap.has(movieTitle)) {
      return "Movie not found";
    }
    const ratings = this.ratingsMap.get(movieTitle);
    const totalRatings = ratings.reduce((sum, rating) => sum + rating, 0);
    const averageRating = totalRatings / ratings.length;
    return averageRating.toFixed(2);
  }

  displayTopRatedMovies() {
    const sortedMovies = [...this.ratingsMap.entries()].sort((a, b) => {
      const averageRatingA = this.calculateAverageRating(a[0]);
      const averageRatingB = this.calculateAverageRating(b[0]);
      return averageRatingB - averageRatingA;
    });

    for (const [movieTitle, _] of sortedMovies) {
      console.log(`Movie: ${movieTitle}, Average Rating: ${this.calculateAverageRating(movieTitle)}`);
    }
  }
}

const movieRatings = new MovieRatings();

movieRatings.addRating("Inception", 5);
movieRatings.addRating("Inception", 4);
movieRatings.addRating("The Shawshank Redemption", 5);
movieRatings.addRating("The Shawshank Redemption", 4);
movieRatings.addRating("The Shawshank Redemption", 4);
movieRatings.addRating("Avatar", 3);
movieRatings.addRating("Avatar", 2);

console.log("Average rating for Inception:", movieRatings.calculateAverageRating("Inception"));
console.log("Average rating for Avatar:", movieRatings.calculateAverageRating("Avatar"));

console.log("Top rated movies:");
movieRatings.displayTopRatedMovies();
