import React, { useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import Icon from "../weatherIcon/icon"
import { Constants } from "../../Model/Constants"
import Details from "../details/details"
import "./weekdays.css"

function Day(day , temp , weather , sunrise,sunset,p,h){
    this.day = day
    this.temp = temp
    this.weather=weather
    this.sunrise = sunrise
    this.sunset = sunset
    this.p = p
    this.h= h
}


function WeekDays(){
    var data = JSON.parse(sessionStorage.getItem(Constants.Forecast_Data))
    var today = new Date(data.list[0].dt_txt).getDay()

    const [selected , setSelected] = useState(sessionStorage.getItem(Constants.Selected_Day))
    const [p , setP] = useState(sessionStorage.getItem(Constants.Selected_Pressure) == null ? 
                        "__" :sessionStorage.getItem(Constants.Selected_Pressure) )
    const [h , setH] = useState(sessionStorage.getItem(Constants.Selected_Humidity) == null ? 
                        "__" :sessionStorage.getItem(Constants.Selected_Humidity) )
    const [temp , setTemp] = useState(sessionStorage.getItem(Constants.Selected_Temp) == null ?
                             "__" :sessionStorage.getItem(Constants.Selected_Temp))
    const [des , setDes] = useState(sessionStorage.getItem(Constants.Selected_Des) == null ?
                             "__" :sessionStorage.getItem(Constants.Selected_Des))

    var Days = [];
    data.list.map((el)=>{
        const date = new Date(el.dt_txt)
        if (date.toTimeString() === Constants.Noon_Time){
            var day = new Day(Constants.weekdays[date.getDay()] 
            , el.main.temp , el.weather[0].description , data.city.sunrise , data.city.sunset 
            , el.main.pressure , el.main.humidity)
            Days.push(day)
        }
    })

    var city = data.city
    var sunrise = new Date(city.sunrise).toLocaleString('en-US', { hour: 'numeric', hour12: true })
    var sunset = new Date(city.sunset).toLocaleString('en-US', { hour: 'numeric', hour12: true })
    

    return(
        <Container fluid>
        <Row className= "week-container">
            
                {
                    Days.map((d)=>(
                        <Col className={selected===d.day? "selected":"not-selected"} 
                            onClick = {()=>{
                                setSelected(d.day)
                                setP(d.p)
                                setH(d.h)
                                setTemp(d.temp)
                                setDes(d.weather)
                                sessionStorage.setItem(Constants.Selected_Day , d.day)
                                sessionStorage.setItem(Constants.Selected_Temp,d.temp)
                                sessionStorage.setItem(Constants.Selected_Pressure, d.p)
                                sessionStorage.setItem(Constants.Selected_Humidity , d.h)
                                sessionStorage.setItem(Constants.Selected_Des , d.weather)
                            }}>
                            <h5> {d.day} </h5>
                            <h5> {d.temp + " °C"}</h5>
                            <Icon des = {d.weather} />
                            <p>{d.weather}</p>
                        </Col>
                    ))
                }
            
        </Row>

        <Row>
          <Details des={des} temp = {temp} sunrise={sunrise} sunset={sunset} p={p + " hpa"} h={h +"%"}/>
        </Row>

        </Container>
    )
}

export default WeekDays