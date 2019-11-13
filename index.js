document.addEventListener("DOMContentLoaded", ()=>{
    const apibaseURL = "https://api.themoviedb.org/3/movie/popular?api_key=eacd0d5f3e163cc975fd29fceb3caf04&language=en-US&page=1"
    const baseImageURL = "https://image.tmdb.org/t/p/original/"
// const nowPlayingURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=eacd0d5f3e163cc975fd29fceb3caf04&language=en-US&page=1"
// const genreListURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=eacd0d5f3e163cc975fd29fceb3caf04&language=en-US"
   
    function init(){
        renderMovies();
    }
    function fetchMostPopular(){
        return fetch(apibaseURL)
        .then(function(response){
            return response.json()
        })
    }
    function renderMovies(){
        fetchMostPopular()
        .then(function(data){
            let movies = data.results;
            return movies.map(function(movie){
                let h2 = document.createElement('h2')
                let image = document.createElement('img')
                h2.innerText = movie.original_title
                image.src= baseImageURL + movie.poster_path

                // img.addEventListener("click", showMovie(movie))
                // try mouseover

                let collection = document.querySelector("#movie-grid")
                collection.append(image, h2)
            })
        })
    }
    





    init();
})

