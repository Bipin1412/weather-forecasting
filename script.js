const search=document.querySelector('.search');
const searchbtn=document.getElementById('search-btn');

const weatherimg=document.querySelector('.image1');

const temprature=document.querySelector('.temprature');

const discrip= document.querySelector('.discrip');

const humidity= document.getElementById('humidity');

const wind_speed=document.getElementById('wind_speed')



async function checkweather(city){
    const api_key="a94c60f6c342ac8ba4841d9ddd501607";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data=await fetch(`${url}`).then(response=>
        response.json());

        console.log(weather_data);
        

    temprature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`
    discrip.innerHTML=`${weather_data.weather[0].description}`
    humidity.innerHTML=`${weather_data.main.humidity}
    %`;
    
    wind_speed.innerHTML=`${weather_data.wind.speed }km/hr`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weatherimg.src="./image/cloudy.jpeg"
            break;   
        case 'Clear':
            weatherimg.src="./image/clear.jpeg";
            break;   
        case 'Rain':
            weatherimg.src="./image/rain.jpeg" ;
            break;   
        case 'Mist':
            weatherimg.src="./image/mist.jpeg" ;
            break;   
        case 'wind':
            weatherimg.src="./image/wind.jpeg" ;
            break;   
    }


    // humidity.innerHTML=`${weather_data.main.humidity}%`;
    // wind.innerHTML=`${weather_data.wind.speed}km/H` ;
}
searchbtn.addEventListener('click',()=>{
    checkweather(search.value)
})



