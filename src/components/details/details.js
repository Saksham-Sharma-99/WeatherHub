import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import Icon from "../weatherIcon/icon"
import { Constants } from "../../Model/Constants"
import Graph from "../graph/graph"
import "./details.css"

function Details(props){
   
    return(
        <Container fluid className="details">
            <Row >
                <Col lg="8">
                    <h1 className ="temp-heading"> {props.temp + " °C"}  <Icon des={props.des} className="w-icon"/> </h1>
                    <Graph />
                </Col>
                <Col lg="4">
                    <Row className="P-H">
                        <h4>Pressure</h4>
                        <p>{props.p}</p>
                    </Row>
                    <Row className="P-H">
                        <h4>Humidity</h4>
                        <p>{props.h}</p>
                    </Row>
                    <Row className="sun">
                        <Col className="sunTime1">
                            <b >Sun Rise</b>
                            <p>{props.sunrise}</p>
                        </Col>
                        <Col className="sunTime2">
                            <b >Sun Set</b>
                            <p>{props.sunset}</p>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default Details