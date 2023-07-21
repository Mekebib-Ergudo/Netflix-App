import './App.css';
import Banner from './Movies/Banner';
import Movies from './Movies/Movies';
import NavBar from './Movies/NavBar';
import urlComponent from './urlComponent';
function App() {
	return (
		<div className="all">
			<NavBar />
			<Banner urlComponent={urlComponent} />
			<Movies
				title="NETFLIX ORGINALS"
				url={urlComponent.netflixOrginals}
				isLarge={true}
			/>
			<Movies title="Trading Now" url={urlComponent.trending} />
			<Movies title="Top Rated" url={urlComponent.topRated} />
			<Movies title="Action Movies" url={urlComponent.actionMovies} />
			<Movies title="Comedy Movies" url={urlComponent.comedyMovies} />
			<Movies title="Horror Movies" url={urlComponent.horrorMovies} />
			<Movies title="Romance Movies" url={urlComponent.romanceMovies} />
			<Movies title="Documentaries" url={urlComponent.documentaries} />
		</div>
	);
}

export default App;
