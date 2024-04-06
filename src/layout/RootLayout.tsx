import { Analytics } from '@vercel/analytics/react';

import { useState, useEffect } from 'react';

import { Outlet } from 'react-router-dom';

function RootLayout() {
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(!isLoading);
	}, []);
	return (
		<div>
			<main>
				{!isLoading ? (
					<div className='h-screen w-full absolute text-center bg-gray-800 z-50 text-white text-3xl font-bold'>
						<h1 className='h-[47.6rem] flex justify-center items-center'>
							<div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-[#6495ED]'></div>
						</h1>
					</div>
				) : (
					<Outlet />
				)}
				<Analytics />
			</main>
		</div>
	);
}
export default RootLayout;
