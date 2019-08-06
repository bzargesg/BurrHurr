import React from 'react';
import {
  Ltd
} from '../Styled/styledComps.jsx';
class FermentableListItem extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      fermentable: this.props.fermentableItem,
      rowClick: false,
      clickStyle: {}
    }
    this.rowClick=this.rowClick.bind(this);
  }
  rowClick(){

    if(!this.state.rowClick){
      this.setState({rowClick: !this.state.rowClick,clickStyle:{
        backgroundColor: '#efe782',
      }});
    }else{
      this.setState({rowClick: !this.state.rowClick,clickStyle:{}});
    }
    this.props.rowClick(this.state.fermentable);
  }
  render(){

    return (
      <tr key={this.state.fermentable.id}  style={this.state.clickStyle} onClick={this.rowClick}>
        {Object.keys(this.state.fermentable).map(fermentableProperty => {
          if (
            fermentableProperty != 'id' &&
            fermentableProperty != 'createdAt' &&
            fermentableProperty != 'updatedAt'
          ) {
            return <Ltd key={this.state.fermentable.id+fermentableProperty}>{this.state.fermentable[fermentableProperty]}</Ltd>;
          }
        })}
      </tr>
    );
  }
}
export default FermentableListItem;