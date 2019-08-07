//TODO: this should be the body component combining the other components replacing the junk in index
import React from 'react';
// import Popup from 'reactjs-popup';
import fermentableHelper from '../helperfunctions/fermentablesCalc';
import Fermentables from '../beerComponents/Fermentables.jsx';
import Hops from '../beerComponents/Hops.jsx';
import Yeast from '../beerComponents/Yeast.jsx';
import Kettle from '../beerComponents/Kettle.jsx';
import Style from '../beerComponents/Style.jsx';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { BodyWrapp } from '../Styled/styledComps.jsx';
import FermentablePopup from '../PopupMenu/FermentablePopup.jsx';
import HopPopup from '../PopupMenu/HopPopup.jsx';

import VolumeTester from './volumeTester.jsx';

export default class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 5,
      color: 0,
      IBU: 0,
      ABV: 0,
      yeasts: [],
      kettle: [],
      styles: [],
      totalGrain: 0,
      fermentables: {},
      hops: {},
      buttonClick: false,
      numberGrain: 1,
      numberHop: 1,
      totalGravity: 0,
      finalGravity: 0,
      colorStyle: {backgroundColor: 'RGB(249,233,173)', height: '100px', width: '100px'}
    };
    this.fermClickHandler = this.fermClickHandler.bind(this);
    this.addFermentableFromModal = this.addFermentableFromModal.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.fermAmountChange = this.fermAmountChange.bind(this);
    this.hopClickHandler = this.hopClickHandler.bind(this);
    this.hopAmountChange = this.hopAmountChange.bind(this);
    this.addHopFromModal = this.addHopFromModal.bind(this);
  }

  beerColor(lovibond){
    let green = 0, red = 0, blue= 0;
    if(lovibond<40){
      green = lovibond > 30 ? 12 : 233 + 7.99 * lovibond - 1.73 * Math.pow(lovibond,2) + .0407*Math.pow(lovibond,3);
      red =  249-8.79*lovibond+.0831*Math.pow(lovibond,2);
      blue = 169 - 46.5*Math.log(lovibond);
    }
    return {backgroundColor: `RGB(${red},${green},${blue})`, height: '100px', width: '100px'};
  }
  hopObjectCleanup(obj, hopNumber) {
    let returnObj = {};
    // returnObj.number = grainNumber;
    // returnObj.name = obj.name;
    // returnObj.amount = 1;
    // returnObj.color = obj.color;
    // returnObj.gravity = obj.gravity_potential;
    // returnObj.abv = '5%';
    // returnObj.percentage = '5%';
    return returnObj;
  }
  addHopFromModal(hopList) {
    let newHopList = this.state.hops;
    let numberHop = this.state.numberHop;
    Object.keys(hopList).forEach(objectId => {
      if (!newHopList[objectId]) {
        newHopList[objectId] = this.hopObjectCleanup(
          hopList[objectId],
          numberHop
        );
      }
      numberHop++;
    });
  }
  hopClickHandler(e) {
    this.setState({ hopclick: true });
  }
  hopAmountChange(e, id) {
    let hopState = this.state.hops;
    hopState[id + ''].amount = e.target.value ? Number(e.target.value) : 0;
    //Set Ibu
    // this.setState({
    //   fermentables: fermState,
    //   totalGrain: fermentableHelper.totalGrain(this.state.fermentables),
    //   });
  }
  fermAmountChange(e, id) {
    let fermState = this.state.fermentables;
    fermState[id + ''].amount = e.target.value ? Number(e.target.value) : 0;
    let newGrav = fermentableHelper.gravity(this.state.fermentables,this.state.volume);
    let newColor = fermentableHelper.color(this.state.fermentables, this.state.volume);
    this.setState({
      fermentables: fermState,
      totalGrain: fermentableHelper.totalGrain(this.state.fermentables),
      color: newColor,
      totalGravity: newGrav,
      finalGravity: newGrav * (.25),
      ABV: fermentableHelper.abv(newGrav),
      colorStyle: this.beerColor(newColor)
    });
  }
  componentDidUpdate(prevProps, prevState) {
    //change grist total
    //abv total
    //total grain
  }
  fermObjectCleanup(obj, grainNumber) {
    let returnObj = {};
    returnObj.number = grainNumber;
    returnObj.name = obj.name;
    returnObj.amount = 1;
    returnObj.color = obj.color;
    returnObj.gravity = obj.gravity_potential;
    returnObj.abv = '5%';
    returnObj.percentage = '5%';
    return returnObj;
  }
  addFermentableFromModal(fermList) {
    let newFermList = this.state.fermentables;
    let numberGrain = this.state.numberGrain;
    Object.keys(fermList).forEach(objectId => {
      if (!newFermList[objectId]) {
        newFermList[objectId] = this.fermObjectCleanup(
          fermList[objectId],
          numberGrain
        );
      }
      numberGrain++;
    });
    let newGrav = fermentableHelper.gravity(this.state.fermentables,this.state.volume);
    let newColor = fermentableHelper.color(this.state.fermentables, this.state.volume);
    this.setState({
      fermentables: newFermList,
      numberGrain: numberGrain,
      totalGrain: fermentableHelper.totalGrain(this.state.fermentables),
      color: newColor,
      totalGravity: newGrav,
      finalGravity: newGrav * (1-.75),
      ABV: fermentableHelper.abv(newGrav),
      colorStyle: this.beerColor(newColor)
    });
  }
  fermClickHandler(e) {
    this.setState({ fermclick: true });
  }
  volumeChange(e){
    let newGrav = fermentableHelper.gravity(this.state.fermentables,e.target.value);
    this.setState({
      volume: Number(e.target.value),
      totalGravity: newGrav,
      finalGravity: newGrav * (1-.75)
    })
  }
  render() {
    return (
      <div>
        <BodyWrapp>
          <h1>BurrHurr</h1>
          <Row className="headerBar">
            <Col className="totalGrain">Total Grain:{this.state.totalGrain + 'lb'}</Col>
            <Col className="totalGravity">Total Grav.:{(this.state.totalGravity).toFixed(2)}</Col>
            <Col className="finalGravity">Final Grav.:{(this.state.finalGravity).toFixed(2)}</Col>
            <Col className="volume">Volume:<Form.Control type="amount" size="sm" placeholder="5 gallons" onChange={this.volumeChange.bind(this)}/></Col>
            <Col className="color"><div style={this.state.colorStyle}></div>Color: {this.state.color}</Col>
            <Col className="ibu">IBU: {this.state.IBU}</Col>
            <Col className="abv">ABV: {(this.state.ABV).toFixed(3)}</Col>
          </Row>
          <Fermentables
            fermentables={this.state.fermentables}
            amountChange={this.fermAmountChange}
            clickHandler={this.fermClickHandler}
          />
          <br />
          <Container>
            <Row>
              <Col>
                <Button
                  variant="info"
                  size="sm"
                  onClick={this.clickHandler.bind(this)}
                >
                  Add Fermentable
                </Button>
              </Col>
            </Row>
          </Container>
          <Modal
            show={this.state.buttonClick}
            onHide={this.handleClose}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Fermentables</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FermentablePopup addFerm={this.addFermentableFromModal} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          <hr></hr>
           <Hops
            hops={this.state.hops}
            amountChange={this.hopAmountChange}
            clickHandler={this.hopClickHandler}
           />
            <br />
          <Container>
            <Row>
              <Col>
                <Button
                  variant="info"
                  size="sm"
                  onClick={this.clickHandler.bind(this)}
                >
                  Add Hops
                </Button>
              </Col>
            </Row>
          </Container>
          {/* <Modal
            show={this.state.buttonClick}
            onHide={this.handleClose}
            size="lg"
          >
            <Modal.Header closeButton>
              <Modal.Title>Hops</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <HopPopup addHop={this.addHopFromModal} />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal> */}
           {/*
      <Yeast/>
      <Kettle/>
      <Style/> */}
        </BodyWrapp>
      </div>
    );
  }
  handleClose() {
    this.setState({ buttonClick: false });
  }
  clickHandler(e) {
    this.setState({ buttonClick: !this.state.buttonClick });
  }
}

