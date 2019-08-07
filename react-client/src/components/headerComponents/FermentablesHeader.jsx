import React from 'react';
import {  Row, Col, Form } from 'react-bootstrap';
const FermentablesHeader =(props)=>(
  <Row className="headerBar">
  <Col className="totalGrain">Total Grain:{props.totalGrain + 'lb'}</Col>
  <Col className="totalGravity">Total Grav.:{props.totalGravity}</Col>
  <Col className="finalGravity">Final Grav.:{props.finalGravity}</Col>
  <Col className="volume">Volume:<Form.Control type="amount" size="sm" placeholder="5 gallons" onChange={props.volumeChange.bind(this)}/></Col>
  <Col className="color"><div style={props.colorStyle}></div>Color: {props.color}</Col>
  <Col className="ibu">IBU: {props.IBU}</Col>
  <Col className="abv">ABV: {props.ABV}</Col>
</Row>
)
export default FermentablesHeader