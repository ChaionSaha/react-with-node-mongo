import React, { useState } from 'react';
import User from '../User/User';
import './Home.scss';

const Home = () => {
	const [users, setUsers] = useState([]);
	fetch('http://localhost:5000/users')
		.then((res) => res.json())
		.then((data) => setUsers(data));
	return (
		<div className='home'>
			<h1>Total user: {users.length} </h1>
			<div className='users'>
				{users.map((user) => (
					<User key={user._id} user={user}></User>
				))}
			</div>
		</div>
	);
};

export default Home;
