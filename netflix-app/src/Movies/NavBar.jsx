import React, { useEffect, useState } from 'react';
import './NavBar.css';
const NavBar = () => {
	const [show, handleShow] = useState(false);
	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else {
				handleShow(false);
			}
			return () => {
				window.removeEventListener('scroll');
			};
		});
	}, []);
	return (
		<div className={`nav ${show && 'nav__black'}`}>
			<img
				className="nav__logo"
				src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
				alt=""
			/>
			<img
				className="nav__avatar"
				src="https://cdn-icons-png.flaticon.com/512/700/700674.png"
				alt=""
			/>
		</div>
	);
};

export default NavBar;
