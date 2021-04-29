import React, { useEffect, useState } from "react"
import "./App.css"
import { Container, Row } from "react-bootstrap"
import SearchBox from "./components/search/searchbox"
import WeekDays from "./components/weeksdays/weekdays"
import Details from "./components/details/details"
import { GetForecast , GetLocForecast} from "./Model/RequestHandler"
import { Constants } from "./Model/Constants"

function App() {

  

  const [isLoading, setLoading] = useState(true);

 
  useEffect(() => {
    
    if (sessionStorage.getItem(Constants.City)!=null){
        GetForecast((res)=>{
        console.log(res.data)
        setLoading(false)
      } , sessionStorage.getItem(Constants.City))
    }else{
      navigator.geolocation.getCurrentPosition((loc)=>{
        GetLocForecast((res)=>{
          console.log(res.data)
          setLoading(false)
        } , loc)
      })
    }

  }, []);


  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <div className="App">
      <Container fluid className="main-container">
        <Row>
          <SearchBox />
        </Row>
        <Row>
          <WeekDays/>
        </Row>
        
        {
          //search ✔️
          //daywise overall ✔️
          //day particulars ✔️
          //pressure and humidity ✔️
          //sunrise and sunset ✔️
        }
      </Container>
     
    </div>
  );
}

export default App;

