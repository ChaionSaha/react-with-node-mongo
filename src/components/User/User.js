import { PencilSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import './User.scss';

const User = ({ user, allUsers, setUsers }) => {
	const handleUserDelete = (id) => {
		console.log('deleting user', id);

		fetch(`http://localhost:5000/userDelete/${id}`)
			.then((res) => res.json())
			.then((data) => {
				if (data.deletedCount > 0) {
					let updatedUsers = allUsers.filter(
						(user) => user._id != id
					);
					setUsers(updatedUsers);
					toast.success(`User: ${user.firstName} deleted`);
				}
			});
	};

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
				<TrashIcon
					onClick={() => handleUserDelete(user._id)}
				></TrashIcon>
			</div>
		</div>
	);
};

export default User;
