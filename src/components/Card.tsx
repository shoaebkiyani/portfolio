interface IProps {
	projects: {
		id: number;
		imgURL: string;
		gitURL: string;
		demoURL: string;
	}[];
}

function Card(props: IProps) {
	const { projects } = props;
	return (
		<div className='h-full flex flex-wrap gap-10 justify-center items-center p-4 shadow-lg'>
			{projects.map((project) => (
				<div
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
						</div>
					</div>
				</div>
			))}
		</div>
	);
}
export default Card;
