import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.scss';

const NavBar = () => {
	return (
		<div className='navbar'>
			<NavLink to='/'>Home</NavLink>
			<NavLink to='/user/add'>Add user</NavLink>
		</div>
	);
};

export default NavBar;
