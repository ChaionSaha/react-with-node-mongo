import React from 'react';
import { toast } from 'react-toastify';
import './AddUser.scss';

const AddUser = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		const firstName = e.target.firstName.value;
		const lastName = e.target.lastName.value;
		const email = e.target.email.value;
		const mobile = e.target.phone.value;

		const user = { firstName, lastName, email, mobile };

		fetch('http://localhost:5000/user', {
			method: 'post',
			headers: {
				'content-type': 'application/json',
			},

			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);

				if (data?.insertedId) {
					toast.success('User added');
					e.target.reset();
				}
			});
	};
	return (
		<div className='add-user'>
			<h2>Add user</h2>
			<form onSubmit={handleSubmit}>
				<div className='name'>
					<input
						type='text'
						name='firstName'
						placeholder='First Name'
					/>
					<input
						type='text'
						name='lastName'
						placeholder=' Last Name'
					/>
				</div>
				<input type='email' name='email' placeholder='Email' />
				<input type='tel' name='phone' placeholder='Phone' />
				<input type='submit' value='Add user' />
			</form>
		</div>
	);
};

export default AddUser;
