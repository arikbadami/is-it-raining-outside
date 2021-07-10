import WeatherApp from './WeatherApp'

const App = () => {
	const isPWA = true;
	if(isPWA){
		return (
			<WeatherApp />
		)
	}else{
		return (
			<div>NOT PWA</div>
		)
	}
}

export default App;
