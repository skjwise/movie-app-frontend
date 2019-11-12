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
    const apibaseURL = "https://api.themoviedb.org/3/movie/550?api_key=eacd0d5f3e163cc975fd29fceb3caf04"

    // function fetchMovies(){
    //     return fetch(apibaseURL)
    //     .then(function(response){
    //         return response.json()
    //     })
    // }

    function renderMovies(){
        return fetch(apibaseURL)
        .then(function(movies){
            for (let i = 0; i < movies.length; i++){
                renderMovie(movies[i])
            }
        })
    }

    function renderMovie(movie){
        console.log('working')
        const card = document.createElement('div')
        card.classList.add("card")
        card.innerHTML = `
        <h3>${movie.title}</h3>
        <img src=${movie.image}>
        <p> ${movie.likes}</p>
        <button class="like-btn" id="${movie.id}> Like </button>
        `
        document.querySelector("#movie-collection").appendChild(card)
    }

// for the commit




    renderMovies();
})