function ContactForm() {
	return (
		<section>
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
				<div className='flex w-full justify-start items-center'>
					<input type='hidden' name='_captcha' value='false' />
					<input
						type='hidden'
						name='_next'
						value='https://shoaibkiyani.netlify.app/thankyou'
						// value='http://localhost:5173/thankyou'
					/>
					<div className='input-data w-full mr-1'>
						<input
							type='text'
							id='name'
							name='name'
							required
							autoComplete='true'
							className='bg-transparent w-full h-10 p-2 border-b-2 outline-none xs:text-[9px] sm:text-sm'
						/>
						<div className='underline-data'></div>
						<label
							htmlFor='name'
							className='text-gray-400 text-md xs:text-[9px] sm:text-sm autofill:bg-gray-800'
						>
							name*
						</label>
					</div>
					<div className='input-data w-full ml-1'>
						<input
							type='email'
							id='email'
							name='email'
							required
							autoComplete='true'
							className='bg-transparent w-full h-10 p-2 border-b-2 outline-none xs:text-[9px] sm:text-sm'
						/>
						<div className='underline-data'></div>
						<label
							htmlFor='email'
							className='text-gray-400 text-md xs:text-[9px] sm:text-sm'
						>
							name@example.com*
						</label>
					</div>
				</div>

				<div className='input-data w-full'>
					<input
						type='text'
						id='subject'
						name='subject'
						required
						autoComplete='true'
						className='bg-transparent w-full h-10 p-2 border-b-2 outline-none xs:text-[9px] sm:text-sm'
					/>
					<div className='underline-data'></div>
					<label
						htmlFor='subject'
						className='text-gray-400 text-md xs:text-[9px] sm:text-sm'
					>
						subject*
					</label>
				</div>
				<div className='input-data text-area h-full w-full'>
					<textarea
						id='message'
						name='message'
						rows={10}
						required
						className='bg-transparent p-2 w-full h-32 outline-none xs:text-[9px] sm:text-sm'
					></textarea>
					<div className='underline-data'></div>
					<label
						htmlFor='message'
						className='text-gray-400 text-md xs:text-[9px] sm:text-sm'
					>
						your message ...*
					</label>
				</div>
				<button
					className='w-full h-10 bg-[#6495ED] font-bold text-gray-100 hover:scale-[102%] transform ease-in-out duration-300'
					type='submit'
				>
					send
				</button>
			</form>
		</section>
	);
}
export default ContactForm;
