import { useEffect, useState } from 'react';

import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

import Logo from './assets/images/bg/nav-logo.png';

import { Link, animateScroll } from 'react-scroll';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { FiHome } from 'react-icons/fi';
import { BsPeople } from 'react-icons/bs';
import { MdOutlineContactPhone, MdOutlineWorkHistory } from 'react-icons/md';
import { GiSkills } from 'react-icons/gi';

import './App.css';

function App() {
	let currentYear = new Date().getFullYear();
	const [navState, setNavState] = useState(false);
	const menuItems = [
		{
			id: 1,
			title: 'home',
			menuIcon: <FiHome />,
		},
		{
			id: 2,
			title: 'about',
			menuIcon: <BsPeople />,
		},
		{
			id: 3,
			title: 'projects',
			menuIcon: <MdOutlineWorkHistory />,
		},
		{
			id: 4,
			title: 'skills',
			menuIcon: <GiSkills />,
		},
		{
			id: 5,
			title: 'contact',
			menuIcon: <MdOutlineContactPhone />,
		},
	];

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
			<header className='sticky top-[-4px] w-full bg-gray-800 text-gray-100 z-10'>
				<nav className='flex justify-between items-center w-[90%] mx-auto h-14'>
					<div className='flex space-x-2 h-5 rounded-full'>
						<img src={Logo} alt='logo' />
						<h2 className='font-bold'>KIYANI</h2>
					</div>
					<ul className='flex space-x-4 xs:hidden sm:hidden'>
						{menuItems.map((menu) => (
							<li className='cursor-pointer hover:underline' key={menu.id}>
								<Link
									activeClass='active'
									smooth
									spy
									to={menu.title}
									key={menu.id}
									offset={-57.75}
								>
									{menu.title.toUpperCase()}
								</Link>
							</li>
						))}
					</ul>

					{/* Menu Bars */}
					<div
						onClick={() => setNavState(!navState)}
						className='cursor-pointer text-white md:hidden'
					>
						<AiOutlineMenu size={30} />
					</div>

					{/* Side Drawer */}
					<div
						className={
							navState
								? 'fixed top-0 right-0 w-[300px] h-screen bg-slate-200 z-10 duration-300'
								: 'fixed top-0 right-[-100%] w-[300px] h-screen bg-slate-200 z-10 duration-300'
						}
					>
						<AiOutlineClose
							size={30}
							onClick={() => setNavState(!navState)}
							className='absolute left-4 top-4 cursor-pointer text-black'
						/>
						<nav>
							<ul className='flex flex-col mt-14 mx-8 p-4 text-gray-800'>
								{menuItems.map((menu) => (
									<li
										className='cursor-pointer hover:underline py-4 flex flex-col text-xl'
										key={menu.id}
									>
										<Link
											className='flex justify-center items-center'
											activeClass='active'
											smooth
											spy
											to={menu.title}
											key={menu.id}
											offset={-57.75}
										>
											{menu.menuIcon}
											<div className='pl-4'>{menu.title.toUpperCase()}</div>
										</Link>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</nav>
			</header>
			<main>
				<section
					id='home'
					className='min-h-[calc(100vh-56px)] flex items-end bg-gray-800 bg-opacity-45 py-14'
				>
					<Home />
				</section>
				<section
					id='about'
					className='min-h-[calc(100vh-56px)] py-14 bg-gray-100'
				>
					<About />
				</section>
				<section
					id='projects'
					className='min-h-[calc(100vh-56px)] bg-gray-800 py-14'
				>
					<Projects />
				</section>
				<section
					id='skills'
					className='min-h-[calc(100vh-56px)]
					bg-gray-100 py-14'
				>
					<Skills />
				</section>
				<section
					id='contact'
					className='min-h-[calc(100vh-56px)]
					bg-gray-800 pt-14'
				>
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
							src='../src/assets/images/arrow/double-up-arrow-svgrepo-com.svg'
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
