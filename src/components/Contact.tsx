import ContactForm from './ContactForm';

function Contact() {
	return (
		<div id='contact' className='min-h-[calc(100vh-56px)] bg-gray-800'>
			<section className='w-[90%] mx-auto text-gray-100 border-b border-sky-700 py-6'>
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
					<ContactForm />
				</div>
			</section>
		</div>
	);
}
export default Contact;
