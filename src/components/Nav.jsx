import React from "react";
import whiteLogo from "../assets/imgs/FireFilx.svg"
import "../assets/css/navCss.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePhoto from '../assets/imgs/regain.jpg'
import { Link } from "react-router-dom";

const Nav = () => {
	return (
		<nav id="nav">
			<div className="nav__logo__links--container">
				<img className="nav__logo" src={whiteLogo} alt="" />
				<div className="nav__links">
					<Link to="/" className="nav__link">Home</Link>
					<Link to="/search" className="nav__link">Movies</Link>
					<a href="https://www.google.com/" className="nav__link no_cursor">Series</a>
					<a href="/" className="nav__link no_cursor">Kids</a>
					<button>test me</button>
				</div>
			</div>
			<div>
				<FontAwesomeIcon icon="fa-solid fa-x" />
				<img className="nav__profile--img" src={profilePhoto} alt="" />
			</div>
		</nav>
	);
};

export default Nav;
