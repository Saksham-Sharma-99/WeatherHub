import Axios from "axios"
import {Constants,BaseURL,ENDPOINTS,API_KEY} from "./Constants"

function GetForecast( callback,parameter=null,baseURL = BaseURL){
    if (parameter!=null){
        Axios.get(baseURL+ENDPOINTS.ForeCast+"?q="+parameter+ "&units=metric&appid="+API_KEY).then((res)=>{
            sessionStorage.setItem(Constants.Forecast_Data,JSON.stringify(res.data))
            callback(res.data)
        })
    }
}

function GetLocForecast( callback,loc=null,baseURL = BaseURL){
    if (loc!=null){
        Axios.get(baseURL+ENDPOINTS.ForeCast+"?lat="+loc.coords.latitude+"&lon="+loc.coords.longitude+ "&units=metric&appid="+API_KEY).then((res)=>{
            sessionStorage.setItem(Constants.Forecast_Data,JSON.stringify(res.data))
            callback(res.data)
        })
    }
}

function GetWeather(callback,parameter=null,baseURL = BaseURL ){
    if (parameter!=null){
        Axios.get(baseURL+ENDPOINTS.Weather+"?q="+parameter+ "&units=metric&appid="+API_KEY).then((res)=>{
            callback(res)
        })
    }
}



export {GetForecast , GetWeather , GetLocForecast}