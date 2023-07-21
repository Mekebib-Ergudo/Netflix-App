const API = 'd33a0905eaacf4289d1bafc3b66d6536';

const urlComponent = {
	topRated: `/movie/top_rated?api_key=${API}&language=english&region=US`,
	netflixOrginals: `/discover/tv?api_key=${API}&with_networks=213`,
	trending: `/trending/all/week?api_key=${API}&language=english`,
	horrorMovies: `/discover/movie?api_key=${API}&primary_release_year=2023&with_genres=27`,
	actionMovies: `/discover/movie?api_key=${API}&primary_release_year=2023&with_genres=28`,
	comedyMovies: `/discover/movie?api_key=${API}&primary_release_year=2023&with_genres=35`,
	romanceMovies: `/discover/movie?api_key=${API}&primary_release_year=2023&with_genres=10749`,
	documentaries: `/discover/movie?api_key=${API}&primary_release_year=2023&with_genres=99`,
};

export default urlComponent;
