import { useEffect, useState } from 'react';
import './Movies.css';
import axios from './axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';
const base_url = 'https://image.tmdb.org/t/p/original/';
const Movies = ({ title, url, isLarge }) => {
	const [movies, setMovies] = useState([]);
	const [trailerUrl, setTrailerUrl] = useState('');

	const fetchMovies = async () => {
		try {
			const response = await axios.get(url);
			let value = response.data.results;
			setMovies(value);
		} catch (error) {
			console.log(error.response);
		}
	};
	useEffect(() => {
		fetchMovies();
	}, []);
	const opts = {
		height: '390',
		width: '100%',
		playerVars: {
			autoplay: 1,
		},
	};
	const handelChange = (movie) => {
		if (trailerUrl) {
			setTrailerUrl('');
		} else {
			movieTrailer(movie?.title || movie?.name || movie?.original_name)
				.then((url) => {
					const urlParams = new URLSearchParams(new URL(url).search);
					setTrailerUrl(urlParams.get('v'));
				})
				.catch((error) => console.log(error));
		}
	};
	return (
		<div className="row">
			<h1>{title}</h1>
			<div className="row__posters">
				{movies?.map((movie) => {
					const { poster_path, name, backdrop_path } = movie;
					return (
						<img
							onClick={() => handelChange(movie)}
							className={isLarge ? 'row__large + row__poster' : 'row__poster'}
							key={name}
							src={isLarge ? base_url + poster_path : base_url + backdrop_path}
							alt={name}
						/>
					);
				})}
			</div>
			<div style={{ padding: '40px' }}>
				{trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
			</div>
		</div>
	);
};

export default Movies;
