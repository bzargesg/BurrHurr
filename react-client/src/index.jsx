import React from 'react';
import ReactDOM from 'react-dom';
// import Popup from 'reactjs-popup';
import fermentableHelper from './helperfunctions/fermentablesCalc';
import TopBar from './components/TopBar.jsx';
import Fermentables from './components/Fermentables.jsx';
import Hops from './components/Hops.jsx';
import Yeast from './components/Yeast.jsx';
import Kettle from './components/Kettle.jsx';
import Style from './components/Style.jsx';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { BodyWrapp } from './Styled/styledComps.jsx';
import FermentablePopup from './components/PopupMenu/FermentablePopup.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      volume: 5,
      color: 0,
      IBU: 0,
      ABV: 0,
      yeasts: [],
      kettle: [],
      yeasts: [],
      styles: [],
      totalGrain: 0,
      fermentables: {},
      hops: [],
      buttonClick: false,
      numberGrain: 1,
      totalGrain: 0,
      totalGravity: 0,
      finalGravity: 0
    };
    this.fermClickHandler = this.fermClickHandler.bind(this);
    this.addFermentableFromModal = this.addFermentableFromModal.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.fermAmountChange = this.fermAmountChange.bind(this);
  }

  fermAmountChange(e, id) {
    let fermState = this.state.fermentables;
    fermState[id + ''].amount = e.target.value ? Number(e.target.value) : 0;
    let newGrav = fermentableHelper.gravity(this.state.fermentables,this.state.volume);
    this.setState({
      fermentables: fermState,
      totalGrain: fermentableHelper.totalGrain(this.state.fermentables),
      color: fermentableHelper.color(this.state.fermentables, this.state.volume),
      totalGravity: newGrav,
      finalGravity: newGrav * (1-.75),
      ABV: fermentableHelper.abv(newGrav)
    });
  }
  componentDidUpdate(prevProps, prevState) {
    //change grist total
    //abv total
    //total grain
  }
  objectCleanup(obj, grainNumber) {
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
        newFermList[objectId] = this.objectCleanup(
          fermList[objectId],
          numberGrain
        );
      }
      numberGrain++;
    });
    let newGrav = fermentableHelper.gravity(this.state.fermentables,this.state.volume);
    this.setState({
      fermentables: newFermList,
      numberGrain: numberGrain,
      totalGrain: fermentableHelper.totalGrain(this.state.fermentables),
      color: fermentableHelper.color(this.state.fermentables, this.state.volume),
      totalGravity: newGrav,
      finalGravity: newGrav * (1-.75),
      ABV: fermentableHelper.abv(newGrav)
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
      <div style={{ backgroundColor: '#efe2ba' }}>
        <div>
          <TopBar />
        </div>
        <BodyWrapp>
          <h1>BurrHurr</h1>
          <Row className="headerBar">
            <Col className="totalGrain">Total Grain:{this.state.totalGrain + 'lb'}</Col>
            <Col className="totalGravity">Total Grav.:{(this.state.totalGravity).toFixed(2)}</Col>
            <Col className="finalGravity">Final Grav.:{(this.state.finalGravity).toFixed(2)}</Col>
            <Col className="volume">Volume:<Form.Control type="amount" size="sm" placeholder="5 gallons" onChange={this.volumeChange.bind(this)}/></Col>
            <Col className="color"><div style={{backgroundColor: 'red', height: '10px', width: '10px'}}></div>Color: {this.state.color}</Col>
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
          {/* <Hops/>
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

ReactDOM.render(<App />, document.getElementById('app'));
