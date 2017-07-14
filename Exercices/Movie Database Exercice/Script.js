var movieDatabase = [{
        title: "In Bruges",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Frozen",
        rating: 4.5,
        hasWatched: false
    },
    {
        title: "Mad Max Fury Road",
        rating: 5,
        hasWatched: true
    },
    {
        title: "Les Misérables",
        rating: 3.5,
        hasWatched: false
    }
]


$("body").append("<ul></ul>");

movieDatabase.forEach(function (movie) {
    if (movie.hasWatched) {
        var content = "You have watched " + movie.title + " - " + movie.rating;
    } else {
        var content = "You have not watched " + movie.title + " - " + movie.rating;
    }
    $("ul").append("<li>" + content + "</li>"); 
});