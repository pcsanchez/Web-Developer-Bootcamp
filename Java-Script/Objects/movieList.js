var movies = [
    {
        name: "Inception",
        rating: 5,
        hasWatched: true
    },
    {
        name: "The Greatest Showman",
        rating: 4.9,
        hasWatched: false
    },
    {
        name: "Jumanji",
        rating: 4,
        hasWatched: true
    },
    {
        name: "Spider Man",
        rating: 4.5,
        hasWatched: false
    }
];

movies.forEach(function(movie){
    if(movie.hasWatched){
        console.log("You have watched \"" + movie.name + "\" - " + movie.rating + " stars");
    } else{
        console.log("You have not watched \"" + movie.name + "\" - " + movie.rating + " stars");
    }
});