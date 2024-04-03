import { motion } from 'framer-motion';

const skills = [
	{
		id: 1,
		title: 'HTML5',
		imgURL: '../assets/images/techs/html-5-svgrepo-com.svg',
	},
	{
		id: 2,
		title: 'CSS3',
		imgURL: '../assets/images/techs/css-3-svgrepo-com.svg',
	},
	{
		id: 3,
		title: 'SCSS',
		imgURL: '../assets/images/techs/scss-svgrepo-com.svg',
	},
	{
		id: 4,
		title: 'Tailwind',
		imgURL: '../assets/images/techs/tailwind-svgrepo-com.svg',
	},
	{
		id: 5,
		title: 'JS',
		imgURL: '../assets/images/techs/javascript-svgrepo-com.svg',
	},
	{
		id: 6,
		title: 'TS',
		imgURL: '../assets/images/techs/typescript-logo-svgrepo-com.svg',
	},
	{
		id: 7,
		title: 'ReactJS',
		imgURL: '../assets/images/techs/react-svgrepo-com.svg',
	},

	{
		id: 8,
		title: 'NodeJS',
		imgURL: '../assets/images/techs/nodejs-logo-svgrepo-com.svg',
	},
	{
		id: 9,
		title: 'ExpressJS',
		imgURL: '../assets/images/techs/express-svgrepo-com.svg',
	},
	{
		id: 10,
		title: 'Java',
		imgURL: '../assets/images/techs/java-logo-svgrepo-com.svg',
	},
	{
		id: 11,
		title: 'Springboot',
		imgURL: '../assets/images/techs/springio-ar21.svg',
	},
	{
		id: 12,
		title: 'MongoDB',
		imgURL: '../assets/images/techs/mongodb-svgrepo-com.svg',
	},
	{
		id: 13,
		title: 'PostgreSQL',
		imgURL: '../assets/images/techs/postgresql-svgrepo-com.svg',
	},
	{
		id: 14,
		title: 'AWS',
		imgURL: '../assets/images/techs/aws-svgrepo-com.svg',
	},
];

function Skills() {
	const fadeInAnimationVariants = {
		initial: {
			opacity: 0,
			y: 100,
		},
		animate: (index: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: 0.15 * index,
				duration: 0.75,
			},
		}),
	};
	return (
		<div id='skills' className='bg-gray-100'>
			<section className='min-h-screen w-[90%] mx-auto py-6'>
				<div>
					<h1 className='text-4xl font-bold text-gray-500 text-center py-4'>
						My Skills
					</h1>
					<h1 className='text-3xl mt-[-72px] font-bold text-center py-4 tracking-widest'>
						My Skills
					</h1>
				</div>
				<p className='text-center font-normal bg-gray-300 bg-opacity-10 shadow-md py-2 mb-4'>
					Here are few of the skills I posses...
				</p>
				<div className='flex flex-wrap gap-12 py-4 justify-center items-center'>
					{skills.map((skill, index) => (
						<motion.div
							variants={fadeInAnimationVariants}
							initial='initial'
							whileInView='animate'
							viewport={{ once: true }}
							custom={index}
							className='h-full'
							key={skill.id}
						>
							<img
								src={skill.imgURL}
								alt='skills'
								className='h-36 w-36 sm:h-28 sm:w-28 xs:h-24 xs:w-24'
							/>
						</motion.div>
					))}
				</div>
			</section>
		</div>
	);
}
export default Skills;
