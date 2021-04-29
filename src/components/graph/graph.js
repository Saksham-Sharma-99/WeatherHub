import React from "react"
import { Container } from "react-bootstrap"
import ReactApexChart from 'react-apexcharts'
import { Constants } from "../../Model/Constants"

function Graph(){
    var data = []
    var time = []
    JSON.parse(sessionStorage.getItem(Constants.Forecast_Data)).list.map(
        (el)=>{
            var date = new Date(el.dt_txt)
            if(Constants.weekdays[date.getDay()] === sessionStorage.getItem(Constants.Selected_Day)){
                data.push(el.main.temp + " °C")
                time.push(date.toLocaleString('en-US', { hour: 'numeric', hour12: true }))
            }
        }
    )

   var series = [
        {
          name: "Temp",
          data: data
        }
      ]
      var options= {
        chart: {
          height: 350,
          type: 'line',
          dropShadow: {
            enabled: true,
            color: '#000',
            top: 18,
            left: 7,
            blur: 10,
            opacity: 0.2
          },
          toolbar: {
            show: false
          }
        },
        colors: ['#28527a', '#28527a'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'smooth'
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        markers: {
          size: 1
        },
        xaxis: {
          categories: time,
          title: {
            text: 'Time'
          }
        },
        yaxis: {
          title: {
            text: 'Temperature in °C'
          },
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
        //   offsetY: -25,
        //   offsetX: -5
        }
      }
    

    return(
        <div id="chart">
            <ReactApexChart options={options} series={series} type="line" height={350} />
        </div>
    )
}

export default Graph