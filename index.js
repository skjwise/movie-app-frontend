document.addEventListener("DOMContentLoaded", ()=>{
    const apibaseURL = "https://api.themoviedb.org/3/movie/popular?api_key=eacd0d5f3e163cc975fd29fceb3caf04&language=en-US&page=1"
    const baseImageURL = "https://image.tmdb.org/t/p/original/"
    const nowPlayingURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=eacd0d5f3e163cc975fd29fceb3caf04&language=en-US&page=1"
    // const genreListURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=eacd0d5f3e163cc975fd29fceb3caf04&language=en-US"
   
    function init(){
        renderMostPopular();
        mostPopular();
        nowPlaying();
        searchMovies();

    }
        //need to  add a header that says Most Popular:
    function mostPopular(){
        const navMostPopular = document.querySelector('.nowPlaying')
        navMostPopular.addEventListener('click', renderMostPopular)
    }
    function fetchMostPopular(){
        return fetch(apibaseURL)
        .then(function(response){
            return response.json()
        })
    }
    function renderMostPopular(){
        fetchMostPopular()
        .then(function(data){
            let movies = data.results;
            return movies.map(function(movie){
                let h2 = document.createElement('h2')
                let image = document.createElement('img')
                h2.innerText = movie.original_title
                image.src= baseImageURL + movie.poster_path

                // image.addEventListener("click", showMovie(movie))
                // try mouseover or hover

                // const divDetails = document.createElement('div')
                // divDetails.innerHTML = `
                // <h3> ${movie.vote_average}</h3>
                // <p> ${movie.overview}</p>
                // `
                let collection = document.querySelector("#movie-grid")
                collection.append(image, h2)
            })
        })
    }

    function nowPlaying(){
        const navNowPlaying = document.querySelector('.nowPlaying')
        navNowPlaying.addEventListener('click', showNowMovies)
    }
    function showNowMovies(){
        return fetch(nowPlayingURL)
        .then(function(resp){
            return resp.json()
        })
        .then(function(data){
            let movies = data.results;
            return movies.map(function(movie){
                let selection = document.querySelector("#now-movie-grid")
                let h1 = document.createElement('h1')
                let h2 = document.createElement('h2')
                let image = document.createElement('img')
                h1.innerText = "Now Playing:"
                h2.innerText = movie.original_title
                image.src= baseImageURL + movie.poster_path
        
                selection.append(h1)
                selection.append(image, h2)
            })
        })
    
    }








    

    function searchMovies(){
		//need to include query in url. (ex: &query=boss+baby)
		const searchMovieURL = apiBaseURL + 'search/movie?api_key=eacd0d5f3e163cc975fd29fceb3caf04&language=en-US&page=1&include_adult=false&query=' + searchTerm;
			// console.log(searchMovieURL);
		$.getJSON(searchMovieURL, function(movieSearchResults){
			// console.log(movieSearchResults);
			for (let i = 0; i<movieSearchResults.results.length; i++){
				var mid = movieSearchResults.results[i].id;
				var thisMovieUrl = apiBaseURL+'movie/'+mid+'/videos?api_key=' + apiKey;		

				$.getJSON(thisMovieUrl, function(movieKey){
					// console.log(movieKey)
					var poster = imageBaseUrl+'w300'+movieSearchResults.results[i].poster_path;
					var title = movieSearchResults.results[i].original_title;
					var releaseDate = movieSearchResults.results[i].release_date;
					var overview = movieSearchResults.results[i].overview;
					var voteAverage = movieSearchResults.results[i].vote_average;				
					var searchResultsHTML = '';
					searchResultsHTML += '<div class="col-sm-3 col-md-3 col-lg-3 eachMovie">';
						searchResultsHTML += '<button type="button" class="btnModal" data-toggle="modal" data-target="#exampleModal'+ i + '" data-whatever="@' + i + '">'+'<img src="'+poster+'"></button>'; 	
						searchResultsHTML += '<div class="modal fade" id="exampleModal' + i +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
							searchResultsHTML += '<div class="modal-dialog" role="document">';
								searchResultsHTML += '<div class="modal-content col-sm-12 col-lg-12">';
									searchResultsHTML += '<div class="col-sm-6 moviePosterInModal">';
										searchResultsHTML += '<a href="'+youtubeLink+'"><img src="'+poster+'"></a>'; 
									    searchResultsHTML += '</div><br>';//close trailerLink
									    searchResultsHTML += '<div class="col-sm-6 movieDetails">';
										searchResultsHTML += '<div class="movieName">'+title+'</div><br>';
										searchResultsHTML += '<div class="linkToTrailer"><a href="'+youtubeLink+'"><span class="glyphicon glyphicon-play"></span>&nbspPlay trailer</a>' + '</div><br>';	
										searchResultsHTML += '<div class="release">Release Date: '+releaseDate+'</div><br>';
										searchResultsHTML += '<div class="overview">' +overview+ '</div><br>';
										searchResultsHTML += '<div class="rating">Rating: '+voteAverage+ '/10</div><br>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">8:30 AM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">10:00 AM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">12:30 PM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">3:00 PM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">4:10 PM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">5:30 PM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">8:00 PM' + '</div>';
										searchResultsHTML += '<div class="col-sm-3 btn btn-primary">10:30 PM' + '</div>';
									searchResultsHTML += '</div>'; //close movieDetails
							searchResultsHTML += '</div>'; //close modal-dialog
						searchResultsHTML += '</div>'; //close modal
					searchResultsHTML += '</div>'; //close off each div
					// console.log(searchResultsHTML)
					$('#movie-grid').append(searchResultsHTML);
					//Label will be whatever user input was
					$('#movieGenreLabel').html(searchTerm);	
				})
			}
		})
	}


    init();
})

