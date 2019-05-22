import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
class FermentablesItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      style: {},
      clickState: false
    };
    this.clickElement = this.clickElement.bind(this);
  }
  clickElement() {
    if (!this.state.clickState) {
      this.setState({
        style: { backgroundColor: '#d79922' },
        clickState: !this.state.clickState
      });
    } else {
      this.setState({ style: {}, clickState: !this.state.clickState });
    }
    this.props.selectedFermentable(this.props.fermItem);
  }
  render() {
    return (
      <Row
        key={this.props.fermentableId + 'tr'}
        style={this.state.style}
        onClick={this.clickElement}
      >
        {Object.keys(this.props.fermItem).map(fermentableProperty => {
          let colField;
          if (fermentableProperty === 'amount') {
            colField = (
              <Col key={this.props.fermentableId + fermentableProperty}>
                <Form.Control type="amount" placeholder="in lbs" />
              </Col>
            );
          } else {
            colField = (
              <Col key={this.props.fermentableId + fermentableProperty}>
                {this.props.fermItem[fermentableProperty]}
              </Col>
            );
          }
          return colField;
        })}
      </Row>
    );
  }
}
export default FermentablesItem;
