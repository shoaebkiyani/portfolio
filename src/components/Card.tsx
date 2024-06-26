import { motion } from 'framer-motion';

interface IProps {
	projects: {
		id: number;
		imgURL: string;
		gitURL: string;
		demoURL: string;
		videoLink?: string;
	}[];
}

function Card(props: IProps) {
	const { projects } = props;

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
		<div className='h-full flex flex-wrap gap-10 justify-center items-center p-4 shadow-lg'>
			{projects.map((project, index) => (
				<motion.div
					variants={fadeInAnimationVariants}
					initial='initial'
					whileInView='animate'
					viewport={{ once: true }}
					custom={index}
					className='h-80 w-64 xs:w-full sm:w-full bg-zinc-900 shadow-md rounded-md text-gray-100'
					key={project.id}
				>
					<div className='h-full w-full rounded-md' key={project.id}>
						<img
							src={project.imgURL}
							alt='project'
							className='relative h-[85%] xs:w-full sm:w-full rounded-t-md transition hover:scale-[101%] ease-linear duration-500'
						/>
						<div className='flex justify-around items-center h-[15%] w-full'>
							<a
								href={project.gitURL}
								target='_blank'
								className='h-full w-full flex justify-center items-center rounded-bl-md underline underline-offset-4 decoration-1 border border-gray-600 transition-all ease-in-out duration-700 hover:scale-90 cursor-pointer'
							>
								GITHUB
							</a>
							<a
								href={project.demoURL}
								target='_blank'
								className='h-full w-full flex justify-center items-center rounded-br-md underline underline-offset-4 decoration-1 border border-gray-500 transition-all ease-in-out duration-700 hover:scale-90 cursor-pointer'
							>
								DEMO
							</a>
							{project?.videoLink !== '' && (
								<a
									href={project.videoLink}
									target='_blank'
									className='h-full w-full flex justify-center items-center rounded-br-md underline underline-offset-4 decoration-1 border border-gray-500 transition-all ease-in-out duration-700 hover:scale-90 cursor-pointer'
								>
									Video
								</a>
							)}
						</div>
					</div>
				</motion.div>
			))}
		</div>
	);
}
export default Card;
