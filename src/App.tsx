import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';

import RootLayout from './layout/RootLayout';
import Home from './components/Home';
import Thankyou from './components/Thankyou';

import './App.css';

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path='/' element={<RootLayout />}>
			<Route index element={<Home />} />
			<Route path='thankyou' element={<Thankyou />} />
		</Route>
	)
);

function App() {
	return (
		<main>
			<RouterProvider router={router} />
		</main>
	);
}

export default App;
