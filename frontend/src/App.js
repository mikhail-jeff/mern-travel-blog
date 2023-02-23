import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diaries from './pages/Diaries';
import Auth from './pages/Auth';
import { useSelector } from 'react-redux';
import Add from './pages/Add';
import Profile from './pages/Profile';
import Update from './pages/Update';

function App() {
	const isLoggedIn = useSelector((state) => state.isLoggedIn);
	console.log(isLoggedIn);

	return (
		<div>
			<header>
				<Header />
			</header>

			<section>
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/diaries'
						element={<Diaries />}
					/>
					<Route
						path='/auth'
						element={<Auth />}
					/>
					<Route
						path='/add'
						element={<Add />}
					/>
					<Route
						path='/profile'
						element={<Profile />}
					/>
					<Route
						path='/post/:id'
						element={<Update />}
					/>
				</Routes>
			</section>
		</div>
	);
}

export default App;
