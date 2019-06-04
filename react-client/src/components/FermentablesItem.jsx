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
    this.props.selectedFermentable(this.props.fermItem);
  }
  amountChange(e){
    e.preventDefault();
    this.props.amountChange(e,this.props.fermentableId)
  }
  render() {
    return (
      <Row
        key={this.props.fermentableId + 'tr'}
        style={this.state.style}
        onContextMenu={this.menu}
      >
        {Object.keys(this.props.fermItem).map(fermentableProperty => {
          let colField;
          if (fermentableProperty === 'amount') {
            colField = (
              <Col key={this.props.fermentableId + fermentableProperty}>
                <Form.Control type="amount" placeholder="1 lb" onChange={this.amountChange.bind(this)}/>
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
