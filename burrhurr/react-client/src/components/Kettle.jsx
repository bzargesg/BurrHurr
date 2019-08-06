import React from 'react';
import ListItem from './ListItem.jsx';
import {ListWrapper} from '../Styled/styledComps.jsx';
const Kettle = (props) => (
  <div>
    <ListWrapper>
    <h4> Kettle Additions: </h4>
    <h3>#   KettleName    amount    time</h3>
    <div className='yeastList'>
      <span classname='number recipe'>1</span>
      <span classname='kettleName recipe'>Name</span>
      <span classname='amount recipe'>kettleamount</span>
      <span classname='kettletime recipe'>kettletime</span>
    </div>
    </ListWrapper>
  </div>
)

export default Kettle;