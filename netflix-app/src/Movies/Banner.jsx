import React, { useEffect, useState } from 'react';
import './Banner.css';
import axios from './axios';
const base_url = 'https://image.tmdb.org/t/p/original/';
const Banner = ({ urlComponent }) => {
	const [movie, setMovie] = useState([]);

	const fetchMovie = async () => {
		try {
			const response = await axios.get(urlComponent.netflixOrginals);
			const value = response.data.results;
			const valueLength = value.length;
			const randomNumber = Math.floor(Math.random() * valueLength);
			setMovie(value[randomNumber]);
			// console.log(value[randomNumber]);
		} catch (error) {
			console.log(error.response);
		}
	};

	useEffect(() => {
		fetchMovie();
	}, []);
	// Header style
	const styleBanner = {
		backgroundSize: 'cover',
		backgroundImage: `url(${base_url + movie?.backdrop_path})`,
		backgroundPosition: 'center',
	};
	//  text shorten
	const truncate = (str, n) => {
		return str?.length > n ? str.substr(0, n - 1) + '...' : str;
	};
	return (
		<header className="banner" style={styleBanner}>
			<div className="banner__contents">
				<h1 className="banner__title">
					{movie?.title || movie?.name || movie.orginal_name}
				</h1>
				<div className="banner__buttons">
					<button className="banner__button">Play</button>
					<button className="banner__button">My List</button>
				</div>
				<h1 className="banner_desc">{truncate(movie?.overview, 150)}</h1>
			</div>
			<div className="banner__fadeBottom"></div>
		</header>
	);
};

export default Banner;
