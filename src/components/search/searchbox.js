import React, { useState } from "react";
import "./searchbox.css"
import { Button, FormControl, InputGroup } from "react-bootstrap";
import {MdLocationOn} from "react-icons/md"
import {RiSearch2Fill} from "react-icons/ri"
import {GetForecast,GetLocForecast} from "../../Model/RequestHandler"
import { Constants } from "../../Model/Constants";

function SearchBox(){
    var [value,setValue] = useState("")
    
    function Location(){
        sessionStorage.clear()
        window.location.reload()
    }

    function Search(){
        GetForecast((res)=>{
            sessionStorage.clear()
            window.location.reload()
            sessionStorage.setItem(Constants.City , value)
        },value)
    }
    return (
        <div>
            <InputGroup className="mb-3" className="searchbox">
                <InputGroup.Prepend>
                    <MdLocationOn className="location-icon" onClick={Location}/>
                </InputGroup.Prepend>
                <FormControl id="search-txt" aria-label="Text input for search & location" 
                        placeholder="Location Name" className="text-box"
                            value = {value} type="text"
                            onChange={e=>setValue(e.target.value)}
                        />
                <InputGroup.Append>
                    <Button onClick={Search} variant="outline-secondary" className= "searchBtn" type="submit">
                        <RiSearch2Fill className="search-icon"/>
                    </Button>
                </InputGroup.Append>
            </InputGroup>
        </div>
    )
}

export default SearchBox