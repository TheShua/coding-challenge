import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
	return (
		<nav>
			<ul>
				<NavLink to="/">
					<li>Home</li>
				</NavLink>
				<NavLink to="/temperature">
					<li>Temperature</li>
				</NavLink>
				<NavLink to="/customize-image">
					<li>Customize Image</li>
				</NavLink>
			</ul>
		</nav>
	);
};

export default Header;
