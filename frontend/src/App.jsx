import './App.css'
import { useEffect } from 'react'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import AfterHero from './components/AfterHero/AfterHero'
import { ScrollProvider } from './components/Util/ScrollProvider'
import { RefProvider } from './components/Util/RefContext'
import { isMobile, isTablet, isDesktop } from 'react-device-detect'
import Axios from 'axios'

function App() {
	useEffect(() => {
		const sendViewData = async () => {
			try {
				let viewType = 'laptop';
				if (isMobile) viewType = 'mobile';
				else if (isTablet) viewType = 'tablet';

				const response = await Axios.post(`${import.meta.env.VITE_BACKEND_URL}/state/views`, { viewType });
				// console.log('View added successfully:', response.data);
			} catch (err) {
				console.error('Error sending view data:', err);
			}
		};

		sendViewData();
	}, []);

	return (
		<>
			<ScrollProvider>
				<RefProvider>
					<div className='flex md:hidden h-[95vh] w-[95vw] my-2 mx-auto border-4 border-red-900 bg-red-100/40 items-center justify-center rounded-2xl text-center font-bold text-4xl p-4 sketchy-font'>Coming soon to mobile... <br /><br />Please view on a desktop</div>
					<div className='hidden md:flex flex-col overflow-x-hidden'>
						<Header />
						<Hero />
						<AfterHero />
					</div>
				</RefProvider>
			</ScrollProvider>
		</>
	)
}

export default App