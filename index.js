document.addEventListener("DOMContentLoaded", ()=>{
    const apibaseURL = "https://api.themoviedb.org/3/movie/popular?api_key=eacd0d5f3e163cc975fd29fceb3caf04&language=en-US&page=1"

    // const imagebaseURL = `https://api.themoviedb.org/3/movie/${image.id}/images?api_key=eacd0d5f3e163cc975fd29fceb3caf04&language=en-US`


    function init(){
        renderMovies();
    }

    function fetchMovies(){
        return fetch(apibaseURL)
        .then(function(response){
            return response.json()
        })
    }

    function renderMovies(){
        fetchMovies()
        .then(function(data){
            let movies = data.results;
                return movies.map(function(movie){
                let h2 = document.createElement('h2')
                let image = document.createElement('img')
                h2.innerText = movie.original_title
                // image.src=movie.poster_path
                image.src="https://images-na.ssl-images-amazon.com/images/I/81OWxI%2Bq8QL._SY679_.jpg"

                // img.addEventListener("click", showMovie(movie))
                //try mouseover

                let collection = document.querySelector("#movie-collection")
                collection.append(image, h2)
            })
        })
    }



    // function showMovie(movie){
        // const showPanel = document.createElement("div")
        // showPanel.innerHTML = ""

    //     let p = document.createElement('p')
    //     p.innerText = movie.overview

    //     let h5 = document.createElement('h5')
    //     h5.innerText = movie.release_date

    //     likeButton = document.createElement('button')
    //     likeButton.innerText = "Like!"
    // }



    init();
})
