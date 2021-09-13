import React, {useState, useEffect} from 'react'
import WeatherApp from './WeatherApp';

const SplashScreen = () => {
    const [splash, setSplash] = useState(true);
    const [animationStart, setAnimation] = useState(false);
    useEffect(()=>{
        setTimeout(()=>{
            setAnimation(true);
            setTimeout(()=>{
                setSplash(false);
            }, 600)
        }, 300)
    }, [])

    return(
        <>
            <div className={`splash-screen ${splash ? '' : 'hide-splash'}`}>
                <div className={`main-text ${animationStart ? 'animation-start' : ''}`}>
                    Is It Raining Outside ?
                </div>
                <div className='owner-text'>
                    Designed by Rajat, Developed by Arik
                </div>
            </div>
            {splash ? null : <WeatherApp />}
        </>
    )
}

export default SplashScreen