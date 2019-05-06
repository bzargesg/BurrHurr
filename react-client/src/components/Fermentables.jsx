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
            <tr>
              <ListTableHeader>#</ListTableHeader>
              <ListTableHeader>Fermentable Name</ListTableHeader>
              <ListTableHeader>Amount</ListTableHeader>
              <ListTableHeader>Color</ListTableHeader>
              <ListTableHeader>Gravity Contribution</ListTableHeader>
              <ListTableHeader>ABV contribution</ListTableHeader>
              <ListTableHeader>% of grist</ListTableHeader>
            </tr>
            {this.props.fermentables.map(fermentable =>{
              return (<tr>
                {Object.keys(fermentable).map(fermentableProperty=>{
                  return (<Ltd>{fermentable[fermentableProperty]}</Ltd>)
                })}
              </tr>)
            })}
          </ListTable>
      
        </ListWrapper>
      </div>
    );
  }

}
export default Fermentables;
