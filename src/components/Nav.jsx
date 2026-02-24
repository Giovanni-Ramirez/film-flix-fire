import React from "react";
import whiteLogo from "../assets/imgs/FireFilx.svg"
import "../assets/css/navCss.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profilePhoto from '../assets/imgs/regain.jpg'

const Nav = () => {
	return (
		<nav id="nav">
			<div className="nav__logo__links--container">
				<img className="nav__logo" src={whiteLogo} alt="" />
				<div className="nav__links">
					<a href="/" className="nav__link">Home</a>
					<a href="/" className="nav__link">Movies</a>
					<a href="/" className="nav__link">Series</a>
					<a href="/" className="nav__link">Kids</a>
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
