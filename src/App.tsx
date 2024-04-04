import { useEffect, useState } from 'react';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import { animateScroll } from 'react-scroll';

import './App.css';
import Navbar from './components/Navbar';

function App() {
	let currentYear = new Date().getFullYear();

	const [backToTopButon, setBackToTopButton] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setBackToTopButton(true);
			} else {
				setBackToTopButton(false);
			}
		});
	}, []);

	const scrollToTop = () => {
		animateScroll.scrollToTop();
	};

	return (
		<div>
			<Navbar />
			<main>
				<section id='home'>
					<Home />
				</section>
				<section id='about'>
					<About />
				</section>
				<section id='projects'>
					<Projects />
				</section>
				<section id='skills'>
					<Skills />
				</section>
				<section id='contact'>
					<Contact />
				</section>
			</main>
			<footer
				id='main-footer'
				className='flex justify-center items-center h-48 bg-gray-800 text-white text-center shadow-lg'
			>
				Copyright &copy;
				{currentYear}
			</footer>
			{backToTopButon && (
				<div className='bg-[#6495ED] hover:bg-blue-500 font-semibold text-center rounded-full h-10 w-10 fixed bottom-6 right-4 cursor-pointer'>
					<button className='sticky mt-3' onClick={scrollToTop}>
						<img
							src='../assets/images/arrow/double-up-arrow-svgrepo-com.svg'
							alt='scrollUp'
							className='w-3 h-3 hover:fill-white'
						/>
					</button>
				</div>
			)}
		</div>
	);
}

export default App;
