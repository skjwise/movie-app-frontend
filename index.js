// document.addEventListener("DOMContentLoaded", ()=>{
    const apibaseURL = "https://api.themoviedb.org/3/movie/popular?api_key=eacd0d5f3e163cc975fd29fceb3caf04&language=en-US&page=1"
//     const imagebaseURL = `https://api.themoviedb.org/3/movie/${image.id}/images?api_key=eacd0d5f3e163cc975fd29fceb3caf04&language=en-US`

//     function init(){
//         renderMovies();
//     }
//     function fetchMovies(){
//         return fetch(apibaseURL)
//         .then(function(response){
//             return response.json()
//         })
//     }
//     function renderMovies(){
//         fetchMovies()
//         .then(function(data){
//             let movies = data.results;
//                 return movies.map(function(movie){
//                 let h2 = document.createElement('h2')
//                 let image = document.createElement('img')
//                 h2.innerText = movie.original_title
//                 image.src=movie.poster_path
//                 image.src="https://images-na.ssl-images-amazon.com/images/I/81OWxI%2Bq8QL._SY679_.jpg"

//                 img.addEventListener("click", showMovie(movie))
//                 try mouseover

//                 let collection = document.querySelector("#movie-collection")
//                 collection.append(image, h2)
//             })
//         })
//     }
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
//     init();
// })

document.addEventListener("DOMContentLoaded", () => {
    const apiBaseURL = "https://api.themoviedb.org/3/"
    const apiKey = "eacd0d5f3e163cc975fd29fceb3caf04"
    const nowPlayingURL = apiBaseURL + 'movie/now_playing?api_key=' + apiKey;

    function getNowPlayingData(){
		$.getJSON(nowPlayingURL, function(nowPlayingData){
			// console.log(nowPlayingData);
			//we needed to add .results because nowPlayingData is an array.
			for(let i = 0; i<nowPlayingData.results.length; i++){
				// w300 is how wide it is
				var mid = nowPlayingData.results[i].id;
				// mid = movie ID
				var thisMovieUrl = apiBaseURL+'movie/'+mid+'/videos?api_key=' + apiKey;
				// console.log(i)

				$.getJSON(thisMovieUrl, function(movieKey){
					// console.log(i);
					// console.log(thisMovieUrl)
					// console.log(movieKey)

					//Need to go to that specific movie's URL to get the genres associated with it. (movieKey.id)
					// var getGenreNameUrl = apiBaseURL + 'movie/' +movieKey.id+ '?api_key=' + apiKey;
					// console.log(getGenreNameUrl);
					// console.log(movieKey.id);

					// $.getJSON(getGenreNameUrl, function(genreNames){
					// 	// console.log(genreNames);//an object
					// 	// console.log(genreNames.genres[0].name);

					// 	for (let j=0; j<genreNames.genres.length; j++){
					// 		var genre = genreNames.genres[0].name;
					// 		// console.log(genre);
					// 	}
					// })

					var poster = imageBaseUrl+'w300'+nowPlayingData.results[i].poster_path;
					// console.log(poster);

					var title = nowPlayingData.results[i].original_title;

					var releaseDate = nowPlayingData.results[i].release_date;

					var overview = nowPlayingData.results[i].overview;
					// $('.overview').addClass('overview');

					var voteAverage = nowPlayingData.results[i].vote_average;				
					// console.log(movieKey)
					var youtubeKey = movieKey.results[0].key;

					var youtubeLink = 'https://www.youtube.com/watch?v='+youtubeKey;
					// console.log(youtubeLink)

					var nowPlayingHTML = '';
					// added in i to nowPlayingHTML. Without it, only the details for the first movie in the results display in the modal no matter which movie poster you click on.
					nowPlayingHTML += '<div class="col-sm-3 eachMovie">';
						nowPlayingHTML += '<button type="button" class="btnModal" data-toggle="modal" data-target="#exampleModal'+ i + '" data-whatever="@' + i + '">'+'<img src="'+poster+'"></button>'; 	
						nowPlayingHTML += '<div class="modal fade" id="exampleModal' + i +'" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">';
							nowPlayingHTML += '<div class="modal-dialog" role="document">';
								nowPlayingHTML += '<div class="modal-content col-sm-12">';
									nowPlayingHTML += '<div class="col-sm-6 moviePosterInModal">';
										nowPlayingHTML += '<a href="'+youtubeLink+'"><img src="'+poster+'"></a>'; 
									nowPlayingHTML += '</div><br>';//close trailerLink
									nowPlayingHTML += '<div class="col-sm-6 movieDetails">';
										nowPlayingHTML += '<div class="movieName">'+title+'</div><br>';
										nowPlayingHTML += '<div class="linkToTrailer"><a href="'+youtubeLink+'"><span class="glyphicon glyphicon-play"></span>&nbspPlay trailer</a>' + '</div><br>';	
										nowPlayingHTML += '<div class="release">Release Date: '+releaseDate+'</div><br>';
										// nowPlayingHTML += '<div class="genre">Genre: '+genre+'</div><br>';
										nowPlayingHTML += '<div class="overview">' +overview+ '</div><br>';// Put overview in a separate div to make it easier to style
										nowPlayingHTML += '<div class="rating">Rating: '+voteAverage+ '/10</div><br>';
										nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">8:30 AM' + '</div>';
										nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">10:00 AM' + '</div>';
										nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">12:30 PM' + '</div>';
										nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">3:00 PM' + '</div>';
										nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">4:10 PM' + '</div>';
										nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">5:30 PM' + '</div>';
										nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">8:00 PM' + '</div>';
										nowPlayingHTML += '<div class="col-sm-3 btn btn-primary">10:30 PM' + '</div>';
									nowPlayingHTML += '</div>'; //close movieDetails
								nowPlayingHTML += '</div>'; //close modal-content
							nowPlayingHTML += '</div>'; //close modal-dialog
						nowPlayingHTML += '</div>'; //close modal
					nowPlayingHTML += '</div>'; //close off each div

					$('#movie-grid').append(nowPlayingHTML);
					//Without this line, there is nowhere for the posters and overviews to display so it doesn't show up 
					$('#movieGenreLabel').html("Now Playing");
					//h1 will change depending on what is clicked. Will display "Now Playing" in this case.
				})
			}
		}) 
	}
    // call getMoviesByGenre using click function but call getNowPlayingData on default.
    getNowPlayingData();





})