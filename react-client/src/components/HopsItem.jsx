import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
class HopsItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
      clickState: false
    };
    this.menu = this.menu.bind(this);
  }
  menu(e) {
    e.preventDefault();
    if (!this.state.clickState) {
      this.setState({
        style: { backgroundColor: '#d79922' },
        clickState: !this.state.clickState
      });
    } else {
      this.setState({ style: {}, clickState: !this.state.clickState });
    }
    this.props.selectedHop(this.props.hopItem);
  }
  amountChange(e){
    e.preventDefault();
    this.props.amountChange(e,this.props.hopsId)
  }
  render() {
    return (
      <Row
        key={this.props.hopId + 'tr'}
        style={this.state.style}
        onContextMenu={this.menu}
      >
        {Object.keys(this.props.hopItem).map(hopProperty => {
          let colField;
          if (hopProperty === 'amount') {
            colField = (
              <Col key={this.props.hopId + hopProperty}>
                <Form.Control type="amount" placeholder="1 lb" onChange={this.amountChange.bind(this)}/>
              </Col>
            );
          } else {
            colField = (
              <Col key={this.props.hopId + hopProperty}>
                {this.props.hopItem[hopProperty]}
              </Col>
            );
          }
          return colField;
        })}
      </Row>
    );
  }
}
export default hopsItem;
