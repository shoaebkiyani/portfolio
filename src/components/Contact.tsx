function Contact() {
	return (
		<div>
			<section className='w-[90%] mx-auto text-gray-100 border-b border-sky-700'>
				<div>
					<h1 className='text-4xl text-sky-600 font-bold text-center py-4'>
						GET IN TOUCH
					</h1>
					<h1 className='text-3xl mt-[-74px] font-bold text-center py-4 tracking-widest'>
						GET IN TOUCH
					</h1>
				</div>

				<div className='h-full p-10 shadow-lg'>
					<div className='w-48 mx-auto mb-2 text-center font-normal bg-gray-300 bg-opacity-10 shadow-md py-2 underline underline-offset-2'>
						Contact Me
					</div>
					<div className='flex flex-wrap justify-around items-center p-4 mb-4 xs:justify-center xs:pl-0 xs:space-y-4 sm:space-y-4 xs:text-[12px] sm:text-sm border-sky-700 border-b'>
						<div className='flex justify-start items-center hover:scale-105 ease-in-out duration-300'>
							<img
								src='../assets/images/contact/phone-android-svgrepo-com.svg'
								alt='phone'
								className='h-14 w-14 xs:h-8'
							/>
							<a href='tel: +358466326182' title='Give me a call'>
								+358 46 632 6182
							</a>
						</div>
						<div className='flex justify-start items-center hover:scale-105 ease-in-out duration-300'>
							<img
								src='../assets/images/contact/email-part-2-svgrepo-com.svg'
								alt='email'
								className='h-14 w-14 p-2 xs:h-8'
							/>
							<a href='mailto:shoaebkiyani@yahoo.com' title='Send me an email'>
								shoaebkiyani@yahoo.com
							</a>
						</div>
					</div>
					<form
						name='contact'
						action='https://formsubmit.co/762fa0ff97e2be20dbcf38a2cca30d25'
						method='POST'
						data-netlify='true'
						className='h-full w-full shadow-lg space-y-4 flex flex-col items-center p-4'
					>
						<p className='w-48 text-center font-normal bg-gray-300 bg-opacity-10 shadow-md py-2 mb-4 underline underline-offset-2'>
							Send me a message
						</p>
						<div className='flex w-[90%] mx-auto justify-center items-center'>
							<input type='hidden' name='_captcha' value='false' />
							<input
								type='hidden'
								name='_next'
								value='https://shoaibkiyani.netlify.app/thankyou'
							/>
							<div className='w-full mr-1'>
								<input
									type='text'
									name='name'
									placeholder='your name'
									required
									className='bg-transparent w-full h-10 p-2 border-b-2 outline-none xs:text-[9px] sm:text-sm'
								/>
							</div>
							<div className='w-full ml-1'>
								<input
									type='email'
									name='email'
									placeholder='your email'
									required
									className='bg-transparent w-full h-10 p-2 border-b-2 outline-none xs:text-[9px] sm:text-sm'
								/>
							</div>
						</div>

						<div className='w-[90%] mx-auto'>
							<input
								type='text'
								name='subject'
								placeholder='subject'
								required
								className='bg-transparent w-full h-10 p-2 border-b-2 outline-none xs:text-[9px] sm:text-sm'
							/>
						</div>
						<div className='h-full w-[90%] border-b'>
							<textarea
								name='message'
								placeholder='your message...'
								rows={10}
								required
								className='bg-transparent p-2 w-full h-32 outline-none xs:text-[9px] sm:text-sm'
							></textarea>
						</div>
						<button
							className='w-[90%] h-10 bg-[#6495ED] font-bold text-gray-100 hover:scale-[102%] transform ease-in-out duration-300'
							type='submit'
						>
							send
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}
export default Contact;
