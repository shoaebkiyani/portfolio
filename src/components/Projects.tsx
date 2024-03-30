import Card from './Card';

function Projects() {
	const projects = [
		{
			id: 1,
			imgURL: '../assets/images/projects/e-commerce-project.png',
			gitURL: 'https://github.com/shoaebkiyani/shopping-app-v1.1',
			demoURL: 'https://techzoneapi.netlify.app/',
		},
		{
			id: 2,
			imgURL: '../assets/images/projects/portfolio_project.png',
			gitURL: 'https://github.com/shoaebkiyani/shoaib_portfolio',
			demoURL: 'https://shoaibsportfolio.netlify.app/',
		},
		{
			id: 3,
			imgURL: '../assets/images/projects/search_github.png',
			gitURL: 'https://github.com/shoaebkiyani/search-in-github',
			demoURL: 'https://finduserongithub.netlify.app/',
		},
		{
			id: 4,
			imgURL: '../assets/images/projects/magic_rules.png',
			gitURL: 'https://github.com/shoaebkiyani/magic_rules',
			demoURL: 'https://magicrules1191.netlify.app/',
		},
		{
			id: 5,
			imgURL: '../assets/images/projects/countries_project.png',
			gitURL: 'https://github.com/shoaebkiyani/countries_app',
			demoURL: 'https://searchcountries-app.netlify.app/',
		},
	];

	return (
		<div className='w-[90%] mx-auto text-gray-100'>
			<section>
				<div>
					<h1 className='text-4xl text-sky-600 font-bold text-center py-4'>
						My Projects
					</h1>
					<h1 className='text-3xl mt-[-72px] font-bold text-center py-4 tracking-widest'>
						My Projects
					</h1>
				</div>
				<p className='text-center font-normal bg-gray-300 bg-opacity-10 shadow-md py-2 mb-4'>
					Here are few of my projects...
				</p>
				<div className='py-4'>
					<Card projects={projects} />
				</div>
			</section>
		</div>
	);
}
export default Projects;
