function Thankyou() {
	return (
		<main
			id='thanks'
			className='flex flex-col justify-center items-center text-gray-100 min-h-[calc(100vh-56px)] bg-gray-800 bg-opacity-45 py-14'
		>
			<h1 className='text-[2.5rem]'>Thank you for your message.</h1>
			<h2 className='text-[1.75rem] mb-2'>I will get back to you soon</h2>
			<a
				href='./index.html'
				className='flex justify-center items-center text-[1.4rem] w-[40%] h-10 rounded-md bg-[#6495ED] font-bold text-gray-100 hover:scale-[102%] transform ease-in-out duration-300'
			>
				Back to Home
			</a>
		</main>
	);
}
export default Thankyou;