    //select HTML elements 
    const weatherIcon = document.querySelector('#weather_img');
    const report = document.querySelector('#weather-description');
    const forecast = document.querySelector('#weather-forecast');
    // const currentTemp = document.querySelector('#current-temp');
    // const captionDesc = document.querySelector('figcaption');

    const key = "937886d41113fc64e12d7ab470185586"
    const lat = "-30.99"
    const long = "-64.08"



    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&appid=${key}&units=metric`;


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
    }

    apiFetch();


    // convert a uniix time stamp to normal time
function formatTime(x) {
        // multiplied by 1000 so that the argument is in milliseconds, not seconds
        const date = new Date(x * 1000);

        // Hours part from the timestamp
        let hours = date.getHours();
        if (hours>12) {hours=hours-12}

        // Minutes part from the timestamp
        const minutes = "0" + date.getMinutes();

        // Will display time in 10:30:23 format
        const formattedTime = `${hours}:${minutes.substring(minutes.length - 2)}`;
        return formattedTime
    
}

function displayResults(data) {
    const iconSource = `https://openweathermap.org/img/w/${data.list[0].weather[0].icon}.png`;
    let desc = data.list[0].weather[0].main;

    weatherIcon.setAttribute('src', iconSource);
    weatherIcon.setAttribute('alt', desc);
  

    const temp = document.createElement('p')
    temp.innerHTML = `${data.list[0].main.temp}&deg;C`
    report.appendChild(temp)
    
    const description = document.createElement('p')
    description.innerHTML = data.list[0].weather[0].description;
    report.appendChild(description)
    
    const high = document.createElement('p')
    high.innerHTML = `High: ${data.list[0].main.temp_max}&deg;C`
    report.appendChild(high)
    
    const low = document.createElement('p')
    low.innerHTML = `Low: ${data.list[0].main.temp_min}&deg;C`
    report.appendChild(low)
    
    const humidity = document.createElement('p')
    humidity.innerHTML = `Humidity: ${data.list[0].main.humidity}%`
    report.appendChild(humidity)
    
    const sunrise = document.createElement('p')
    sunrise.innerHTML = `Sunrise: ${formatTime(data.city.sunrise)}am`
    report.appendChild(sunrise)
    
    const sunset = document.createElement('p')
    sunset.innerHTML = `Sunset: ${formatTime(data.city.sunset)}pm`
    report.appendChild(sunset)


    // Forecast general
    const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday","Monday"]
    const date = new Date();


    // Forecast icons
    const iconSource2 = `https://openweathermap.org/img/w/${data.list[8].weather[0].icon}.png`;
    const iconSource3 = `https://openweathermap.org/img/w/${data.list[16].weather[0].icon}.png`;
 
    // Forecast Weather
    const block = document.createElement('div')
    const temp1 = document.createElement('p')
    const icon1 = document.createElement('img')
    icon1.setAttribute('src', iconSource);
    icon1.setAttribute('alt', desc);
    temp1.innerHTML = `Today: ${data.list[0].main.temp}&deg;C`
    block.appendChild(temp1)
    block.appendChild(icon1)

    const block2 = document.createElement('div')
    const temp2 = document.createElement('p')
    const icon2 = document.createElement('img')
    icon2.setAttribute('src', iconSource2);
    icon2.setAttribute('alt', data.list[8].weather[0].main);
    temp2.innerHTML = `${dayNames[date.getDay()+1]}: ${data.list[8].main.temp}&deg;C`
    block2.appendChild(temp2)
    block2.appendChild(icon2)
    
    const block3 = document.createElement('div')
    const temp3 = document.createElement('p')
    const icon3 = document.createElement('img')
    icon3.setAttribute('src', iconSource3);
    icon3.setAttribute('alt', data.list[16].weather[0].main);
    temp3.innerHTML = `${dayNames[date.getDay()+2]}: ${data.list[16].main.temp}&deg;C`
    block3.appendChild(temp3)
    block3.appendChild(icon3)
     
    forecast.appendChild(block)
    forecast.appendChild(block2)
    forecast.appendChild(block3)
  
}