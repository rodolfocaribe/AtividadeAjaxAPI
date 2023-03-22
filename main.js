(function ($) {
    const moviesList = document.querySelector("#movies-list");
    let promise = fetch(
        "https://api.themoviedb.org/3/movie/popular?api_key=edf8d88b750028082bb12f3d6e778c81&language=pt-US&page=1"
    )
        .then(response => response.json())
        .then(data => {
            data.results.slice(0, 10).forEach(({poster_path, original_title, release_date, overview, vote_average}) => {
                const movieDiv = document.createElement("div");
                const posterPath = document.createElement("img");
                posterPath.src = `https://image.tmdb.org/t/p/w500${poster_path}`;
                const originalTitle = document.createElement("p");
                originalTitle.textContent = `Nome original: ${original_title}`;
                const releaseDate = document.createElement("p");
                releaseDate.textContent = `Data de Lançamento: ${release_date}`;
                const overviews = document.createElement("p");
                overviews.textContent = `Descrição: ${overview}`;
                const voteAverage = document.createElement("p");
                voteAverage.textContent = `Avaliação média: ${vote_average}`;

                movieDiv.appendChild(posterPath);
                movieDiv.appendChild(originalTitle);
                movieDiv.appendChild(releaseDate);
                movieDiv.appendChild(overviews);
                movieDiv.appendChild(voteAverage);
                moviesList.appendChild(movieDiv);
            });
        });
})(jQuery);
$(".movies-list").slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ]
})(jQuery);
