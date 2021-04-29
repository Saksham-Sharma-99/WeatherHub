var Constants = {
    Selected_Day : "selected_day",
    Selected_Pressure : "selected_p",
    Selected_Humidity : "selected_h",
    Selected_Temp : "selected_t",
    Selected_Des : "selected_d",
    Forecast_Data : "forecast_data",
    Weather_Data : "weather_data",
    Noon_Time : "12:00:00 GMT+0530 (India Standard Time)",
    weekdays : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
    Clear_Sky : "clear sky",
    Few_Clouds : "few clouds",
    Scattered_Clouds :"scattered clouds",
    Broken_Clouds : "broken clouds",
    Shower_Rain : "shower rain",
    Rain : "rain",
    Thunderstorm : "thunderstorm",
    Snow : "snow",
    Mist : "mist",
    Light_Rain : "light rain",
    City : "city"
}

var BaseURL = "http://api.openweathermap.org/data/2.5"
var API_KEY = "b3d17ba9a45e79f53539555a84fcab0e"

var ENDPOINTS = {
    ForeCast : "/forecast",
    Weather : "/weather"
}

export {Constants,BaseURL,ENDPOINTS,API_KEY}