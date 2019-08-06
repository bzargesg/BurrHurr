import React from 'react';
import Row from 'react-bootstrap/Row';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Tooltip from 'react-bootstrap/Tooltip';

class Hops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hopsClicked: {}
    };
    this.selectedHops = this.selectedHops.bind(this);
  }
  selectedHops(val) {
    let stateVal = this.state.hopsClicked;
    if (stateVal[val.name]) {
      delete stateVal[val.name];
      this.setState({ hopsClicked: stateVal });
    } else {
      stateVal[val.name] = val;
      this.setState({ hopsClicked: stateVal });
    }
  }
  render() {
    return (
      <div>
        <h4> Hops: </h4>
        <Container>
          <Row>
            <Col>#</Col>
            <OverlayTrigger
              placement="top"
              overlay={<Tooltip id="hopsNameTooltip">Name of the Hops</Tooltip>}
            >
              <Col>HopName</Col>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="hopsAmountTooltip">Amount in oz of hops</Tooltip>
              }
            >
              <Col>Amount</Col>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="hopsAlphaTooltip">
                  Relative bitterness of the hop
                </Tooltip>
              }
            >
              <Col>Alpha acid</Col>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="hopsIBUTooltip">
                  How much bitterness is contributed to the final beer
                </Tooltip>
              }
            >
              <Col>IBU Contribution</Col>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="hopstimeTooltip">
                  How long the hop is boiled(or if steeped). Longer increases
                  the amount of bitterness imparted.
                </Tooltip>
              }
            >
              <Col>Time</Col>
            </OverlayTrigger>
            <OverlayTrigger
              placement="top"
              overlay={
                <Tooltip id="hopsUtilTooltip">
                  How much of the alpha acids are imparted into the finished
                  beer.
                </Tooltip>
              }
            >
              <Col>Util</Col>
            </OverlayTrigger>
          </Row>
          {Object.keys(this.props.hops).map(hopId => {
                return (
                  <HopsItem
                    selectedHop={this.selectedHop}
                    amountChange={this.props.amountChange}
                    key={hopId}
                    hopItem={this.props.hops[hopId]}
                    hopId={hopId}
                  />
                );
              })}
        </Container>
      </div>
    );
  }
}

export default Hops;
