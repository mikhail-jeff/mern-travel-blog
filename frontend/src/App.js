import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Diaries from './pages/Diaries';
import Auth from './pages/Auth';

function App() {
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
				</Routes>
			</section>
		</div>
	);
}

export default App;
