//Firstly, create a function that loads the DOM content.
//create a function that lets the user view all the movies.
//make a baseURL for when you want to fetch

//starting view contains - movie titles and images.
//create an event listener that lets the user click on a movie to view all the details of the selected movie. 

//create a funtion that lets a user comment on a selected movie.
//function that lets the user update or edit their comment.

//create a function that lets the user like a selected movie - make a like button
//If you have enough time - create a function that lets the user unlike a selected movie.


document.addEventListener("DOMContentLoaded", ()=>{
    const apibaseURL = "https://api.themoviedb.org/3/movie/popular?api_key=eacd0d5f3e163cc975fd29fceb3caf04&language=en-US&page=1"

    // const imagebaseURL = "https://api.themoviedb.org/3/movie/475557/images?api_key=eacd0d5f3e163cc975fd29fceb3caf04&language=en-US"


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
                let h3 = document.createElement('h3'),
                img = document.createElement('img');
                h3.innerText = movie.original_title
                img.src="https://images-na.ssl-images-amazon.com/images/I/81OWxI%2Bq8QL._SY679_.jpg";


                let collection = document.querySelector("#movie-collection")
                collection.append(h3, img)

            })
        })
    }






    renderMovies();
})
