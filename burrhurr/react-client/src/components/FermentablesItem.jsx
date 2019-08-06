import React from 'react';
import { Ltd } from '../Styled/styledComps.jsx';
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
      <tr key={this.props.fermentableId+'tr'} style={this.state.style} onClick={this.clickElement} >
        {Object.keys(this.props.fermItem).map(fermentableProperty => {
          return (
            <Ltd key={this.props.fermentableId + fermentableProperty}>
              {this.props.fermItem[fermentableProperty]}
            </Ltd>
          );
        })}
      </tr>
    );
  }
}
export default FermentablesItem;