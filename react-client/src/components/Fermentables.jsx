import React from 'react';
import {
  ListWrapper,
  ListTable,
  ListTableHeader,
  Ltd
} from '../Styled/styledComps.jsx';
class Fermentables extends React.Component {
  constructor(props) {
    super(props);
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
              return (<tr key={fermentableId}>
                {Object.keys(this.props.fermentables[fermentableId]).map(fermentableProperty=>{
                  return (<Ltd key={fermentableId+fermentableProperty}>{this.props.fermentables[fermentableId][fermentableProperty]}</Ltd>)
                })}
              </tr>)
            })}
            </tbody>
          </ListTable>
      
        </ListWrapper>
      </div>
    );
  }

}
export default Fermentables;
