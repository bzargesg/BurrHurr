import React from 'react';
import {
  Ltd
} from '../../Styled/styledComps.jsx';
class FermentableListItem extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      fermentable: this.props.fermentableItem
    }
    this.rowClick=this.rowClick.bind(this);
  }
  rowClick(){
    this.props.rowClick(this.state.fermentable);
  }
  render(){
    return (
      <tr key={this.state.fermentable.id} onClick={this.rowClick}>
        {Object.keys(this.state.fermentable).map(fermentableProperty => {
          if (
            fermentableProperty != 'id' &&
            fermentableProperty != 'createdAt' &&
            fermentableProperty != 'updatedAt'
          ) {
            return <Ltd>{this.state.fermentable[fermentableProperty]}</Ltd>;
          }
        })}
      </tr>
    );
  }
}
export default FermentableListItem;