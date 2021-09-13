import React,{useState, useEffect} from 'react'
import axios from 'axios';
import WeatherDisplay from './WeatherDisplay'

const WeatherApp = () => {
    const [location, setLocation] = useState(false);
    const [status, setStatus] = useState('default');
    const [weatherData, setWeatherData] = useState(false);
    const [citySearch, setCitySearch] = useState(false);
    const [val, setVal] = useState('')
    const apiKey = 'b7759e9875ae91e00ca69cd66bc660ac';

    const description = {
        "Haze": "Hazy outside, perhaps it wouldn't be the worst idea to carry an umbrella",
        "Sunny": "The sun is out, birds are chirping. What a lovely day to be alive",
        "Rain": "Yes, it is raining ! Don't wake the old man up",
        "Drizzle": "Light drizzle, could get heavy could stop, who knows ?",
        "Thunderstorm": "There's a storm coming Mr. Wayne",
        "Snow": "Brace yourself. Winter is Here",
        "Clear": "Clear outside, nothing special to report about",
        "Clouds": "The Clouds are out, but are they rain clouds ? It's a secret"
    }

    useEffect(()=>{
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(res=>{setLocation(res.coords)}, (error)=>{
                setLocation('Failed')
            });
        }else {
            setLocation('NoSupport');
        }
    }, [])

    const toggleDrawer = (val) => {
        setCitySearch(val);
        setWeatherData(false);
        setStatus('default');
        setVal('');
    }

    const fetchData = () => {
        if(status == 'done' && !citySearch){
            setStatus('default');
            setWeatherData(null);
            return;
        }
        setStatus('fetching');
        const timerPromise = new Promise((resolve)=>{
            setTimeout(()=>{
                resolve(123)
            }, [2000])
        })

        // const weatherApi = new Promise((resolve)=>{
        //     resolve({data: {
        //         weather: [{
        //             main: 'Thunderstorm'
        //         }]
        //     }})
        // })

        const weatherApi = citySearch ? 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${val}&appid=${apiKey}`) : 
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.latitude}&lon=${location.longitude}&appid=${apiKey}`);
        Promise.all([timerPromise, weatherApi])
        .then(values => {
            const res = values[1].data;
            setWeatherData({
                ...res.weather[0]
            })
            setStatus('done')
        })
        .catch(()=>{
            setStatus('default');
        })
    }

    return(
        <div className='weather-app'>
            <div className={`location-based`}>
                {
                    location ? 
                        location == 'NoSupport' ? <div className='description'>Device does not support location</div> : 
                        location == 'Failed' ? <div className='description'>Could not fetch device location. Kindly review device settings or use the search by city option</div> : 
                        <div>
                            {   
                                status == 'done' ? 
                                <WeatherDisplay 
                                    data={weatherData}
                                /> : 
                                <WeatherDisplay 
                                    data={{
                                        main: 'initial'
                                    }}
                                />
                            }
                            {
                                <div className='fetch-button' onClick={fetchData}>
                                    {   status == 'default' ? 'Is It Raining Outside ?' :
                                        status == 'done' ? 'Reset' :
                                        <i className="fa fa-circle-o-notch fa-spin"></i>    
                                    }
                                </div>
                            }
                            {status!='done' ? <div className='description'>
                                    Hit the button above and find out whats the weather outside like
                                </div> : 
                                <div className='description'>{description[weatherData.main] ? description[weatherData.main] : description["Clear"]}</div>
                            }
                        </div>
                    : <div className='description'> 
                        Fetching Device Location
                        <div className='large-icon'>
                            <i className="fa fa-circle-o-notch fa-spin"></i>
                        </div>
                    </div>
                }
            </div>
            <div className={`city-based ${citySearch ? 'open' : ''}`}>
                {!citySearch ? <div className='fetch-button' onClick={()=>{
                    toggleDrawer(true);
                }}>
                    Search By City
                </div> : 
                <div>
                    <div className='cross-icon' onClick={()=>toggleDrawer(false)}>x</div>
                    <input 
                        onChange={(e)=>{
                            setVal(e.target.value)
                        }}
                        value={val}
                        className='input-field'
                        placeholder='City Name'
                    />
                    <div className='fetch-button' onClick={fetchData}>
                        {status == 'default' ? 'Search' :
                                        status == 'done' ? 'Search' :
                                        <i className="fa fa-circle-o-notch fa-spin"></i> }
                    </div>
                    {status == 'done' ? 
                        <>
                            <WeatherDisplay 
                                data={weatherData}
                            />
                            <div className='description'>{weatherData.main}</div>
                        </> : null
                    }
                </div>
                }
            </div>
            {citySearch && <div className='overlay' onClick={()=>toggleDrawer(false)}></div>}
        </div>
    )


}

export default WeatherApp