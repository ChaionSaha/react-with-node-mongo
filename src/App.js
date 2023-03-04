import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.scss';
import AddUser from './components/AddUser/AddUser';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
function App() {
	return (
		<div className='App'>
			<NavBar></NavBar>
			<Routes>
				<Route path='/' element={<Home></Home>} />
				<Route path='/user/add' element={<AddUser></AddUser>} />
			</Routes>
			<ToastContainer
				position='top-right'
				autoClose={3000}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				pauseOnHover={false}
				rtl={false}
				theme='colored'
			></ToastContainer>
		</div>
	);
}

export default App;
