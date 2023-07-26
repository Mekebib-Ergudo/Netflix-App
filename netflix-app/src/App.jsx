import './App.css';
import Banner from './Movies/Banner';
import Movies from './Movies/Movies';
import NavBar from './Movies/NavBar';
import urlComponent from './urlComponent';
function App() {
	const {
		netflixOrginals,
		trending,
		topRated,
		actionMovies,
		comedyMovies,
		horrorMovies,
		romanceMovies,
		documentaries,
	} = urlComponent;
	return (
		<div className="all">
			<NavBar />
			<Banner urlComponent={urlComponent} />
			<Movies title="NETFLIX ORGINALS" url={netflixOrginals} isLarge={true} />
			<Movies title="Trading Now" url={trending} />
			<Movies title="Top Rated" url={topRated} />
			<Movies title="Action Movies" url={actionMovies} />
			<Movies title="Comedy Movies" url={comedyMovies} />
			<Movies title="Horror Movies" url={horrorMovies} />
			<Movies title="Romance Movies" url={romanceMovies} />
			<Movies title="Documentaries" url={documentaries} />
		</div>
	);
}

export default App;
