import React from 'react';
import ReactDOM from 'react-dom';
import Popup from 'reactjs-popup';
import TopBar from './components/TopBar.jsx'
import {  SubmissionButton,
  SubmissionButtonClicked} from './Styled/styledComps.jsx'
import Fermentables from './components/Fermentables.jsx';
import Hops from './components/Hops.jsx';
import Yeast from './components/Yeast.jsx';
import Kettle from './components/Kettle.jsx';
import Style from './components/Style.jsx';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { BodyWrapp } from './Styled/styledComps.jsx';
import FermentablePopup from './components/PopupMenu/FermentablePopup.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      volume: '0L',
      color: 0,
      IBU: 0,
      ABV: 0,
      yeasts: [],
      kettle: [],
      yeasts: [],
      styles: [],
      totalGrain: 0,
      fermentables: {'51':{number: 1, name:'2-row', amount: '5lb', color: '40 L', gravity: '1.040-1.046',abv: '4-5%', percentage: '5%'}},
      hops: [],
      buttonClick: false,
    }
    this.fermClickHandler = this.fermClickHandler.bind(this);
    this.addFermentableFromModal = this.addFermentableFromModal.bind(this);
    this.handleClose=this.handleClose.bind(this);
  }

  componentDidMount() {

  }
  objectCleanup(obj){
    let returnObj = {};
    returnObj.number=2;
    returnObj.name=obj.name;
    returnObj.amount= '1lb';
    returnObj.color=obj.color;
    returnObj.gravity=obj.gravity_potential;
    returnObj.abv='5%';
    returnObj.percentage='5%';
    return returnObj;
    
  }
  addFermentableFromModal(fermList){
    let newFermList=this.state.fermentables;
    Object.keys(fermList).forEach(objectId=>{
      if(!newFermList[objectId]){
        
        newFermList[objectId]=this.objectCleanup(fermList[objectId]);
      }
    })
    this.setState({fermentables:newFermList});
  }
fermClickHandler(e){
  this.setState({fermclick: true});
}
  render () {
    var button = (
        <SubmissionButton onClick={this.clickHandler.bind(this)}>
          Add Fermentable
        </SubmissionButton>
      );
    return (
    <div style={{backgroundColor: '#efe2ba'}}>
    <div>
      <TopBar/>
      </div>
      <BodyWrapp>
      <h1>BurrHurr</h1>
      <div className='headerBar'>
      <span className="volume">Volume: {this.state.volume}</span>
      <span className="color">Color: {this.state.color}</span>
      <span className="ibu">IBU: {this.state.IBU}</span>
      <span className="abv">ABV: {this.state.ABV}</span>
      </div>
      <Fermentables fermentables={this.state.fermentables} clickHandler={this.fermClickHandler}/>
      {button}
      <Modal show={this.state.buttonClick} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Fermentable</Modal.Title>
          </Modal.Header>
          <Modal.Body><FermentablePopup addFerm={this.addFermentableFromModal}/></Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      {/* <Popup trigger={button} modal closeOnDocumentClick><div className="modal"><FermentablePopup addFerm={this.addFermentableFromModal}/></div></Popup> */}
      {/* <Hops/>
      <Yeast/>
      <Kettle/>
      <Style/> */}
      </BodyWrapp>
    </div>)
  }
  handleClose(){
    this.setState({ buttonClick: false });
  }
  clickHandler(e) {
    this.setState({ buttonClick: !this.state.buttonClick });
  }
}

ReactDOM.render(<App />, document.getElementById('app'));