import React from 'react';
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
    this.state= {
      fermentablesClicked: {},
    }
    this.selectedFermentable = this.selectedFermentable.bind(this);
  }
  selectedFermentable(val){
    let stateVal = this.state.fermentablesClicked;
    if(stateVal[val.name]){
      delete stateVal[val.name]
      this.setState({fermentablesClicked: stateVal});
    }else{
      stateVal[val.name]=val;
      this.setState({fermentablesClicked: stateVal});
    }
  }
  render() {
    var i = 0;
    return (
      <div>
        <ListWrapper>
          <h4> Fermentables: </h4>
          <ListTable>
            <thead>
            <tr>
              <ListTableHeader>#</ListTableHeader>
              <ListTableHeader>Fermentable Name</ListTableHeader>
              <ListTableHeader>Amount</ListTableHeader>
              <ListTableHeader>Color</ListTableHeader>
              <ListTableHeader>Gravity Contribution</ListTableHeader>
              <ListTableHeader>ABV contribution</ListTableHeader>
              <ListTableHeader>% of grist</ListTableHeader>
            </tr>
            </thead>
            <tbody>
            {Object.keys(this.props.fermentables).map(fermentableId =>{
              return <FermentablesItem selectedFermentable={this.selectedFermentable} key={fermentableId} fermItem={this.props.fermentables[fermentableId]} fermentableId={fermentableId}></FermentablesItem>
            })}
            </tbody>
          </ListTable>
      
        </ListWrapper>
      </div>
    );
  }

}
export default Fermentables;
