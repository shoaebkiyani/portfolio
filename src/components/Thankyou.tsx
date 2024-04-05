import { Link } from 'react-router-dom';

function Thankyou() {
	return (
		<main
			id='thankyou'
			className='flex flex-col justify-center items-center text-center text-gray-100 min-h-[calc(100vh-56px)] bg-gray-800 bg-opacity-4'
		>
			<h1 className='text-[2rem]'>Thank you for your message.</h1>
			<h2 className='text-[1rem] mb-2'>I will get back to you soon</h2>
			<Link
				to='/'
				className='flex justify-center items-center text-[1rem] p-2 h-10 rounded-md bg-[#6495ED] font-bold text-gray-100 hover:scale-[102%] transform ease-in-out duration-300'
			>
				Back to Home
			</Link>
		</main>
	);
}
export default Thankyou;
