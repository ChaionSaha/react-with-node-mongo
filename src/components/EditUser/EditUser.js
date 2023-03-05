import React, { useEffect, useRef, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import './EditUser.scss';

const EditUser = () => {
	const { id } = useParams();
	const [user, setUser] = useState({});
	const formRef = useRef();
	const navigate = useNavigate();

	useEffect(() => {
		fetch(`http://localhost:5000/user/${id}`, {})
			.then((res) => res.json())
			.then((data) => {
				setUser(data);
				formRef.current.firstName.value = data.firstName;
				formRef.current.lastName.value = data.lastName;
				formRef.current.email.value = data.email;
				formRef.current.phone.value = data.mobile;
			});
	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		const firstName = e.target.firstName.value;
		const lastName = e.target.lastName.value;
		const email = e.target.email.value;
		const mobile = e.target.phone.value;

		const user = { firstName, lastName, email, mobile };

		fetch(`http://localhost:5000/user/${id}`, {
			method: 'put',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.matchedCount > 0) {
					toast.success('User updated');
					navigate('/');
				}
			});
	};
	return (
		<div className='edit-user'>
			<h2>Edit user</h2>
			<form onSubmit={handleSubmit} ref={formRef}>
				<div className='name'>
					<input
						type='text'
						name='firstName'
						placeholder='firstName'
					/>
					<input type='text' name='lastName' placeholder='lastName' />
				</div>
				<input type='email' name='email' placeholder='email ' />
				<input type='tel' name='phone' placeholder='mobile' />
				<div className='btns'>
					<input type='submit' value='Save' />
					<Link to='/'>Cancel</Link>
				</div>
			</form>
		</div>
	);
};

export default EditUser;
