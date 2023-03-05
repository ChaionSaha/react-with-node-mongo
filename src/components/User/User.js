import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import './User.scss';

const User = ({ user }) => {
	return (
		<div className='user'>
			<h1 className='name'>
				Name: {user.firstName} {user.lastName}
			</h1>
			<p className='email'>Email: {user.email}</p>
			<p className='phone'>Phone: {user.mobile}</p>
			<div className='btns'>
				<Link to={`/user/${user._id}`}>
					<PencilSquareIcon></PencilSquareIcon>
				</Link>
				<TrashIcon></TrashIcon>
			</div>
		</div>
	);
};

export default User;
