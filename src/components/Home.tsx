import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-scroll';

import PortraitLG from '../assets/images/bg/bg-portrait-lg.png';
import PortraitSM from '../assets/images/bg/bg-portrait-sm.png';

function Home() {
	return (
		<main id='home' className='text-amber-100 min-h-screen w-full'>
			<div className='absolute min-h-screen w-full top-8 -z-10'>
				<div className='md:hidden'>
					<img
						className='h-[calc(100vh-33px)] sm:h-[calc(100vh+185px)] xs:h-[calc(100vh+165px)] w-full bg-cover bg-gray-800'
						src={PortraitSM}
						alt='hero-small'
					/>
				</div>
				<div className='sm:hidden'>
					<img
						className='min-h-screen md:h-[calc(100vh+140px)] w-full bg-cover bg-gray-800'
						src={PortraitLG}
						alt='hero-large'
					/>
				</div>
			</div>
			<div className='h-screen w-full mx-auto p-2 px-10 flex flex-col justify-end xs:items-center sm:items-center xs:text-sm bg-blend-multiply'>
				<span className='text-[#dcb02c] tracking-widest font-bold mb-2 animate-pulse'>
					Hello!
				</span>
				<h1 className='xs:text-xl xs:text-center sm:text-2xl sm:text-center md:text-4xl lg:text-5xl xl:text-6xl font-bold w-fit tracking-wide animate-slidein500'>
					I'm
					<span className='text-[#dcb02c]'> Shoaib Kiyani</span>
				</h1>
				<h2 className='sm:text-sm md:text-md xl:text-2xl font-semibold mt-[0.9rem] mb-[1rem] py-[0.1rem] tracking-wide animate-slidein300'>
					<div className='font-extrabold text-lg xs:text-sm sm:text-sm md:text-md [text-wrap:balance] bg-clip-text text-transparent bg-gradient-to-r from-slate-300/60 to-50% to-slate-200 xs:text-center sm:text-center'>
						A Full Stack Developer with the skills in
						<div className='sm:h-10'>
							<span className='text-indigo-500 inline-flex flex-col pl-2 h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] sm:h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] xs:h-[calc(theme(fontSize.2xl)*theme(lineHeight.tight))] overflow-hidden animate-slidein500'>
								<ul className='block animate-text-slide text-left xs:text-center sm:text-center leading-tight [&_li]:block bg-gradient-to-r from-rose-300 via-blue-100 to-amber-200 bg-clip-text text-transparent text-3xl sm:text-2xl xs:text-xl ml-[-9px]'>
									<li>MERN Stack</li>
									<li>TypeScript</li>
									<li>JAVA Springboot</li>
									<li>PostgreSQL</li>
									<li>AWS</li>
									<li aria-hidden='true'>MERN Stack</li>
								</ul>
							</span>
						</div>
					</div>
				</h2>
				<h2 className='flex items-center space-x-3 xs:text-sm md:text-lg font-semibold tracking-wide animate-slidein300'>
					Certified by:
					<img
						src='./src/assets/images/logos/integrify_logo.jpg'
						className='h-8 w-8 ml-2 rounded-full animate-slidein300'
						alt='certified'
					/>
					<img
						src='./src/assets/images/logos/fitech_logo.png'
						className='h-8 w-8 rounded-full animate-slidein500'
						alt='certified'
					/>
					<img
						src='./src/assets/images/logos/opiframe_logo.png'
						className='h-8 w-8 rounded-full animate-slidein700'
						alt='certified'
					/>
				</h2>
				<div className='flex space-x-3 mt-[1.9rem] mb-[2rem] xs:text-xl text-2xl md:text-4xl'>
					<a
						href='https://github.com/shoaebkiyani/'
						target='_blank'
						className='hover:text-[#dcb02c] duration-300 animate-slidein300'
					>
						<FaGithub size={30} />
					</a>
					<a
						href='https://www.linkedin.com/in/shoaib-kiyani-aa30b759/'
						target='_blank'
						className='hover:text-[#dcb02c] duration-300 animate-slidein500'
					>
						<FaLinkedin size={30} />
					</a>
				</div>
				<div className='flex flex-col justify-center xs:items-center sm:items-center space-y-3'>
					<div className='animate-wiggle hover:animate-none'>
						<Link
							activeClass='active'
							smooth
							spy
							to='contact'
							className='bg-[#dcb02c] text-gray-950 font-medium p-2 rounded-md hover:bg-[#fce48f] border cursor-pointer'
						>
							Hire Me
						</Link>
					</div>
					<div className='flex'>
						<Link
							activeClass='active'
							smooth
							spy
							to='projects'
							className='font-medium p-2 rounded-md text-[#dcb02c] hover:bg-[#ceec9a] hover:text-gray-900 border border-gray-400 duration-500 animate-slidein700 cursor-pointer'
						>
							MY PORTFOLIO
						</Link>
					</div>
				</div>
			</div>
		</main>
	);
}
export default Home;
