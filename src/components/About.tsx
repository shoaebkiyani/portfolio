function About() {
	return (
		<div className='w-[90%] mx-auto font-normal'>
			<section className='animate-slidedow'>
				<div>
					<h1 className='text-4xl text-gray-500 font-bold text-center py-4 transition-opacity ease-in duration-700'>
						About Me
					</h1>
					<h1 className='text-3xl mt-[-72px] tracking-widest font-bold text-center py-4 transition-opacity ease-in duration-700'>
						About Me
					</h1>
				</div>
				<p className='mb-4 text-justify transition-opacity ease-in duration-700 xs:text-sm'>
					I am a <b>Software Developer</b> with a passion for building
					interactive and user-friendly web applications. My professional path
					in web development began as a <b>Full Stack trainee</b> position at
					Opiframe Oy. Following its successful conclusion, I joined CySec Ice
					Wall Oy as a trainee and worked as a Cyber Security Data Analyst.
				</p>
				<p className='mb-4 text-justify xs:text-sm'>
					Recently, I completed my <b>Full Stack and Cloud Services</b> training
					through Integrify Academy, gaining expertise in various technologies
					such as{' '}
					<b>
						React, TypeScript, Tailwind, Java, Spring Boot, PostgreSQL, AWS, and
						much more.
					</b>
				</p>
				<p className='mb-4 text-justify xs:text-sm'>
					I am an enthusiastic, hardworking, and motivated professional who can
					work on challenging projects independently and in a team. I
					consistently maintain a strong desire to acquire new knowledge and
					enhance my personal and professional growth.
				</p>
				<p className='mb-2 font-semibold xs:text-sm'>Languages I can speak:</p>
				<div className='grid grid-flow-col w-[100%] mx-auto justify-around mb-4 text-justify'>
					<ul>
						<p className='underline underline-offset-2 decoration-from-font xs:text-sm'>
							Native
						</p>
						<li className='font-semibold xs:text-sm'>
							<p>URDU</p>
						</li>
						<li className='font-semibold xs:text-sm'>
							<p>PUNJABI</p>
						</li>
					</ul>
					<ul>
						<p className='underline underline-offset-2 decoration-from-font xs:text-sm'>
							Professional
						</p>
						<li className='font-semibold xs:text-sm'>
							<p>ENGLISH</p>
						</li>
					</ul>
					<ul>
						<p className='underline underline-offset-2 decoration-from-font xs:text-sm'>
							Conversational
						</p>
						<li className='font-semibold xs:text-sm'>
							<p>FINNISH</p>
						</li>
					</ul>
				</div>
				<p className='mb-4 text-justify xs:text-sm'>
					In my leisure hours, I enjoy traveling, hiking, and playing sports.
					Additionally, I have a passion for meeting new people and immersing
					myself in diverse cultures and traditions.
				</p>
				<p className='mb-4 text-justify xs:text-sm'>
					To know more about me:
					<a
						href='https://www.dropbox.com/scl/fi/o1klhn4wmqf49oeq379ud/Shoaib-Kiyani-Full-stack-developer.pdf?rlkey=yxrvwn8girokhriuvgzy9jlel&dl=0'
						target='_blank'
						className='bg-[#6495ED] text-gray-900 font-bold rounded-lg hover:bg-sky-700 hover:text-gray-100 border transition duration-500 ml-2 p-2 xs:text-[10px]'
					>
						View my CV
					</a>
				</p>
				<p className='mb-2 font-semibold xs:text-sm text-justify'>
					Certifications:
				</p>
				<div className='min-h-48 w-full mx-auto flex xs:flex-wrap sm:flex-wrap md:flex-wrap xs:gap-2 sm:gap-2 md:gap-4 lg:gap-6 xl:gap-8 justify-center items-center p-4 rounded-sm border border-gray-300 shadow-xl'>
					<a
						href='https://www.dropbox.com/scl/fi/qn3d0sxqxum2z7fgpxvgz/Shoaib-Kiyani-Integrify.pdf?rlkey=t46zql55wuabzw8gv8l0eq8lw&dl=0'
						target='_blank'
						className='min-h-32 xs:w-full sm:w-full flex flex-col justify-center items-center space-y-2 rounded-sm border-2 border-amber-700 bg-orange-500 shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-orange-400 duration-500'
					>
						<img
							src='./src/assets/images/logos/integrify_logo.jpg'
							alt='fitech-certificate'
							className='h-10 w-10 rounded-full'
						/>
						<div className='w-56 text-center font-normal'>
							Full Stack Development & Cloud Services (2023)
						</div>
					</a>
					<a
						href='https://openbadgefactory.com/v1/assertion/866f35fed9494d04a1b0eed33e6478cc22fd3bed'
						target='_blank'
						className='min-h-32 xs:w-full sm:w-full flex flex-col justify-center items-center rounded-sm border-2 border-green-700 bg-green-500 shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-green-400 duration-500 space-y-2'
					>
						<img
							src='./src/assets/images/logos/fitech_logo.png'
							alt='fitech-certificate'
							className='h-10 w-10 rounded-full'
						/>
						<div className='w-56 text-center font-normal'>
							Web Development & Programming (2021-22)
						</div>
					</a>
					<a
						href='https://openbadgefactory.com/v1/assertion/1cea68af2fafd68fb996cc00499232dce126ba78'
						target='_blank'
						className='min-h-32 xs:w-full sm:w-full flex flex-col justify-center items-center rounded-sm border-2 border-cyan-700 bg-cyan-500 shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-cyan-400 duration-500 space-y-2'
					>
						<img
							src='./src/assets/images/logos/fitech_logo.png'
							alt='fitech-certificate'
							className='h-10 w-10 rounded-full'
						/>
						<div className='w-56 text-center font-normal'>
							Software Development: Front-End (2021-22)
						</div>
					</a>
					<a
						href='https://openbadgefactory.com/v1/assertion/1cea68af2fafd68fb996cc00499232dce126ba78'
						target='_blank'
						className='min-h-32 xs:w-full sm:w-full flex flex-col justify-center items-center rounded-sm border-2 border-purple-700 bg-purple-500 shadow-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-90 hover:bg-purple-400 duration-500 space-y-2'
					>
						<img
							src='./src/assets/images/logos/opiframe_logo.png'
							alt='opiframe-certificate'
							className='h-10 w-10 rounded-full'
						/>
						<div className='w-56 text-center font-normal'>
							Software Development: Full Stack (2020-21)
						</div>
					</a>
				</div>
			</section>
		</div>
	);
}
export default About;
