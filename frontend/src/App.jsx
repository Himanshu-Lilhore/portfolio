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
				console.log('View added successfully:', response.data);
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
					<div className='flex flex-col overflow-x-hidden'>
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