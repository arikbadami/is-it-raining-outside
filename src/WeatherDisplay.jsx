import React from 'react'

const WeatherDisplay = (props) => {

    const getWeatherMarkup = () => {
        let markup = []
        switch(props.data.main){
            case 'Sunny':
            case 'Clear':
                markup.push(
                    <div class="icon sunny">
                        <div class="sun">
                            <div class="rays"></div>
                        </div>
                    </div>
                )
            break;
            case 'Thunderstorm':
                markup.push(
                    <div class="icon thunder-storm">
                        <div class="cloud"></div>
                        <div class="lightning">
                            <div class="bolt"></div>
                            <div class="bolt"></div>
                        </div>
                    </div>
                )
            break;
            case 'Rain':
            case 'Drizzle':
                markup.push(
                    <div class="icon rainy">
                        <div class="cloud"></div>
                        <div class="rain"></div>
                    </div>
                )
            break;
            case 'Snow':
                markup.push(
                    <div class="icon flurries">
                        <div class="cloud"></div>
                        <div class="snow">
                            <div class="flake"></div>
                            <div class="flake"></div>
                        </div>
                    </div>
                )
            break;
            case 'initial':
                markup.push(
                    <div class="icon sun-shower">
                        <div class="cloud"></div>
                        <div class="sun">
                            <div class="rays"></div>
                        </div>
                        <div class="rain"></div>
                    </div>
                )
            break;
            default:
                markup.push(
                    <div class="icon cloudy">
                        <div class="cloud"></div>
                        <div class="cloud"></div>
                    </div>
                )
        }
        return markup;
    }

    return(
        <div className='weather-display'>
            {getWeatherMarkup()}
        </div>
    )
}

export default WeatherDisplay