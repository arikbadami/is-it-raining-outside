import WeatherApp from './WeatherApp'
import './app.scss'

const App = () => {
	const isPWA = (window.matchMedia('(display-mode: standalone)').matches)
	const iOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent);

	if(isPWA){
		return (
			<WeatherApp />
		)
	}else{
		return (
			<div className='instructions'>
				<div className={`arrow ${iOSDevice ? 'iOS-style' : 'android-style'}`} />
				<div className={`arrow-head ${iOSDevice ? 'iOS-style' : 'android-style'}`} />
				<div className='text'>
					Kindly Install the PWA By Following these steps: <br/>
					1. Click on the 3 Dots icon in the browser navigation bar <br />
					2. Select the "Add to Home screen"/"Intall App" option from the list <br />
					3. Click on the Add button from the Popup that opens <br/>
					4. After a few seconds the install process will complete and you can use the app<br />
					Note: This will not work in Incognito/Private Mode
				</div>
			</div>
		)
	}
}

export default App;
