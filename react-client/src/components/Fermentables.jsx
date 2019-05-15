import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import {Tooltip, Container, Row, Col} from 'react-bootstrap';
import FermentablesItem from './FermentablesItem.jsx';
import {
  ListWrapper,
  ListTable,
  ListTableHeader,
  Ltd
} from '../Styled/styledComps.jsx';
class Fermentables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fermentablesClicked: {}
    };
    this.selectedFermentable = this.selectedFermentable.bind(this);
  }
  selectedFermentable(val) {
    let stateVal = this.state.fermentablesClicked;
    if (stateVal[val.name]) {
      delete stateVal[val.name];
      this.setState({ fermentablesClicked: stateVal });
    } else {
      stateVal[val.name] = val;
      this.setState({ fermentablesClicked: stateVal });
    }
  }
  nameTooltip() {
    return (
      <OverlayTrigger
        placement="top"
        overlay={
          <Tooltip id="fermentationNameTooltip">
            Name of the Fermentable
          </Tooltip>
        }
      >
        <Col>Fermentable Name ⓘ</Col>
      </OverlayTrigger>
    );
  }
  amountTooltip(){
    return(
      <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip id="fermentationAmountTooltip">
          Amount of fermentable to add, generally want ~80% to be a base malt
          with specialty grains not contributing more than 10% each
        </Tooltip>
      }
    >
      <Col>Amount ⓘ</Col>
      </OverlayTrigger>
    ); 
  }
  colorTooltip(){
    return(
      <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip id="fermentationColorTooltip">
          Color contribution of the grain.
          An overall color of 40 is black and 3 is pale straw.
        </Tooltip>
      }
    >
      <Col>Color ⓘ</Col>
      </OverlayTrigger>
    ); 
  }
  gravityTooltip(){
    return(
      <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip id="fermentationGravityTooltip">
          Color contribution of the grain.
          An overall color of 40 is black and 3 is pale straw.
        </Tooltip>
      }
    >
      <Col>Gravity Contribution ⓘ</Col>
      </OverlayTrigger>
    ); 
  }
  abvTooltip(){
    return(
      <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip id="fermentationABVTooltip">
        Alcohol contribution of the grain
        1.038 sugar fermented is approximately 5% ABV.
        </Tooltip>
      }
    >
      <Col>ABV contribution ⓘ</Col>
      </OverlayTrigger>
    ); 
  }
  gristTooltip(){
    return(
      <OverlayTrigger
      placement="top"
      overlay={
        <Tooltip id="fermentationGristTooltip">
        Grist is the term for mashed grains.
        This displays the contribution by weight in the mash.
        </Tooltip>
      }
    >
      <Col>% of grist ⓘ</Col>
      </OverlayTrigger>
    ); 
  }
  render() {
    var i = 0;
    return (
      <div>
        <Container>
          <h4> Fermentables: </h4>
          
              <Row>
                <Col>#</Col>
                {this.nameTooltip()}
                {this.amountTooltip()}
                {this.colorTooltip()}
                {this.gravityTooltip()}
                {this.abvTooltip()}
                {this.gristTooltip()}
              </Row>
              
              {Object.keys(this.props.fermentables).map(fermentableId => {
                return (
                  <FermentablesItem
                    selectedFermentable={this.selectedFermentable}
                    key={fermentableId}
                    fermItem={this.props.fermentables[fermentableId]}
                    fermentableId={fermentableId}
                  />
                );
              })}
            
          
        </Container>
      </div>
    );
  }
}
export default Fermentables;
